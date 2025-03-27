import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import "../adduser/add.css"
import axios from 'axios'
import toast from 'react-hot-toast'

const Edit = () => {
   

    const users ={
        fname:"",
        lname:"",
        email:""
    }
    const {id} = useParams();
    const navigate =useNavigate();
    const [user, setuser] = useState(users);

    const inputChangeHandler =(e)=>{
        const {name,value} = e.target;
        setuser({...user, [name]:value});
        console.log(user);
    }

    useEffect(() => {
        axios.get(`http://localhost:4000/api/getone/${id}`)
        .then((response)=>{
            setuser(response.data);   
        }).catch(error =>console.log(error));
    }, [id]);

    const submitForm = async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:4000/api/update/${id}`,user)
        .then((response)=>{
           toast.success(response.data.msg, {position:"top-right"})
           navigate("/")
        }).catch(error =>console.log(error));
    }




  return (
    <div className="add">
        <Link to={'/'}>Back</Link>
        <h3>Update User</h3>

        <form className='addf' onSubmit={submitForm}>
            <div className="group">
                <label htmlFor="fname">First Name</label>
                {/* we will take name = "fname" were i take in models */}
                <input type="text" value={user.fname} onChange={inputChangeHandler}  id='fname' name='fname' autoComplete='off' placeholder='Enter Your First Name'/>  
            </div>
               
            <div className="group">
                <label htmlFor="lname">Last Name</label>
                {/* we will take name = "lname" were i take in models */}
                <input type="text" value={user.lname} onChange={inputChangeHandler}  id='lname' name='lname' autoComplete='off' placeholder='Enter Your Last Name'/>  

            </div>
               
            <div className="group">
                <label htmlFor="email">Email</label>
                {/* we will take name = "email" were i take in models */}
                <input type="email" value={user.email} onChange={inputChangeHandler} id='email' name='email' autoComplete='off' placeholder='Enter Your Email '/>  
            </div>

           

            <div className="group">
                <button type="submit">Update User</button>
            </div>
          
        </form>
    </div>
  )
}

export default Edit
