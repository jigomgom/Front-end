import React, {useRef, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {useNavigate, useLocation} from "react-router-dom";
import {Stars} from "./../elements/StarRating";
import styled from 'styled-components';
import S3 from 'react-aws-s3';
import {editFeed} from '../redux/modules/feedSlice';

window.Buffer = window.Buffer || require("buffer").Buffer;

const Edit = ()=> {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const item = location.state.item;
    console.log(item);

    // //get this post info from the list
    // let FeedLists = useSelector((state) => state.Feed.list);
    // const this_feed = FeedLists.find(list => list.id === id.id);
    // console.log(FeedLists);
    // console.log(this_feed);

    //get token
    const access_token = localStorage.getItem("access_token");
    
    // FeedData
    const _name = React.useRef(null);
    const _address = React.useRef(null);
    const _menu = React.useRef(null);
    const _comment = React.useRef(null);

    const [star, setStar] = useState(item.stars);
        const getData =(star) =>{
            setStar(star);
        };
        console.log(star);
    // Post action
    const editAction = () => {

        dispatch(editFeed({
            id: item.id,  
            storeName: _name.current.value,
            address: _address.current.value,
            menu: _menu.current.value,
            img_url: selectedFile,
            stars: star,
            comment: _comment.current.value, 
            token: access_token }));

        navigate('/');
        alert("Your feed has been edited!");
    };

    // img preview
    const [file, setFile] = useState(item.img_url);
    const [display,setDisplay] = useState(true);

    //choose new img
    const inputFile = useRef(null);
    const onButtonClick = () => {
        inputFile.current.click(); 
    };
    //file upload to storage & show preview
    const [selectedFile, setSelectedFile] = useState(item.img_url);

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
                <input type="text" ref={_name} defaultValue={item.storeName}></input>
                <label className="boldtext">대표메뉴</label>
                <input type="text"  ref={_menu} defaultValue={item.menu}></input>
                <label className="boldtext">주소</label>
                <input type="text" ref={_address} defaultValue={item.address}></input>
                <Stars star={star} getData={getData}></Stars>
                <label className="boldtext topmg20">한줄평</label>
                <textarea ref={_comment} defaultValue={item.comment}></textarea>
            </div>
            <div className='btn lg-btn' onClick={() => editAction(selectedFile)}>Edit</div>        
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
display: ${(props) => props.display ? 'block' : 'none'};
&:hover {
    background-color: var(--lighter-color);
}
`