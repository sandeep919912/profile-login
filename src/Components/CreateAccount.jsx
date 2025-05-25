import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateAccount = () => {
    const [user , setUser] = useState({name: "" , email:""})

    const handleClick = ()=>{
        localStorage.setItem("user" , JSON.stringify(user))
    }

   

  return (
    <div className="main">
      <div className="content-area2">
       <div className="upper">
         <div className="heading">
          <h1>
            Create Your <br />
            popX Account
          </h1>
        </div>
        <div className="inputField">
          <div class="input-group">
            <input type="text" id="name" onChange={(e)=> setUser({...user , name : e.target.value})} required />
            <label for="name">Full Name</label>
          </div>
          <div class="input-group">
            <input type="text" id="phone num" required />
            <label for="name">Phone number</label>
          </div>
          <div class="input-group">
            <input type="text" id="email" onChange={(e)=> setUser({...user , email : e.target.value})} required />
            <label for="name">Emain address</label>
          </div>
          <div class="input-group">
            <input type="text" id="password" required />
            <label for="name">Password</label>
          </div>
          <div class="input-group">
            <input type="text" id="compony" required />
            <label for="name">Company name</label>
          </div>
        </div>
        <div className="select">
          <div>
            <p>Are you an Agency?</p>
          </div>
          <div className="radio-element-area">
            <div className="radio-element">
              <input type="radio" name="male" />
              <label>Yes</label>
            </div>
            <div className="radio-element">
              <input type="radio" name="male" />
              <label>No</label>
            </div>
          </div>
        </div>
        <div className="btn">
            <Link className="linkbutton" to="/profile"><button onClick={handleClick}>Create Account</button></Link>
        </div>
       </div>
      </div>
    </div>
  );
};

export default CreateAccount;
