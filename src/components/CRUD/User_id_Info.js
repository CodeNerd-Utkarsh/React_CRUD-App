import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function User_id_Info() {
    const [idData, setIdData] = useState({});
    let { id } = useParams();
    useEffect(() => {
        loadData_usingid();
    }, []);
    const loadData_usingid = async () => {
        const result = await axios
            .get(`http://localhost:3003/users/${id}`)
            .catch(err => console.error(err));
        console.log(result.data);
        setIdData(result.data)
    }
    return (
        <div className='shadow mx-auto w-75 '>
            <h1 className='text-center mt-5'>ID = {idData.id}</h1>
            <label htmlFor="name" >User Name</label>
            <h4 className='border ml-3 mr-3 pb-3 rounded'>{idData.name}</h4>
            <label htmlFor="name" >User e-mail</label>
            <h4 className='border ml-3 mr-3 pb-3 rounded'>{idData.email}</h4 >
            <label htmlFor="name" >User Contact</label>
            <h4 className='border ml-3 mr-3 pb-3 rounded'>{idData.phone}</h4 >
            <label htmlFor="name" >Website</label>
            <h4 className='border ml-3 mr-3 pb-3 rounded'>{idData.website}</h4>
        </div>
    )
}

export default User_id_Info;
