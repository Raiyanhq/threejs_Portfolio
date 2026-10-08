import { Suspense } from 'react';
import SceneReady from './SceneReady';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import DemoComputer from './DemoComputer';
import CanvasLoader from './CanvasLoader';
import { useMotion } from '../hooks/useMotion';
export default function ProjectScene({ visible, texture, playDemo, project }) {
  const { motion } = useMotion();
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={visible && playDemo && motion ? 'always' : 'demand'}
      camera={{ position: [0, 0.3, 5], fov: 45 }}
    >
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <directionalLight position={[-5, 3, -2]} color="#9ee8ca" intensity={2} />
      <Suspense fallback={<CanvasLoader />}>
        <Center>
          <group scale={1.35} rotation={[0, -0.18, 0]}>
            <DemoComputer
              project={project}
              texture={texture}
              playDemo={playDemo}
              playing={visible && motion}
            />
          </group>
        </Center>
        <SceneReady />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
