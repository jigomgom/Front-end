import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeLoginState, getFeedLists } from "../redux/modules/feedSlice";
import styled from "styled-components";

const Navbar = () => {
  let loginState = useSelector((state) => state.Feed.isLogin);
  
  if( loginState && loginState.length > 0 ){
    loginState = JSON.parse( loginState );
  }
  
  const dispatch = useDispatch();

  useEffect(() => {
    // Update, re-render, 새로고침이 되도 localStorage의 상태를 보고 로그인 상태를 유지하자.
    const currentLogin = localStorage.getItem("loginState");
    dispatch(changeLoginState({ loginState: currentLogin}) );
  }, []);

  const logout = () => {
    // console.log(localStorage.getItem("access_token"));
    localStorage.removeItem("access_token");
    localStorage.setItem("loginState", false);
    
    const currentLogin = localStorage.getItem("loginState");
    
    dispatch(changeLoginState( { loginState: currentLogin }));

    localStorage.removeItem("loginState");
    localStorage.removeItem("user_uid");
    localStorage.removeItem("usericon");
    localStorage.removeItem("user_nick");
    localStorage.clear();
    dispatch(getFeedLists());
  };

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <h2
          className="head"
          onClick={() => {
            navigate("/");
          }}
        >
          밥먹언?
        </h2>
        <Before className="linkwrap" logIn={loginState}>
          <h4
            className="link"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </h4>
          <h4
            className="link"
            onClick={() => {
              navigate("/join");
            }}
          >
            Join
          </h4>
        </Before>
        <After className="linkwrap" logIn={loginState}>
          <h4
            className="link"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </h4>
        </After>
      </div>
    </div>
  );
};

export default Navbar;

const Before = styled.div`
  display: ${(props) => (props.logIn === true ? "none" : "flex")} !important;
`;

const After = styled.div`
  display: ${(props) => (props.logIn === true ? "flex" : "none")} !important;
`;
