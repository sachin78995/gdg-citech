import { useScrollProgress } from '../../hooks/useEffects';
import './ScrollProgress.css';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="scroll-progress">
      <div
        className="scroll-progress__bar"
        style={{ height: `${progress * 100}%` }}
      />
    </div>
  );
}
