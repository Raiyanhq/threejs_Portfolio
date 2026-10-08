import { Html } from '@react-three/drei';
export default function CanvasLoader() {
  return (
    <Html center>
      <div className="canvas-loader" role="status">
        Preparing the scene…
      </div>
    </Html>
  );
}
