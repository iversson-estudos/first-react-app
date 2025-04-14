import burger from "./assets/hamburger.svg";
function Greeting() {
  return (
    <>
      <h1>I like hamburger!</h1>
      <img src={burger} style={{ width: 240, height: 240 }} />
    </>
  );
}

export default Greeting;
