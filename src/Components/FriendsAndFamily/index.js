import React from "react";
import { useState } from "react";
import Card from "../Card/Card";
import chris from "./chris.jpeg";
import sarah from "./sarah.jpeg";
import tom from "./tom.jpeg";

let list = [
  {
    id: 0,
    name: "Chris",
    relationship: "Grandson",
    image: chris,
    age: 10,
    dateOfBirth: "2013-01-01",
  },
  {
    id: 1,
    name: "Sarah",
    relationship: "Granddaughter",
    image: sarah,
    age: 12,
    dateOfBirth: "2011-01-01",
  },
  {
    id: 2,
    name: "Tom",
    relationship: "Son",
    image: tom,
    age: 24,
    dateOfBirth: "1998-01-11",
  },
];

function FriendsAndFamily() {
  const [familyAndFriendsList, setFamilyAndFriendsList] = useState(list);
  const [addButton, setAddButton] = useState(false);
  const [relationship, setRelationship] = useState("");
  const [name, setName] = useState("");
  const [DOB, setDOB] = useState("");
  const [age, setAge] = useState(null);

  function handleClick() {
    setAddButton(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Add your logic here to handle form submission
    //add data to a new object in the list array

    const newPerson = {
      id: familyAndFriendsList.length,
      name: name,
      relationship: relationship,
      image: "",
      age: age,
      dateOfBirth: DOB,
    };

    setFamilyAndFriendsList([...familyAndFriendsList, newPerson]);

    console.log(list);

    console.log(DOB);
    // Clear form fields
    setName("");
    setRelationship("");
    setAddButton(false);
    setDOB("");
    setAge(null);
  }

  return (
    <>
      {!addButton && ( // When addButton is not clicked, it is false, therefore the list of friends and family will be shown
        <>
          {familyAndFriendsList.map((item) => (
            <Card
              id={item.id}
              name={item.name}
              relationship={item.relationship}
              image={item.image}
              age={item.age}
            />
          ))}

          <button
            style={{ display: "flex", alignItems: "center" }}
            onClick={handleClick}
          >
            {" "}
            Add{" "}
          </button>
        </>
      )}

      {addButton && ( // When addButton is clicked, it is true, therefore the form will be shown
        <form onSubmit={handleSubmit}>
          <label>
            {" "}
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
            />
          </label>

          <label>
            {" "}
            Relationship:
            <input
              type="text"
              label="Relationship: "
              value={relationship}
              onChange={(event) => setRelationship(event.target.value)}
              placeholder="Relationship"
            />
          </label>

          <label>
            {" "}
            Age:
            <input
              type="number"
              label="Age: "
              value={age}
              onChange={(event) => setAge(event.target.value)}
              placeholder="age"
            />
          </label>

          <label>
            {" "}
            Date of Birth:
            <input
              type="date"
              label="Date of Birth: "
              value={DOB}
              onChange={(event) => setDOB(event.target.value)}
              placeholder="Date of Birth"
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
}

export default FriendsAndFamily;
