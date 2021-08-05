import React, { useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);
  const [formData, setFormData] = useState({})

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(toy){
    const newToys = [...toys, toy]
    setToys(newToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy} toys={toys} setToys={setToys} formData={formData} setFormData={setFormData}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} setToys={setToys} formData={formData}/>
    </>
  );
}

export default App;
