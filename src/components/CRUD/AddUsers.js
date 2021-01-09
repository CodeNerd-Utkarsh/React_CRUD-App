import axios from "axios";
import React from "react";
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";
function AddUsers() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const onFormSubmit = async (data) => {
    // console.log(data)
    await axios.post("http://localhost:3003/users", data);
    history.push('/')
  }
  return <div className='add-users'>
    <div className="container">
      <div className="mx-auto w-75 shadow p-8">
        <h2 className="text-center mb-4">Add User</h2>
        <form onSubmit={handleSubmit(onFormSubmit)} >
          <div className="form-group">
            <input className="form-control form-control-lg" type="text"
              placeholder='name'
              name='name'
              ref={register}
            />
          </div>
          <div className="form-group">
            <input className="form-control form-control-lg" type="text"
              placeholder='Contact'
              name='phone'
              ref={register}
            />
          </div>
          <div className="form-group">
            <input className="form-control form-control-lg" type="text"
              placeholder='email'
              name='email'
              ref={register}
            />
          </div>
          <div className="form-group">
            <input className="form-control form-control-lg" type="text"
              placeholder='website'
              name='website'
              ref={register}
            />
          </div>
          <button className="btn btn-success btn-block">Add User</button>
        </form>

      </div>
    </div>
  </div>;
}

export default AddUsers;
