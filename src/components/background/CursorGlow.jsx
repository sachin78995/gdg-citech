import { useMousePosition } from '../../hooks/useEffects';

export default function CursorGlow() {
  const { position } = useMousePosition();

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(66, 133, 244, 0.06), transparent 60%)`,
        transition: 'background 0.15s ease',
      }}
    />
  );
}
