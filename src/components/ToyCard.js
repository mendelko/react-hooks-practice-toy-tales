import React, {useState} from "react";

function ToyCard({ name, image, id, onDelete, toy, likes }) {

  const [showLikes, setShowLikes] = useState(likes);

  function handleDelete(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
      headers: {
        "content-type" : "application/json"
      }
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
     onDelete(toy.id)
  }

  function handleLikes(){
    console.log(likes)
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify({
        likes: showLikes + 1
      })
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
     setShowLikes(showLikes + 1)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{showLikes} Likes </p>
      <button onClick={handleLikes} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
