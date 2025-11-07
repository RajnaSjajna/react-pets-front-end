import { useState, useEffect } from "react";
import * as petService from "./services/petService.js";
import PetList from "./components/petList/PetList.jsx";
import PetDetail from "./components/PetDetail/PetDetail";
import "./App.css";

function App() {
  const [pets, setPets] = useState([]);
  const [selected, setSelected] = useState(null);

    const handleSelect = (pet) => {
      setSelected(pet);
    };

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const fetchedPets = await petService.index();
        if (fetchedPets.err) {
          throw new Error(fetchedPets.err);
        }
        setPets(fetchedPets);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPets();
  }, []);

  return (
    <>
      <h1>hello</h1>
      <PetList pets={pets} handleSelect={handleSelect} />
      <PetDetail selected={selected} />
    </>
  );
}

export default App;
