import React,{useState} from 'react';
import './App.css';
import Nav from './Component/Nav'
function App() {
  const [name,setName] = useState('');

  const [compteur,setCompteur] = useState(0);
  const [show,setshow] = useState(false);

  const incrementCompteur = () => {
    setCompteur(compteur + 1);
  }
  const handleshow = () => {
    setshow(!show);
    setName(name);
  }
  const handleInput = (e) => {
    setName(e.target.value)
  }
   
  return (
    <div className="App content ">
        <div className="d-flex flex-row">
        <button type = "button" className="btn btn-outline-success p-2" 
        onClick ={() => {setCompteur(compteur-1)}}>
          Décréménter</button> 

        <label className="p-2">Mon compteur : {compteur} </label>
        <button type = "button" className="btn btn-outline-success p-2" onClick ={incrementCompteur}>Incréménter</button> 
        <button type = "button" className="btn btn-danger p-2" onClick ={() => setCompteur(0)}>Reset Compteur</button> 
        <input type="text" onChange={handleInput}></input> 
        <button type = "button" className="btn btn-success p-2" onClick ={handleshow}>Show/hide</button> 
          

        </div>
        {show && <Nav username={name} />}
    </div>
  );
}

export default App;
