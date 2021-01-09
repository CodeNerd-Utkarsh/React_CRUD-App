import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function ShowUsers() {
  const [userInfo, setUserInfo] = useState([])
  const loadUsers = async () => {
    const result = await axios
      .get("http://localhost:3003/users/")
      .catch(err => console.error(err));
    console.log(result.data)
    setUserInfo(result.data.reverse())
  }
  useEffect(() => {
    loadUsers();

  }, []);
  const delUser = async (id) => {
    await axios
      .delete(`http://localhost:3003/users/${id}`)
      .catch(err => console.error(err));
    loadUsers();
  }
  return (
    <div className='mt-5'>
      {/* <h3>show users</h3> */}
      <div className='overflow-auto'>

        <table className='table border shadow'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Phone Number</th>
              <th scope='col'>Email</th>
              <th scope='col'>Website</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody >{userInfo.map((user, index) => (
            <tr >
              <th scope='row'>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>
                <Link className='btn btn-success mr-2' to={`/users/show/${user.id}`} >VIEW</Link>
                <Link className='btn btn-warning mr-2' to={`/users/edit/${user.id}`}>UPDATE</Link>
                <Link className='btn btn-danger' onClick={() => delUser(user.id)}
                >DEL</Link>
              </td>
            </tr>
          ))
          }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowUsers;
