import { useRef, useEffect } from "react";

export default function useInterval(callback: Function, delay: number) {
  const savedCallback = useRef<Function>(null!);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
