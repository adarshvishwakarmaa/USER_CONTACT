import React, { useState } from 'react'
import "./add.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import toast from 'react-hot-toast';  //navigate is userd to reditect to home page

const Add = () => {

    const users ={
        fname:"",
        lname:"",
        email:"",
        password:"",
    }

    const [user, setuser] = useState(users);
    const navigate = useNavigate();

    const addHandler = (e)=>{
        const {name,value} = e.target;
        setuser({...user, [name]:value});
    }
    
    const submitForm = async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:4000/api/create",user)
        .then((response)=>{
           toast.success(response.data.msg, {position:"top-right"})
           navigate("/")
        }).catch(error =>console.log(error));
    }
  return (
    <div className="add">
        <Link to={'/'}>Back</Link>
        <h3>Add new User</h3>

        <form className='addf' onSubmit={submitForm}>
            <div className="group">
                <label htmlFor="fname">First Name</label>
                {/* we will take name = "fname" were i take in models */}
                <input type="text"  onChange={addHandler} id='fname' name='fname' autoComplete='off' placeholder='Enter Your First Name'/>  
            </div>
               
            <div className="group">
                <label htmlFor="lname">Last Name</label>
                {/* we will take name = "lname" were i take in models */}
                <input type="text" onChange={addHandler} id='lname' name='lname' autoComplete='off' placeholder='Enter Your Last Name'/>  

            </div>
               
            <div className="group">
                <label htmlFor="email">Email</label>
                {/* we will take name = "email" were i take in models */}
                <input type="email" onChange={addHandler} id='email' name='email' autoComplete='off' placeholder='Enter Your Email '/>  
            </div>

            <div className="group">
                <label htmlFor="password">Password</label>
                {/* we will take name = "fname" were i take in models */}
                <input type="password" onChange={addHandler} id='password' name='password' autoComplete='off' placeholder='Enter Your Password '/>  
            </div>

            <div className="group">
                <button type="submit">Add User</button>
            </div>
          
        </form>
    </div>
  )
}

export default Add
