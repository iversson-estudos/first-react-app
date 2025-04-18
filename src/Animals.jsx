function Button({
  text = "Click Me!",
  color = "green",
  fontSize = 18,
  handleClick,
}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export default function App() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <Button
        handleClick={() => handleButtonClick("https://www.theodinproject.com")}
      />
    </div>
  );
}
