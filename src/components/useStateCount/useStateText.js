import React, { useState } from "react";

function Hooks3() {
  let [inputData, setInputData] = useState({ firstName: "", lastName: "" });
  let [contactsData, setContactsData] = useState([]);

  function handleChange() {
    let { name, value } = event.target;
    setInputData((prevInputData) => ({ ...prevInputData, [name]: value }));
  }

  function handleSubmit() {}

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          name="firstName"
          value={inputData.firstName}
          onChange={handleChange}
        />
        <input
          placeholder="Last Name"
          name="lastName"
          value={inputData.lastName}
          onChange={handleChange}
        />
        <br />
        <button>Add contact</button>
      </form>
      {/*{contacts}*/}
    </>
  );
}

export default Hooks3;
