import "./styles/App.css";
import styled from "styled-components";
import React from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
import Nav from "./components/Nav";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import TestUpload from "./components/TestUpload";
import Upload from "./pages/Upload";
import Edit from "./pages/Edit";
import Footer from "./components/Footer";

import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {}, []);

  const navigate = useNavigate();

  return (
    <div className="App">
      <Nav />
      <div className="background">
        <Routes>
          <Route path="/" element={<Feed />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/join" element={<Signup />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/testUpload" element={<TestUpload />}></Route>
        </Routes>

      </div>
      <Footer />
      <Up
        className="addbtn"
        onClick={() => {
          navigate("/upload");
        }}
      >
        +
      </Up>

      <Up
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        ⇧
      </Up>

    </div>
  );
}

export default App;

const Up = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: fixed;
  bottom: 20px;
  right: 20px;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: var(--line-color);
  font-size: 2rem;
  font-weight: 800;
  cursor: pointer;
  &:hover {
    background-color: var(--highlight-color);
  }
`;
