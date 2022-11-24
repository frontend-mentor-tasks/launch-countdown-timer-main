import FlipBottom from "./FlipBottom";
import FlipTop from "./FlipTop";
import "./FlipCard.scss";

const flipTime = 250;

export default function FlipCard({number, text}) {
  
  return (
    <div className="FlipCard">
      <div className="FlipCard__cards">
        <FlipTop number={number} flipTime={flipTime} />
        <FlipBottom number={number} flipTime={flipTime} />
      </div>
      <p className="FlipCard__text">{text}</p>
    </div>
  )
}
