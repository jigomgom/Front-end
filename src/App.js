/*
test2@dev.com
test1234

dev@dev.com
test1234
*/

import "./styles/App.css";
import styled from "styled-components";
import "swiper/css/bundle";

import React from "react";

import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";

import axios from "axios";

import Nav from "./components/Nav";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import TestUpload from "./components/TestUpload";
import Upload from "./pages/Upload";
import Edit from "./pages/Edit";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";


function App() {
  React.useEffect(() => {}, []);
  const navigate = useNavigate();
  const loginState = useSelector( state => state.Feed.isLogin);

  // console.log( loginState );
  // const testUploadClick = async () => {
  //   const Token = localStorage.getItem("access_token");
  //   const UploadFeedData = {
  //     storeName: "코스트코",
  //     address: "delete test1",
  //     menu: "양식",
  //     stars: 3,
  //     img_url: "https://jejueats-img.s3-ap-northeast-2.amazonaws.com/food.jpg",
  //     comment: "JMT",
  //   };
  //   axios
  //     .post("http://13.124.223.73/api/store", UploadFeedData, {
  //       headers: {
  //         Authorization: Token,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((e) => console.log(e));
  // };

  return (
    <div className="App">
      <Nav />
      <div className="background">
        <Routes>
          <Route path="/" element={<Feed />}></Route>
            
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/join" element={<Signup />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/testUpload" element={<TestUpload />}></Route>
        </Routes>
        {/* <button onClick={testUploadClick}>Test Upload</button>
        <button onClick={testGetClick}>Test Get</button> */}
      </div>
      <Footer />
      <Up
        className="addbtn"
        onClick={() => {
          loginState ? ( navigate("/upload") ) : ( window.alert("Login is required.") )
        }}
      >
        <span class="material-icons">add</span>
      </Up>

      <Up
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <span class="material-icons">arrow_upward</span>
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
  bottom: 25px;
  right: 25px;
  align-items: center;
  justify-content: center;
  background: var(--line-color);
  cursor: pointer;
  &:hover {
    background-color: var(--highlight-color);
  }
  & > span {
    color: #fff;
    font-weight: 600;
    margin-top: 6px;
  }
  & > span:hover {
    color: #fff;
  }
`;
