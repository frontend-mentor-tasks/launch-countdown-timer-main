import { useEffect, useState } from "react";
import { numToStr } from "../helper";

export default function FlipTop({number, flipTime}) {
  const [value, setValue] = useState(0);
  const [delayedValue, setDelayedValue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setValue(number);
    }, 100);
  }, [number]);

  useEffect(() => {
    setTimeout(() => {
      setDelayedValue(value);
    }, flipTime * 0.9);
  }, [value, flipTime]);

  return (
    <div className="FlipTop">
      <div className="FlipTop__leaf">
        {numToStr(value)}
      </div>
      <div
        className={`FlipTop__leaf${value === number ? " FlipTop__prev" : ""}`}
        style={{
          animationDuration: flipTime / 1000 + "s",
        }}
      >
        {numToStr(delayedValue)}
      </div>
    </div>
  );
}
