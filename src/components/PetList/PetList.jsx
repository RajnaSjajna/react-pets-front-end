const PetList = ({ pets, handleSelect }) => {
  console.log(pets);

  return (
    <div>
      <h1>Pet List</h1>
      <div>
        <h1>Pet List</h1>
        <div>
          {!pets.length ? (
            <h2>No Pets Yet!</h2>
          ) : (
            <ul>
              {pets.map((pet) => (
                <li
                  key={pet._id}
                  style={{ cursor: "pointer", color: "#646CFF" }}
                  onClick={() => handleSelect(pet)}
                >
                  {pet.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default PetList;
