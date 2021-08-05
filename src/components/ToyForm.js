import React from "react";

function ToyForm({ addToy, formData, setFormData }) {

  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        image: formData.image
      })
    })
    addToy(formData)
  }

  function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          onSubmit={handleSubmit}
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
