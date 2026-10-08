import { Suspense } from 'react';
import SceneReady from './SceneReady';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Developer from './Developer';
import CanvasLoader from './CanvasLoader';
import { useMotion } from '../hooks/useMotion';
export default function DeveloperScene({ visible, animation }) {
  const { motion } = useMotion();
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={motion && visible ? 'always' : 'demand'}
      camera={{ position: [0, 0.3, 5], fov: 45 }}
    >
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={3} />
      <directionalLight position={[-4, 2, -2]} intensity={2} color="#b2f4d7" />
      <Suspense fallback={<CanvasLoader />}>
        <Developer
          position={[0, -2.1, 0]}
          scale={2.1}
          animationName={motion ? animation : 'idle'}
          motion={motion && visible}
        />
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
