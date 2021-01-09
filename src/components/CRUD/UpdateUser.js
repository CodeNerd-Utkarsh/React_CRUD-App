import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function UpdateUser() {
  let history = useHistory();
  const { id } = useParams();
  // alert(id);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });
  const { name, email, phone, website } = user;

  const onInputChange = (e) => {
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUser();
  }, []);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    console.log("hiii", result.data.id);
    setUser(result.data);
  };
  return (
    <div className="add-users">
      <div className="container">
        <div className="mx-auto w-75 shadow p-8">
          <h2 className="text-center mb-4">Add User</h2>
          <form onSubmit={(e) => onFormSubmit(e)}>
            <div className="form-group">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Contact"
                name="phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="website"
                name="website"
                value={website}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button className="btn btn-warning btn-block">Update User</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default UpdateUser;
