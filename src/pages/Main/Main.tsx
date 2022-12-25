import { Link } from "react-router-dom"

import style from "./Main.module.css";

const Main = () => {
  return (
    <div className={style.wrap}>
      <h1>Schulte table game</h1>
      <div className={style.links}>
        <Link data-testid="preparation-link" className="btn-primary" to={"/preparation-for-game"}>Play</Link>
        <Link data-testid="about-link" className="btn-primary" to={"/about"}>About game</Link>
      </div>
    </div>
  );
}

export default Main; 
