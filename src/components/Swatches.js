import "./Swatches.css";

function Swatches() {
  const swatches = ["#5e8c30", "#f2b33d", "#f27405", "#f25c05", "#f2f2f2"];

  function copyToClipboard(e) {
    const color = e.target.getAttribute("name");
    navigator.clipboard.writeText(color);
  }

  function renderSwatches() {
    return swatches.map((swatch, index) => {
      const swatchStyle = {
        backgroundColor: swatch,
      };
      return (
        <div
          className="swatch"
          key={index}
          style={swatchStyle}
          name={swatch}
          onClick={copyToClipboard}
        ></div>
      );
    });
  }

  return (
    <div className="Swatches">
      <div className="pad">Color Swatches (click to copy)</div>
      <div className="swatch-container">{renderSwatches()}</div>
    </div>
  );
}

export default Swatches;
