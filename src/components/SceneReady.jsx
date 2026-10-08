import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

// Mark a scene ready only after its suspense-bound assets have mounted.
export default function SceneReady() {
  const canvas = useThree((state) => state.gl.domElement);
  useEffect(() => {
    canvas.dataset.sceneReady = 'true';
    return () => {
      delete canvas.dataset.sceneReady;
    };
  }, [canvas]);
  return null;
}
