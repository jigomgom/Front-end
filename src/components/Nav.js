import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navbar = (props) => {
  const [logIn, setLogin] = useState("false");

  useEffect(() => {}, []);

  const logout = () => {};

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
        <Before className="linkwrap" logIn={logIn}>
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
            {" "}
            Join
          </h4>
        </Before>
        <After className="linkwrap" logIn={logIn}>
          <h4
            className="link"
            onClick={() => {
              logout();
            }}
          >
            {" "}
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
