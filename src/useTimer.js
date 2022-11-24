import { useEffect, useRef, useState } from "react"
import { dayTime } from "./helper";

export default function useTimer(initialTime={d:0,h:0,m:0,s:0}, tickDuration=1000) {
  const {init, start, stop} = useAnimationFrame();
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    let tick = 0;
    init(delta => {
      tick += delta;
      if (tick >= tickDuration) {
        tick = 0;
        setTime(dayTime);
      }
    });
    start();
    return stop;
  }, [tickDuration, init, start, stop]);
  
  return time;
}

export function useAnimationFrame() {
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const updateFncRef = useRef();

  function init(fnc) {
    updateFncRef.current = fnc;
  }
  function start() {
    requestRef.current = requestAnimationFrame(animate);
  }
  function stop() {
    cancelAnimationFrame(requestRef.current);
  }
  
  const animate = time => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      updateFncRef.current?.(deltaTime);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }

  return {
    init,
    start,
    stop
  }
}
