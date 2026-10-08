import { useRef, useState } from 'react';
import { Float, useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
export default function Cube({ motion = true, ...props }) {
  const { nodes } = useGLTF('/models/cube.glb', '/draco/');
  const texture = useTexture('/textures/cube.png');
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  useFrame((_, delta) => {
    if (!motion) return;
    ref.current.rotation.x += delta * (hovered ? 1.4 : 0.25);
    ref.current.rotation.y += delta * (hovered ? 1.4 : 0.35);
  });
  return (
    <Float speed={motion ? 1 : 0} floatIntensity={2}>
      <group rotation={[2.6, 0.8, -1.8]} {...props} dispose={null}>
        <mesh
          ref={ref}
          geometry={nodes.Cube.geometry}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
}
