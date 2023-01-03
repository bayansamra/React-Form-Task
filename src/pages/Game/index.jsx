import "./style.css";


export default function Game(props) {

  return (
    <>
      <div className="game-card">
        <div>
          <img
            src={props.cardBg}
            alt="game-card-background"
            className="game-card-background"
          />
        </div>

        <div className="overlay-content">
        <p className={`desc-game ${props.direction}`}>{props.desc}</p>

        </div>
      </div>
    </>
  );
}