import React, {useRef, useState} from 'react';
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import {Stars} from "./../elements/starRating";
import styled from 'styled-components';
import S3 from 'react-aws-s3';
import { uploadFeed } from '../redux/modules/feedSlice';

window.Buffer = window.Buffer || require("buffer").Buffer;

const Upload = ()=> {

    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    //get token
    const access_token = localStorage.getItem("access_token");

    // FeedData
    const _name = React.useRef(null);
    const _address = React.useRef(null);
    const _menu = React.useRef(null);
    const _comment = React.useRef(null);

    const [star, setStar] = useState(0);
        const getData =(star) =>{
            setStar(star);
        };
        console.log(star);
    // Post action
    const newpost = () => {

        dispatch(uploadFeed({  
            storeName: _name.current.value,
            address: _address.current.value,
            menu: _menu.current.value,
            img_url: selectedFile,
            stars: star,
            comment: _comment.current.value, 
            token: access_token }));

        navigate('/');
        alert("Your feed has been uploaded!");
    }

    // img preview
    const [file, setFile] = useState("");
    const [display,setDisplay] = useState(true);

    //file uploader
    const inputFile = useRef(null);
    const onButtonClick = () => {
        inputFile.current.click(); 
    };
    //file upload to storage & show preview
    const [selectedFile, setSelectedFile] = useState(null);

    const config = {
        bucketName:process.env.REACT_APP_BUCKET_NAME,
        region:process.env.REACT_APP_REGION,
        accessKeyId:process.env.REACT_APP_ACCESS,
        secretAccessKey:process.env.REACT_APP_SECRET,
    }

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
        if (e.target.files[0].name.length > 0) {
            uploadFile(e.target.files[0]);
        };
    }

    const uploadFile = async (file) => {
        const ReactS3Client = new S3(config);
        // the name of the file uploaded is used to upload it to S3
        ReactS3Client
        .uploadFile(file, file.name)
        .then((data) => {
            console.log(data.location);
            setFile(data.location);
            setSelectedFile(data.location);
            setDisplay(false);
        })
        .catch(err => console.error(err))
    }

    
    // VIEW
    return (
        <div className="containersm">
            <div className="form_wrapper2">                
                <Button display = {display} onClick={onButtonClick}><span class="material-icons color-primary topmg20">add_a_photo</span></Button>
                <input className='file' type="file" ref={inputFile} 
                onChange={(e)=>{
                  handleFileInput(e)
                  }}
                ></input>
                
                <img src = {file} className='showimg'/>
                
                <label className="boldtext" >식당이름</label>
                <input type="text" ref={_name}></input>
                <label className="boldtext">대표메뉴</label>
                <input type="text"  ref={_menu}></input>
                <label className="boldtext">주소</label>
                <input type="text"  ref={_address}></input>
                <Stars star={star} getData={getData}></Stars>
                <label className="boldtext topmg20">한줄평</label>
                <textarea ref={_comment}></textarea>
            </div>
            <div className='btn lg-btn' onClick={() => newpost(selectedFile)}>Post!</div>        
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
display: ${(props) => props.display ? 'block' : 'none'};
&:hover {
    background-color: var(--lighter-color);
}
`