import { useLayoutEffect } from 'react';
import { useTexture } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { SRGBColorSpace } from 'three';

export default function ProjectPoster({ project }) {
  const texture = useTexture(project.poster);
  const invalidate = useThree((state) => state.invalidate);
  useLayoutEffect(() => {
    texture.flipY = false;
    texture.colorSpace = SRGBColorSpace;
    texture.needsUpdate = true;
    invalidate();
  }, [texture, invalidate]);
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}
