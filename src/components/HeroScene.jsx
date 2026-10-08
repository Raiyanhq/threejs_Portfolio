import { Suspense } from 'react';
import SceneReady from './SceneReady';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import HackerRoom from './HackerRoom';
import HeroCamera from './HeroCamera';
import Cube from './Cube';
import Rings from './Rings';
import ReactLogo from './ReactLogo';
import CanvasLoader from './CanvasLoader';
import SignalWorld from './SignalWorld';
import { useMotion } from '../hooks/useMotion';

export default function HeroScene({ visible, mode, game, onAction }) {
  const { motion } = useMotion();
  const mobile = useMediaQuery({ maxWidth: 640 });
  const animate = motion && visible;
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={animate ? 'always' : 'demand'}
      gl={{ alpha: true, antialias: true }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 22]} fov={45} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 10]} intensity={2} />
      <pointLight
        position={[-5, 3, 6]}
        color={mode.color}
        intensity={65}
        distance={22}
        decay={2}
      />
      <Suspense fallback={<CanvasLoader />}>
        <HeroCamera isMobile={mobile} motion={animate}>
          {mode.id === 'interface' ? (
            <group>
              <HackerRoom
                position={[0, -3.8, 0]}
                rotation={[0.12, -Math.PI, 0]}
                scale={mobile ? 0.058 : 0.07}
              />
              <Cube position={[6, 1, 0]} scale={0.65} motion={animate} />
              <ReactLogo position={[-6, 2, 0]} scale={0.65} motion={animate} />
              <Rings position={[5, 5, -5]} motion={animate} />
              <group position={[0, 4, -2]}>
                {game.tiles.map(
                  (tile, index) =>
                    tile > 0 && (
                      <mesh
                        key={tile}
                        position={[
                          ((index % 3) - 1) * 1.55,
                          -Math.floor(index / 3) * 0.9,
                          0,
                        ]}
                        onClick={(event) => {
                          event.stopPropagation();
                          onAction({ index });
                        }}
                      >
                        <boxGeometry args={[1.3, 0.65, 0.08]} />
                        <meshStandardMaterial
                          color={game.done ? '#b5efd2' : '#346b52'}
                          emissive="#5bbb8d"
                          emissiveIntensity={tile === index + 1 ? 0.8 : 0.15}
                          metalness={0.5}
                          roughness={0.3}
                        />
                      </mesh>
                    ),
                )}
              </group>
              {game.done && (
                <pointLight
                  position={[0, 4, 3]}
                  color="#b5ffd4"
                  intensity={35}
                  distance={18}
                />
              )}
            </group>
          ) : (
            <SignalWorld
              mode={mode}
              game={game}
              motion={animate}
              onAction={onAction}
            />
          )}
        </HeroCamera>
        <SceneReady />
      </Suspense>
    </Canvas>
  );
}
