import React from "react";

// import S3
import S3 from "react-aws-s3";
// import axios
import axios from "axios";

// import default icon
import Thunail from "../asserts/images/icon.jpg";
// Server 주소
const SERVER_ADDRESS = "http://13.124.223.73/api";
// installed using npm install buffer --save
window.Buffer = window.Buffer || require("buffer").Buffer;

const SignUp = () => {
  // 이메일 확인
  const [email, setEmail] = React.useState("");
  // Nickname 확인
  const [nickname, setNickname] = React.useState("");
  // 비밀번호 확인
  const [password, setPassword] = React.useState("");
  // 비밀번호 다시 확인
  const [passwordConfirm, setPasswordConfirm] = React.useState("");

  // 이메일 오류메세지 상태저장
  const [emailMessage, setEmailMessage] = React.useState(null);
  // Nickname 오류메세지 상태저장
  const [nicknameMessage, setNicknameMessage] = React.useState(null);
  // 비밀번호 오류메세지 상태 저장
  const [passwordMessage, setPasswordMessage] = React.useState(null);
  // 비밀번호 확인 오류메세지 상태 저장
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    React.useState(null);
  // 이메일 중복 검사 메세지 상태 저장
  const [OverlapEmailMessage, setOverlapEmailMessage] = React.useState("");
  // 닉네임 중복 검사 메세지 상태 저장
  const [OverlapNicknameMessage, setOverlapNicknameMessage] =
    React.useState("");

  // 이메일 유효성 검사
  const [isEmail, setIsEmail] = React.useState(false);
  // 이메일 중복 검사
  const [OverlapEmail, checkOverlapEmail] = React.useState(false);
  // 닉네임 중복 검사
  const [OverLapNickName, checkOverlapNickName] = React.useState(false);
  // Nickname 유효성 검사
  const [isNickname, setIsNickname] = React.useState(false);
  // 비밀번호 유효성 검사
  const [isPassword, setIsPassword] = React.useState(false);
  // 비밀번호 확인 검사
  const [isPasswordConfirm, setIsPasswordConfirm] = React.useState(false);

  // .env config
  const config = {
    bucketName: process.env.REACT_APP_BUCKET_NAME,
    region: process.env.REACT_APP_REGION,
    accessKeyId: process.env.REACT_APP_ACCESS,
    secretAccessKey: process.env.REACT_APP_SECRET,
    testKey: process.env.REACT_APP_TEST,
  };

  const Nick_regEx = /^[0-9a-zA-Z가-힣ㄱ-ㅎ]{2,6}$/;
  // 정규식 끝

  // Ref value start
  const ID_ref = React.useRef(null);
  const PWD_ref = React.useRef(null);
  const AGAIN_PWD_ref = React.useRef(null);
  const NICK_ref = React.useRef(null);
  const IMG_PATH_ref = React.useRef(null);
  // Ref value end

  // Email 검사
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

  // Nickname 검사
  const onChangeNickname = (event) => {
    const nickRegEx = /^[0-9a-zA-Z]{4,20}$/;
    const nicknameCurrent = event.target.value;
    setNickname( nicknameCurrent );
    if (!nickRegEx.test(nicknameCurrent)) {
      setNicknameMessage(
        "Please write at least 2 characters and less than 20 characters."
      );
      setIsNickname(false);
    } else {
      setNicknameMessage("This is the correct format.");
      setIsNickname(true);
      setNickname(event.target.value);
    }
  };

  // 패스워드 검사
  const onChangePassword = (event) => {
    const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;
    // /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    const passwordCurrent = event.target.value;
    setPassword( passwordCurrent );
    if (!passwordRegEx.test(passwordCurrent)) {
      setPasswordMessage("The password must be between 8 and 20 digits.");
      setIsPassword(false);
    } else {
      setPasswordMessage("This is the correct format.");
      setIsPassword(true);
      setPassword(event.target.value);
    }
  };

  // 패스워드 확인 검사
  const onChangePasswordConfirm = (event) => {
    const passwordConfirmCurrent = event.target.value;
    setPasswordConfirm( passwordConfirmCurrent );
    if (password === passwordConfirmCurrent) {
      setPasswordConfirmMessage("The password is the same.");
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage("The password is different.");
      setIsPasswordConfirm(false);
    }
  };

  // Email 중복 체크
  const onClickEmailConfirm = async () => {
    await axios
      .get(`${SERVER_ADDRESS}/checkId/${email}`)
      .then((response) => {
        if (response.data.response) {
          checkOverlapEmail(true);
          setOverlapEmailMessage("This is the email you can sign up for.");
        } else {
          checkOverlapEmail(false);
          setOverlapEmailMessage("This is the registered email.");
        }
      })
      .catch((err) => {
        console.log(err);
        checkOverlapEmail(false);
        setEmailMessage("Please input your email.");
      });
  };

  // Nick name 중복체크
  const onClickNickNameConfirm = async () => {
    if (nickname === null) {
      console.log(nickname);
      checkOverlapNickName(false);
      setNicknameMessage("Please input your Nickname.");
    } else {
      await axios
        .get(`${SERVER_ADDRESS}/checkNickname/${nickname}`)
        .then((response) => {
          if (response.data.response) {
            checkOverlapNickName(true);
            setOverlapNicknameMessage(
              "This is the Nickname you can sign up for."
            );
          } else {
            checkOverlapNickName(false);
            setOverlapNicknameMessage("This is the registered Nickname.");
          }
        })
        .catch((err) => {
          checkOverlapNickName(false);
          setNicknameMessage("Please input your email.");
        });
    }
  };

  return (
    <div className="containersm">
      <div className="form_wrapper">
        {/* Email start */}
        <label className="boldtext topmg50">Email</label>
        <div className="id_form">
          <input
            type="text"
            placeholder="email only"
            ref={ID_ref}
            onChange={onChangeEmail}
          ></input>
          <label className="id_button" onClick={onClickEmailConfirm}>
            Check
          </label>
        </div>
        <div className="message_div">
          {OverlapEmail ? (
            <span className="print_message" style={{ color: "#5493f1" }}>
              {OverlapEmailMessage}
            </span>
          ) : email.length > 0 ? ( <span className="print_message" style={{ color: isEmail ? "#5493f1" : "#ff2626" }}>
              {emailMessage}
            </span>
          ) : (<span className="print_message" style={{ color: "#ff2626" }}>{emailMessage}</span>)}
        </div>
        {/* Email end */}

        {/* User Icon start */}
        <label className="boldtext icon_label">User Icon</label>
        <div className="filebox">
          <img className="upload_icon" src={Thunail} alt="" />
          <input
            type="text"
            className="upload-name"
            placeholder="Add the file"
            ref={IMG_PATH_ref}
          />
          <label htmlFor="file">Open</label>
          <input type="file" id="file" onChange={() => {}} />
        </div>
        {/* User Icon end */}
        
        {/* Nickname start */}
          <label className="boldtext">Name</label>
          <div className="nick_form">
            <input
              type="text"
              placeholder="Input Nick name"
              ref={NICK_ref}
              onChange={onChangeNickname}
            ></input>
            <label className="id_button" onClick={onClickNickNameConfirm}>
              Check
            </label>
          </div>
          <div className="message_Nickdiv">
          {OverLapNickName ? (
            <span className="print_Nickmessage" style={{ color: "#5493f1" }}>
              {OverlapNicknameMessage}
            </span>
          ) : nickname.length > 0 ? (
            <span
              className="print_Nickmessage"
              style={{ color: isNickname ? "#5493f1" : "#ff2626" }}
            >
              {nicknameMessage}
            </span>
          ) : (
            <span className="print_Nickmessage" style={{ color: "#ff2626" }}>
              {nicknameMessage}
            </span>
          )}
        </div>
        {/* Nickname end */}

        {/* Password start */}
        <label className="boldtext">PW</label>
        <input
          type="password"
          placeholder="8-20 characters"
          ref={PWD_ref}
          onChange={onChangePassword}
        ></input>
        <div className="message_Passworddiv">
          { password.length > 0  && <sapn className="print_message" style={{ color: isPassword ? "#5493f1" : "#ff2626"}}>{passwordMessage}</sapn>}
        </div>

        {/* Password end */}

        <label className="boldtext">PW confirm</label>
        <input
          type="password"
          placeholder="8-20 characters"
          ref={AGAIN_PWD_ref}
          onChange={onChangePasswordConfirm}
        ></input>
        <div className="message_Passworddiv">
          { passwordConfirm.length > 0  && <sapn className="print_message" style={{ color: isPasswordConfirm ? "#5493f1" : "#ff2626"}}>{passwordConfirmMessage}</sapn>}
        </div>
      </div>
      <div className="btn lg-btn boldtext" onClick={() => {}}>
        Register
      </div>
    </div>
  );
};

export default SignUp;
