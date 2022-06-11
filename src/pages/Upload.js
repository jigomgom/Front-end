import React, {useRef, useState} from 'react';
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import Stars from "./../elements/starRating";

const Upload = ()=> {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // add Post
    const _img = React.useRef(null);
    const _txt = React.useRef(null);

    
    // Radio checkbox
    const [layout, setLayout] = React.useState('');
    
    const handleChange = (event) => {
        setLayout(event.target.value)
    }
    console.log(layout)

    const inputFile = useRef(null);
    
    const onButtonClick = () => {
        // `current` points to the mounted file input element
       inputFile.current.click();
      };


      
    // img upload
  
    const [file, setFile] = useState("");

    return (
        <div className="containersm">
            <div className="form_wrapper2">
                <label>Add image</label>
                <button onClick={onButtonClick}>Open file upload window</button>
                <input className='file' type="file" ref={inputFile} 
                // onChange={(e)=>{
                //   uploadFeedImgFB(e)
                //   }}
                ></input>
                <div className='previewtxt'>
                    <img src = {file} className='showimg'/>
                    <div className='imgtxt'>preview</div>
                </div> 
                <Stars></Stars>
                <label className="topmg20">Add text</label>
                <textarea ref={_txt}></textarea>
            </div>
            <div className='btn lg-btn'>Post!</div>        
        </div>

    )
}


export default Upload;
