import React, {useEffect} from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys }) {
  

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(resp => resp.json())
    .then(data => setToys(data))
  }, [setToys])

  const handleDelete = (id) => {
    const newToys = toys.filter((toy) => toy.id !== id);
    setToys(newToys);
  }

  

  const displayToys = toys.map(toy => {
                     return  <ToyCard 
                              onDelete={handleDelete}
                              toy={toy}
                              key={toy.id} 
                              id={toy.id} 
                              name={toy.name} 
                              image={toy.image} 
                              likes={toy.likes}  
                              />
          })

  return (
    <div id="toy-collection">{displayToys}</div>
  );
}

export default ToyContainer;
