import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './user.css'
import axios from 'axios';
import toast from 'react-hot-toast';
import { CiTrash } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";


const User = () => {
    const [users, setusers] = useState([]);

   useEffect(() => {
     
    const fetchData = async()=>{
        const response = await axios.get("http://localhost:4000/api/getall")
        setusers(response.data);
    }
    fetchData();
   }, []);

   const deleteUser = async(userId) =>{
      await axios.delete(`http://localhost:4000/api/delete/${userId}`)
      .then((response) =>{
        setusers((prevUser)=>prevUser.filter((user)=>user._id !==userId))
        toast.success(response.data.msg, {position:"top-right"})
      })
      .catch(error =>console.log(error));
    }

  return (
    <div className="userTable">
        <Link to={"/add" }className='addbtn'>Add User</Link>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user,index)=>{
                        return(
                            <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.fname} {user.lname}</td>
                            <td>{user.email}</td>
                            <td className='btn'>
                                <button className='xclass' onClick={()=>deleteUser(user._id)}><CiTrash />
                                </button>
                                <Link className='xclass xc2' to={`/edit/` + user._id}><FaRegEdit />
                                </Link>
                            </td>
                        </tr>

                        )
                    })
                }
              
            </tbody>
        </table>
    </div>
  )
}

export default User
