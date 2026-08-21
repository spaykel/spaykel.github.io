import { useEffect } from 'react';

export default function CursorField() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const coarsePointer = window.matchMedia('(pointer: coarse)');

    if (reduceMotion.matches || coarsePointer.matches) {
      return undefined;
    }

    let frameId = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const applyPosition = () => {
      root.style.setProperty('--cursor-x', `${x + 10}px`);
      root.style.setProperty('--cursor-y', `${y + 10}px`);
      root.style.setProperty('--grid-shift-x', `${((x / window.innerWidth) - 0.5) * 18}px`);
      root.style.setProperty('--grid-shift-y', `${((y / window.innerHeight) - 0.5) * 18}px`);
      frameId = 0;
    };

    const handlePointerMove = (event) => {
      x = event.clientX;
      y = event.clientY;

      if (!frameId) {
        frameId = window.requestAnimationFrame(applyPosition);
      }
    };

    applyPosition();
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return <div className="cursor-field" aria-hidden="true" />;
}
