import React, { useState } from "react";
import "./App.css";
import Nav from "./Component/Nav";
import ComponentTwo from "./Component/ComponentTwo";

function App() {
  const data = ["media1.png", "media2.png", "media3.png"];
  const [compteur, setCompteur] = useState(0);
  const handlePrevious = () => {
    if (compteur === 0) {
      setCompteur(2);
      console.log(compteur);
    } else setCompteur(compteur - 1);
  };
  const handleNext = () => {
    if (compteur === 2) {
      setCompteur(0);
      console.log(compteur);
    } else setCompteur(compteur + 1);
  };
  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-2">
            <button className="btn btn-danger" onClick={handlePrevious}>
              Previous
            </button>
          </div>
          <div className="col-8">
            <img class="image-fluid" src={data[compteur]} alt="img"></img>
          </div>
          <div className="col-2">
            <button className="btn btn-danger" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
        <div className="row">
          {data.map(function (item, i) {
            return (
              <img src={item} key={i} onClick={() => setCompteur(i)}></img>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
