import React, { useState } from "react";
const data = [
  { name: "Mangoes" },
  { name: "Oranges" },
  { name: "Apples" },
  { name: "Kiwi" },
  { name: "Watermelon" },
];
const Appp = () => {
  const [users, setUsers] = useState([...data]);
  const handleChange = (e) => {
    const { name, checked } = e.target;
    let tempUsers;
    if (name === "allSelect") {
      tempUsers = users.map((user, i) => {
        return { ...user, isCkecked: checked };
      });
      setUsers([...tempUsers]);
    } else {
      tempUsers = users.map((user, i) => {
        return user.name === name ? { ...user, isCkecked: checked } : user;
      });
      setUsers([...tempUsers]);
    }
  };
  return (
    <div style={{fontSize:"1.2rem"}}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="checkbox"
          name="allSelect"
          checked={!users.some((user) => user.isCkecked !== true)}
          onChange={handleChange}
        />
        <label htmlFor="allSelect">All Select</label>

        {users.map((user, i) => {
          return (
            <>
              <br />
              <input
                type="checkbox"
                name={user.name}
                checked={user.isCkecked || false}
                onChange={handleChange}
              />
              <label htmlFor={user.name}>{user.name}</label>
            </>
          );
        })}
      </form>
    </div>
  );
};

export default Appp;
