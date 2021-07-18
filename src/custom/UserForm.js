import React, { useState } from "react";
import useInput from "./useInput";

const UserForm = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
  };

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <div>
          <label htmlFor="">First Name</label>
          <input type="text" {...bindFirstName} />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input type="text" {...bindLastName} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
