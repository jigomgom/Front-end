import React from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

// Server 주소
const SERVER_ADDRESS = "http://13.124.223.73/api";

const Login = () => {
  const navigate = useNavigate();
  // 이메일 확인
  const [email, setEmail] = React.useState("");
  // 이메일 입력 체크
  const [emailState, setEmailState] = React.useState(true);
  // 비밀번호 확인
  const [password, setPassword] = React.useState("");
  // 비밀번호 입력 체크
  const [passwordState, setPasswordState] = React.useState(true);
  // 이메일 오류메세지 상태저장
  const [emailMessage, setEmailMessage] = React.useState(null);
  // 비밀번호 오류메세지 상태 저장
  const [passwordMessage, setPasswordMessage] = React.useState(null);
  // 이메일 유효성 검사
  const [isEmail, setIsEmail] = React.useState(false);
  // 비밀번호 유효성 검사
  const [isPassword, setIsPassword] = React.useState(false);

  // 이메일 검사
  const onChangeEmail = (event) => {
    const emailRegEx =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = event.target.value;
    setEmail(event.target.value);

    if (!emailRegEx.test(emailCurrent)) {
      setEmailMessage("The email format is wrong.");
      setIsEmail(false);
    } else {
      setEmailMessage("This is the correct format.");
      setIsEmail(true);
    }
  };

  // 패스워드 검사
  const onChangePassword = (event) => {
    // const passwordRegEx = /^(?=.*\\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/;
    const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
    // /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    const passwordCurrent = event.target.value;
    setPassword(passwordCurrent);
    if (!passwordRegEx.test(passwordCurrent)) {
      setPasswordMessage(
        "Please enter a minimum of 8 and a maximum of 20 characters including English and numeric characters."
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("This is the correct format.");
      setIsPassword(true);
      setPassword(event.target.value);
    }
  };

  // Login 시도
  const LoginCliclEvent = async () => {
    const LoginUser = {
      username: email,
      password: password,
    };
    await axios
      .post(`${SERVER_ADDRESS}/login`, LoginUser)
      .then((response) => {
        if (response.data.response) {
          setEmailState(true);
          setPasswordState(true);
          
          localStorage.setItem("access_token", response.headers.authorization);
          navigate("/");
        } else {
          if (response.data.message === "존재하지 않는 아이디입니다.") {
            console.log("No ID");
            setIsEmail(false);
            setEmailState(false);
            if( email === "" ){
              setEmailMessage("This email is empty.");  
            }else{
              setEmailMessage("This email does not exist.");
              if( password === "" ){
                setPasswordState(false);  
                setPasswordMessage("The Password is empty.");  
              }
            }
          } else if (
            response.data.message ===
            "아이디 또는 비밀번호가 잘못 입력 되었습니다."
          ) {
            console.log("No passowrd");
            setIsPassword(false);
            setPasswordState(false);

            if( password === "" ){
              setPasswordMessage("The Password is empty.");
            }else{
              setPasswordMessage("The password is different.");
            }
          }
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="containersm">
      <div className="form_wrapper topmg100">
        <label className="boldtext">Email</label>
        <input type="text" onChange={onChangeEmail}></input>
        <div className="message_Logindiv">
          {emailState ? (
            email.length > 0 && (
              <span
                className="print_message"
                style={{ color: isEmail ? "#5493f1" : "#ff2626" }}
              >
                {emailMessage}
              </span>
            )
          ) : (
            <span
              className="print_message"
              style={{ color: isEmail ? "#5493f1" : "#ff2626" }}
            >
              {emailMessage}
            </span>
          )}
        </div>
        <label className="boldtext">PW</label>
        <input type="password" onChange={onChangePassword}></input>
        <div className="message_Logindiv">
          {passwordState ? (
            password.length > 0 && (
              <span
                className="print_message"
                style={{ color: isPassword ? "#5493f1" : "#ff2626" }}
              >
                {passwordMessage}
              </span>
            )
          ) : (
            <span
              className="print_message"
              style={{ color: isPassword ? "#5493f1" : "#ff2626" }}
            >
              {passwordMessage}
            </span>
          )}
        </div>
      </div>
      <div className="btn lg-btn boldtext" onClick={LoginCliclEvent}>
        Login
      </div>
      <p className="primary-color">if you are not a member</p>
      <div className="btn lg-btn boldtext">Join</div>
    </div>
  );
};

export default Login;
