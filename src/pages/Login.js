import React from "react";

const Login = () => {
  return (
    <div className="containersm">
      <div className="form_wrapper topmg100">
        <label className="boldtext">Email</label>
        <input type="text"></input>
        <div className="id_error">Invaild Email</div>
        <label className="boldtext">PW</label>
        <input type="password"></input>
        <div className="password_error">Password is different</div>
      </div>
      <div className="btn lg-btn boldtext">Login</div>
      <p className="primary-color">if you are not a member</p>
      <div className="btn lg-btn boldtext">Join</div>
    </div>
  );
};

export default Login;
