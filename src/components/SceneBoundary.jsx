import { Component, Suspense, useEffect, useRef, useState } from 'react';

class Boundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

export default function SceneBoundary({
  children,
  className = '',
  label = 'Interactive 3D scene',
  fallback,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);
  const [supported, setSupported] = useState(true);
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    setSupported(Boolean(gl));
    gl?.getExtension('WEBGL_lose_context')?.loseContext();
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) setReady(true);
      },
      { rootMargin: '150px' },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const placeholder = fallback || (
    <div className="scene-placeholder">
      <span className="mono">3D / INTERACTIVE</span>
      <p>Built with a different perspective.</p>
    </div>
  );
  return (
    <div ref={ref} className={className} role="group" aria-label={label}>
      {supported && ready ? (
        <Boundary fallback={placeholder}>
          <Suspense
            fallback={
              <div className="scene-loading" role="status">
                Loading scene
                <span className="loading-dot" />
              </div>
            }
          >
            {children(visible)}
          </Suspense>
        </Boundary>
      ) : (
        placeholder
      )}
    </div>
  );
}
