import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

export default function HeroCamera({ isMobile, motion, children }) {
  const group = useRef();
  useFrame((state, delta) => {
    if (motion && !isMobile)
      easing.dampE(
        group.current.rotation,
        [-state.pointer.y * 0.19, state.pointer.x * 0.28, 0],
        0.22,
        delta,
      );
  });
  return <group ref={group}>{children}</group>;
}
