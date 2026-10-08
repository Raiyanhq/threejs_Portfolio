import { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import ProjectPoster from './ProjectPoster';
import { VideoTexture, SRGBColorSpace } from 'three';
import { useThree } from '@react-three/fiber';

function DemoScreen({ source, playing, project }) {
  const [texture, setTexture] = useState(null);
  const [hasFrame, setHasFrame] = useState(false);
  const invalidate = useThree((state) => state.invalidate);
  useEffect(() => {
    const video = document.createElement('video');
    video.crossOrigin = 'anonymous';
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.src = source;
    const map = new VideoTexture(video);
    map.colorSpace = SRGBColorSpace;
    map.flipY = false;
    setTexture(map);
    const loaded = () => {
      setHasFrame(true);
      invalidate();
    };
    video.addEventListener('loadeddata', loaded);
    return () => {
      video.pause();
      video.removeEventListener('loadeddata', loaded);
      video.removeAttribute('src');
      video.load();
      map.dispose();
    };
  }, [source, invalidate]);
  useEffect(() => {
    const video = texture?.image;
    if (!video) return;
    if (playing)
      video.play().catch(() => {
        /* The screen keeps its poster when autoplay is unavailable. */
      });
    else video.pause();
  }, [texture, playing]);
  if (!hasFrame) return <ProjectPoster project={project} />;
  return (
    <meshBasicMaterial
      map={texture}
      color={texture ? '#ffffff' : '#152822'}
      toneMapped={false}
    />
  );
}
export default function DemoComputer({
  texture,
  playDemo,
  playing,
  project,
  ...props
}) {
  const { nodes, materials } = useGLTF('/models/computer.glb', '/draco/');
  const materialNames = [
    'computer',
    'base__0',
    'Material_36',
    'Material_35',
    'Material_34',
    'keys',
    'keys2',
    'Material_37',
  ];
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes['monitor-screen'].geometry}
        position={[0.127, 1.831, 0.511]}
        rotation={[1.571, -0.005, 0.031]}
        scale={[0.661, 0.608, 0.401]}
      >
        {playDemo && texture && playing ? (
          <DemoScreen
            key={texture}
            source={texture}
            playing={playing}
            project={project}
          />
        ) : (
          <ProjectPoster project={project} />
        )}
      </mesh>
      <group
        position={[0.266, 1.132, 0.051]}
        rotation={[0, -0.033, 0]}
        scale={[0.042, 0.045, 0.045]}
      >
        {materialNames.map((name, i) => (
          <mesh
            key={name}
            geometry={nodes[`Monitor-B-_computer_0_${i + 1}`].geometry}
            material={materials[name]}
          />
        ))}
      </group>
    </group>
  );
}
