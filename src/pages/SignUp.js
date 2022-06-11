import React from "react";

import Thunail from "../asserts/images/icon.jpg";

const SignUp = () => {
  return (
    <div className="containersm">
      <div className="form_wrapper">
        <label className="boldtext topmg50">Email</label>
        <div className="id_form">
            <input type="text" placeholder="email only"></input>
            <label className="id_button">Check</label>
        </div>
        <div className="id_error">Invaild ID</div>

        <label className="boldtext icon_label">User Icon</label>
        <div className="filebox">
            <img className="upload_icon" src={Thunail} alt="" />
            <input type="text" className="upload-name" value="Add the file"/>
            <label for="file">Open</label>
            <input type="file" id="file"/>
        </div>
        <label className="boldtext">Name</label>
        <input type="text"></input>
        <label className="boldtext">PW</label>
        <input type="password" placeholder="8-20 characters"></input>
        <div className="password_error">Invaild Password</div>
        <label className="boldtext">PW confirm</label>
        <input type="password" placeholder="8-20 characters"></input>
        <div className="password_error">Password is different</div>
      </div>
      <div className="btn lg-btn boldtext">Register</div>
    </div>
  );
};

export default SignUp;
