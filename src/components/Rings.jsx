import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
export default function Rings({ position, motion = true }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (!motion) return;
    ref.current.children.forEach((ring, i) => {
      ring.rotation.x += delta * (0.2 + i * 0.08);
      ring.rotation.y += delta * 0.15;
    });
  });
  return (
    <group ref={ref} position={position} scale={0.75}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} rotation={[0.2 * i, 0.3 * i, 0]}>
          <torusGeometry args={[(i + 1) * 0.5, 0.025, 12, 48]} />
          <meshStandardMaterial
            color="#9ee8ca"
            metalness={0.5}
            roughness={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}
