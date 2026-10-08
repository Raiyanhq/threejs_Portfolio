import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useMotion } from '../hooks/useMotion';

function Globe({ motion }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (motion) ref.current.rotation.y += delta * 0.08;
  });
  // Rotate Atlanta (33.7501 N, 84.3885 W) toward the viewer.
  const lat = (33.7501 * Math.PI) / 180;
  const lng = (-84.3885 * Math.PI) / 180;
  const pin = [
    1.53 * Math.cos(lat) * Math.cos(lng),
    1.53 * Math.sin(lat),
    -1.53 * Math.cos(lat) * Math.sin(lng),
  ];
  return (
    <group ref={ref} rotation={[0.25, 0.15, -0.2]}>
      <mesh>
        <sphereGeometry args={[1.5, 32, 20]} />
        <meshBasicMaterial color="#10251f" />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.51, 32, 20]} />
        <meshBasicMaterial
          color="#5d9d88"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
      <mesh position={pin}>
        <sphereGeometry args={[0.055, 16, 16]} />
        <meshBasicMaterial color="#bcfbdc" />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.008, 8, 80]} />
        <meshBasicMaterial color="#7ec8ac" transparent opacity={0.6} />
      </mesh>
    </group>
  );
}
export default function GlobeScene({ visible }) {
  const { motion } = useMotion();
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={motion && visible ? 'always' : 'demand'}
      camera={{ position: [0, 0, 4.7], fov: 45 }}
    >
      <Globe motion={motion && visible} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
