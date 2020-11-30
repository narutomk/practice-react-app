import React, { useState } from "react";

function Slider() {
  const [image, setImage] = useState("media1.png");
  const handleOne = () => {
    setImage("media2.png");
  };
  const handleTwo = () => {
    setImage("media3.png");
  };
  return (
    <div>
      <div className="container">
        <div className="row ">
          <div className="col-4">
            <button className="btn btn-danger" onClick={handleOne}>
              one
            </button>
          </div>
          <div className="col-4">
            <button className="btn btn-danger" onClick={handleTwo}>
              two
            </button>
          </div>
          <div className="col-4">
            <img src={image} alt="img"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
