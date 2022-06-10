import './App.css';
import styled from 'styled-components';
import React from 'react';

import {Routes, Route} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Navbar from './Navbar';
import Feed from './Feed';
import Login from './Login';
import Signup from './Signup';
import Upload from './Upload';
import Edit from './Edit';

import {useDispatch} from "react-redux";
import {loadFeedFB} from "./redux/modules/feedSlice"


function App() {

  const dispatch= useDispatch();

  React.useEffect(() => {
    dispatch(loadFeedFB())
  },[]);

  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar/>
      <div className="background">
        <Routes>
          <Route path="/" element={<Feed/>}></Route>
          <Route path="/upload" element={<Upload/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/join" element={<Signup/>}></Route>
          <Route path="/edit/:id" element={<Edit/>}></Route>
        </Routes>
        
      <Up className="addbtn" 
      onClick={()=>{
        navigate('/upload')
        }}>+</Up>  

      <Up onClick={()=>{
        window.scrollTo({top:0, left:0, behavior:"smooth"});
      }}>⇧</Up> 
        
      </div>
    </div>
  );
}

export default App;


const Up = styled.div`
  height: 50px;
  width: 50px;
  border-radius:50%;
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
  &:hover{
    background-color: var(--highlight-color);
  }
`;