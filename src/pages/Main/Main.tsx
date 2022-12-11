import { Link } from "react-router-dom"

import style from "./Main.module.css";

const Main = () => {
  return (
    <div className={style.wrap}>
      <h1>Schulte table game</h1>
      <div className={style.links}>
        <Link className="btn-primary" to={"/preparation-for-game"}>Play</Link>
        <Link className="btn-primary" to={"/info"}>About game</Link>
        <Link className="btn-primary" to={"/statistics"}>Statistics</Link>
      </div>
    </div>
  );
}

export default Main; 
