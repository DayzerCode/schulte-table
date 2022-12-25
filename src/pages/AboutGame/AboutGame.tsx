import { Link } from "react-router-dom";

import style from "./AboutGame.module.css"

const AboutGame = () => {
  return (
    <section data-testid="about-game-page" className={style.wrap}>
      <h1>About Schulte tables</h1>
      <p>Schulte tables are tables with randomly arranged characters,
        usually numbers or letters used to check and develop the speed of their visual search in a specific order.
        These tables were originally
        developed by the German psychotherapist Walter Schulte as a psychodiagnostic test for studying the properties of attention.
        Later they began to be used as exercises for training peripheral visual perception, which is useful for developing
        the speed reading skill. In addition, these tables are used in psychology (there are various methods) in studying the
        effectiveness and efficiency of people, their ability to hold and switch attention.
      </p>
      <Link className="btn-primary" to="/">Back to main page</Link>
    </section>
  );
}

export default AboutGame; 
