import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateStudent() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:8081/create", { firstname,lastname, email })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Update Student</h2>
          <div className="mb-2">
            <label htmlFor="">First Name </label>
            <input
              type="text"
              placeholder="Fisrt Name"
              className="form-control"
              onChange={e=> setFirstname(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Last Name </label>
            <input
              type="text"
              placeholder="Last Name"
              className="form-control"
              onChange={e=> setLastname(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Email" className="form-control"  onChange={e=> setEmail(e.target.value)}/>
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default CreateStudent;
