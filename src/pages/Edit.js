import React, {useRef, useState} from 'react';
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import {Stars} from "./../elements/starRating";
import styled from 'styled-components';

const Edit = ()=> {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // add Post
    const _img = React.useRef(null);
    const _txt = React.useRef(null);
    const inputFile = useRef(null);
    
    //file uploader
    const onButtonClick = () => {
       inputFile.current.click();
      };
      
    // img upload
    const [file, setFile] = useState("");

    return (
        <div className="containersm">
            <div className="form_wrapper2">                
                <Button onClick={onButtonClick}><span class="material-icons color-primary topmg20">add_a_photo</span></Button>
                <input className='file' type="file" ref={inputFile} 
                // onChange={(e)=>{
                //   uploadFeedImgFB(e)
                //   }}
                ></input>
                <div className='previewtxt'>
                    <img src = {file} className='showimg'/>
                </div> 
                <Stars></Stars>
                
                <textarea ref={_txt}></textarea>
            </div>
            <div className='btn lg-btn'>Post!</div>        
        </div>

    )
}


export default Edit;

const Button = styled.div`
width: 80px;
height: 80px;
border-radius: 50%;
background-color: white;
cursor: pointer;
margin: 30px auto;
`