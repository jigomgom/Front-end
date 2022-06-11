import React, {useRef, useState} from 'react';
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import {Stars} from "./../elements/starRating";
import styled from 'styled-components';
import S3 from 'react-aws-s3';

// installed using npm install buffer --save
window.Buffer = window.Buffer || require("buffer").Buffer;

const Upload = ()=> {

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

    //file upload to storage
    const [selectedFile, setSelectedFile] = useState(null);

    const config = {
        bucketName:process.env.REACT_APP_BUCKET_NAME,
        region:process.env.REACT_APP_REGION,
        accessKeyId:process.env.REACT_APP_ACCESS,
        secretAccessKey:process.env.REACT_APP_SECRET,
    }
    console.log(config);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
        console.log(e.target.files[0]);
    }

    const uploadFile = async (file) => {
        const ReactS3Client = new S3(config);
        // the name of the file uploaded is used to upload it to S3
        ReactS3Client
        .uploadFile(file, file.name)
        .then(data => console.log(data.location))
        .catch(err => console.error(err))
    }

    return (
        <div className="containersm">
            <div className="form_wrapper2">                
                <Button onClick={onButtonClick}><span class="material-icons color-primary topmg20">add_a_photo</span></Button>
                <input className='file' type="file" ref={inputFile} 
                onChange={(e)=>{
                  handleFileInput(e)
                  }}
                ></input>
                <div className='previewtxt'>
                    <img src = {file} className='showimg'/>
                </div> 
                <label className="boldtext">식당이름</label>
                <input type="text"></input>
                <label className="boldtext">대표메뉴</label>
                <input type="text"></input>
                <label className="boldtext">주소</label>
                <input type="text"></input>
                <Stars></Stars>
                <label className="boldtext topmg20">한줄평</label>
                <textarea ref={_txt}></textarea>
            </div>
            <div className='btn lg-btn' onClick={() => uploadFile(selectedFile)}>Post!</div>        
        </div>

    )
}


export default Upload;

const Button = styled.div`
width: 80px;
height: 80px;
border-radius: 50%;
background-color: white;
cursor: pointer;
margin: 30px auto;
&:hover {
    background-color: var(--lighter-color);
}
`