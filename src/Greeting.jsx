import burger from "./assets/hamburger.svg";
import react from "./assets/react.svg";

export default function Greeting() {
  return (
    <>
      <div className="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p className="summary">
        You can find my thoughts here.
        <br />
        <br />
        <b>
          And <i>pictures</i>
        </b>
        of scientists!
      </p>
    </>
  );
}
