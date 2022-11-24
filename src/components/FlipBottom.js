import { useEffect, useState } from "react";
import { numToStr } from "../helper";

export default function FlipBottom({number, flipTime}) {
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
    }, flipTime);
  }, [value]);

  return (
    <div className="FlipBottom">
      <div className="FlipBottom__leaf">
        {numToStr(delayedValue)}
      </div>
      <div
        className={`FlipBottom__leaf${value === number ? " FlipBottom__prev" : ""}`}
        style={{
          animationDuration: flipTime / 1000 + "s",
          animationDelay: flipTime / 1000 * 0.8 + "s"
        }}
      >
        {numToStr(delayedValue)}
      </div>
    </div>
  );
}
