import React from "react";

import Thunail from "../asserts/images/icon.jpg";

const SignUp = () => {
  const [ IDState, SetIDState ] = React.useState( true );
  const [ PwdState, SetPwdState ] = React.useState( true );
  const [ AgainPwdState, SetAgainPwdState ] = React.useState( true );
  const [ NickState, SetNickState ] = React.useState( true );

  // 정규식
  const ID_regEx = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const PWD_regEx = /^[A-Za-z0-9]{8,14}$/;
  const Nick_regEx = /^[0-9a-zA-Z가-힣ㄱ-ㅎ]{2,6}$/;
  // 정규식 끝
  
  // ID Check
  const ID_Checked = ( user_email, ID_regEx ) => {
    if( ID_regEx.test( user_email ) ){
      SetIDState( true );
      return true;
    }else{
      SetIDState( false );
      return false;
    }
  };
  // Password Check
  const PWD_Checked = ( user_pwd, PWD_regEx ) => {
    if( PWD_regEx.test( user_pwd ) ){
      SetPwdState( true );
      return true;
    }else{
      SetPwdState( false );
      return false;
    }
  };

  // Password Check again
  const PWD_AgainChecked = ( user_pwd, again_pwd ) => {
    if (user_pwd.length < 8 || again_pwd.length < 8) {
      SetAgainPwdState( false );
      return false;
    }

    if( user_pwd !== again_pwd ){
      SetAgainPwdState( false );
      return false;
    }else{
      SetAgainPwdState( true );
      return true;
    }
  };

  // Nickname Check
  const Nickname_Checked = ( user_nickname, Nick_regEX ) => {
    if( Nick_regEX.test( user_nickname ) ){
      SetNickState( true );
      return true;
    }else{
      SetNickState( false );
      return false;
    }
  };

  const idCheckOnClickEvent = () => {

  };

  const nickCheckOnClikcEvent = () => {
    console.log("Nick");
  };

  return (
    <div className="containersm">
      <div className="form_wrapper">
        <label className="boldtext topmg50">Email</label>
        <div className="id_form">
            <input type="text" placeholder="email only"></input>
            <label className="id_button" onClick={idCheckOnClickEvent}>Check</label>
        </div>
        <div className="id_error" style={{ visibility: IDState ? "hidden" : "visible"}}>Invaild ID</div>

        <label className="boldtext icon_label">User Icon</label>
        <div className="filebox">
            <img className="upload_icon" src={Thunail} alt="" />
            <input type="text" className="upload-name" value="Add the file"/>
            <label htmlFor="file">Open</label>
            <input type="file" id="file" onChange={nickCheckOnClikcEvent}/>
        </div>
        <label className="boldtext">Name</label>
        <input type="text"></input>
        <div className="password_error" style={{ visibility: NickState ? "hidden":"visible"}}>Invaild Nickname</div>
        <label className="boldtext">PW</label>
        <input type="password" placeholder="8-20 characters"></input>
        <div className="password_error" style={{visibility: PwdState ? "hidden" : "visible"}}>Invaild Password</div>
        <label className="boldtext">PW confirm</label>
        <input type="password" placeholder="8-20 characters"></input>
        <div className="password_error" style={{ visibility: AgainPwdState ? "hidden" : "visible"}}>Password is different</div>
      </div>
      <div className="btn lg-btn boldtext">Register</div>
    </div>
  );
};

export default SignUp;
