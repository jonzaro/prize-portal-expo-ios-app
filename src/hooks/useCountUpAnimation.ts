import { useEffect, useState } from 'react';

interface Options {
  duration?: number;
  delay?: number;
}

type UseCountAnimation = (countTo?: number, options?: Options) => number;

export const useCountUpAnimation: UseCountAnimation = (countTo = 0, opts) => {
  const duration = opts?.duration ?? 2000;
  const delay = opts?.delay ?? 0;
  const [count, setCount] = useState(0);

  const easeOutQuad = (t: number) => t * (2 - t);
  const frameDuration = 1000 / 60;

  useEffect(() => {
    setTimeout(() => {
      let frame = 0;
      const totalFrames = Math.round(duration / frameDuration);
      const counter = setInterval(() => {
        frame++;
        const progress = easeOutQuad(frame / totalFrames);
        setCount(countTo * progress);

        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
    }, delay);
  }, [countTo]);

  return parseFloat(count.toFixed(0));
};
