import { Float, useGLTF } from '@react-three/drei';
export default function ReactLogo({ motion = true, ...props }) {
  const { nodes, materials } = useGLTF('/models/react.glb', '/draco/');
  return (
    <Float speed={motion ? 1 : 0} floatIntensity={2}>
      <group {...props} dispose={null}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.392, 0.392, 0.527]}
        />
      </group>
    </Float>
  );
}
