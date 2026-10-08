import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import { cloudNodes } from '../constants/workspace';

const neuralNodes = Array.from({ length: 18 }, (_, index) => {
  const layer = Math.floor(index / 6);
  const angle = ((index % 6) * Math.PI) / 3 + layer * 0.28;
  return [
    Math.cos(angle) * (3.4 + layer * 0.6),
    Math.sin(angle) * (3.4 + layer * 0.6),
    (layer - 1) * 2.4,
  ];
});
const neuralEdges = new Float32Array(
  neuralNodes.flatMap((node, index) => [
    ...node,
    ...neuralNodes[Math.floor(index / 6) * 6 + ((index + 1) % 6)],
    ...node,
    ...neuralNodes[(index + 6) % 18],
  ]),
);
const stars = new Float32Array(
  Array.from({ length: 100 }, (_, index) => [
    Math.sin(index * 127.1) * 9,
    Math.cos(index * 311.7) * 6,
    -3 - (index % 9),
  ]).flat(),
);

function Orbit({ radius, color, rotation, motion, speed = 0.12 }) {
  const ref = useRef(null);
  useFrame((_, delta) => {
    if (motion) ref.current.rotation.z += delta * speed;
  });
  return (
    <group rotation={rotation}>
      <group ref={ref}>
        <mesh>
          <torusGeometry args={[radius, 0.017, 6, 96]} />
          <meshBasicMaterial color={color} transparent opacity={0.5} />
        </mesh>
        <mesh position={[radius, 0, 0]}>
          <sphereGeometry args={[0.11, 12, 12]} />
          <meshBasicMaterial color={color} />
        </mesh>
      </group>
    </group>
  );
}

function DataPacket({ from, to, offset, motion, active }) {
  const ref = useRef(null);
  useFrame(({ clock }) => {
    if (!motion) return;
    const t = (clock.elapsedTime * (active ? 0.55 : 0.18) + offset) % 1;
    ref.current.position.set(
      from[0] + (to[0] - from[0]) * t,
      from[1] + (to[1] - from[1]) * t,
      from[2] + (to[2] - from[2]) * t,
    );
  });
  return (
    <mesh ref={ref} position={from}>
      <sphereGeometry args={[active ? 0.13 : 0.07, 10, 10]} />
      <meshBasicMaterial color={active ? '#d9f5ff' : '#426b98'} />
    </mesh>
  );
}

function CloudDistrict({ game, motion, onAction }) {
  return (
    <group rotation={[0.12, -0.25, 0]} position={[0, 0.25, 0]}>
      <Orbit
        radius={6.1}
        color="#679fd7"
        rotation={[Math.PI / 2, 0, 0]}
        motion={motion}
      />
      {cloudNodes.map((node, index) => {
        const online = game.route.includes(node.id);
        return (
          <group
            key={node.id}
            position={node.position}
            onClick={(event) => {
              event.stopPropagation();
              if (!online) onAction({ node: node.id });
            }}
          >
            <mesh position={[0, -1.3, 0]}>
              <cylinderGeometry args={[1.8, 1.35, 0.3, 6]} />
              <meshStandardMaterial
                color="#15273b"
                metalness={0.8}
                roughness={0.3}
              />
            </mesh>
            <mesh position={[0, -1.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <ringGeometry args={[1.5, 1.56, 6]} />
              <meshBasicMaterial color={online ? '#9dc9ff' : '#335579'} />
            </mesh>
            {[0, 1, 2].map((level) => (
              <group key={level} position={[0, level * 0.66 - 0.5, 0]}>
                <mesh>
                  <boxGeometry args={[1.7, 0.5, 1.3]} />
                  <meshStandardMaterial
                    color={online ? '#315e88' : '#1a2d45'}
                    emissive={online ? '#24496f' : '#060d19'}
                    emissiveIntensity={online ? 0.8 : 0.3}
                    metalness={0.7}
                    roughness={0.28}
                  />
                </mesh>
                <mesh position={[0, 0, 0.66]}>
                  <boxGeometry args={[1.25, 0.045, 0.02]} />
                  <meshBasicMaterial color={online ? '#b9eeff' : '#395572'} />
                </mesh>
                <mesh position={[0.58, 0.13, 0.67]}>
                  <sphereGeometry args={[0.045, 8, 8]} />
                  <meshBasicMaterial color={online ? '#b5ffd9' : '#66839b'} />
                </mesh>
              </group>
            ))}
            <mesh position={[0, 1.8, 0]} rotation={[0, 0, Math.PI / 4]}>
              <octahedronGeometry args={[online ? 0.5 : 0.28]} />
              <meshStandardMaterial
                color={online ? '#bce8ff' : '#547292'}
                emissive="#74bfff"
                emissiveIntensity={online ? 1.5 : 0.1}
                wireframe={!online}
              />
            </mesh>
            {online && (
              <pointLight
                position={[0, 2, 1]}
                color="#9dc9ff"
                intensity={6}
                distance={5}
              />
            )}
            {index < 2 && (
              <Line
                points={[
                  [0, -0.7, 0],
                  [2, -0.7, 0],
                  [
                    cloudNodes[index + 1].position[0] - node.position[0],
                    cloudNodes[index + 1].position[1] - node.position[1] - 0.7,
                    cloudNodes[index + 1].position[2] - node.position[2],
                  ],
                ]}
                color={online ? '#86ceff' : '#2b4662'}
                lineWidth={online ? 2 : 1}
              />
            )}
          </group>
        );
      })}
      {[0, 1].map((index) => (
        <DataPacket
          key={index}
          from={cloudNodes[index].position}
          to={cloudNodes[index + 1].position}
          offset={index * 0.5}
          motion={motion}
          active={game.route.length > index}
        />
      ))}
      <gridHelper
        args={[16, 16, '#355f86', '#152c41']}
        position={[0, -2.6, 0]}
      />
    </group>
  );
}

function NeuralConstellation({ game, motion }) {
  const network = useRef(null);
  const core = useRef(null);
  const pairs = game.matched.length / 2;
  useFrame((_, delta) => {
    if (!motion) return;
    network.current.rotation.y += delta * (game.done ? 0.18 : 0.065);
    core.current.rotation.x += delta * 0.2;
    core.current.rotation.z -= delta * 0.13;
  });
  return (
    <group>
      <group ref={network} rotation={[0.15, 0.2, 0]}>
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[neuralEdges, 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#bd8df4"
            transparent
            opacity={0.16 + pairs * 0.12}
          />
        </lineSegments>
        {neuralNodes.map((position, index) => (
          <mesh
            position={position}
            key={index}
            scale={Math.floor(index / 6) < pairs ? 1.6 : 1}
          >
            <sphereGeometry args={[0.1, 12, 12]} />
            <meshBasicMaterial
              color={Math.floor(index / 6) < pairs ? '#f0dfff' : '#795991'}
            />
          </mesh>
        ))}
      </group>
      <group ref={core}>
        <mesh scale={1 + pairs * 0.12}>
          <icosahedronGeometry args={[1.35, 1]} />
          <meshStandardMaterial
            color="#9f73cf"
            emissive="#a259f0"
            emissiveIntensity={0.35 + pairs * 0.3}
            roughness={0.25}
            metalness={0.6}
          />
        </mesh>
        <mesh scale={1.8 + pairs * 0.1}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial
            wireframe
            color="#deb9ff"
            transparent
            opacity={0.5}
          />
        </mesh>
      </group>
      <Orbit
        radius={5.8}
        color="#d6b6ff"
        rotation={[0.6, 0.8, 0]}
        motion={motion}
        speed={0.2}
      />
      <Orbit
        radius={5.4}
        color="#8a8fff"
        rotation={[1.4, -0.5, 0.4]}
        motion={motion}
        speed={-0.15}
      />
      <pointLight color="#d6b6ff" intensity={20} distance={15} />
    </group>
  );
}

export default function SignalWorld({ mode, game, motion, onAction }) {
  return (
    <group>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[stars, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color={mode.color}
          size={0.04}
          transparent
          opacity={0.65}
          sizeAttenuation
        />
      </points>
      {mode.id === 'cloud' ? (
        <CloudDistrict game={game} motion={motion} onAction={onAction} />
      ) : (
        <NeuralConstellation game={game} motion={motion} />
      )}
      {game.done && (
        <Orbit
          radius={6.7}
          color={mode.color}
          rotation={[0.2, 0, 0]}
          motion={motion}
          speed={0.35}
        />
      )}
    </group>
  );
}
