import React from "react";

const SignUp = () => {
    <div className="containersm">
    <div className="form_wrapper">
       
        <label className='boldtext topmg50'>Email</label>
        <input type="text"  placeholder="email only"></input>
        <label className='boldtext'>Name</label>
        <input type="text" ></input>
        <label className='boldtext'>PW</label>
        <input type="password" placeholder="8-16 characters"></input>
        <label className='boldtext'>PW confirm</label>
        <input type="password"  placeholder="8-16 characters"></input>
    </div>
       <div className='btn lg-btn boldtext'
          >Register</div>
  </div>
};

export default SignUp;