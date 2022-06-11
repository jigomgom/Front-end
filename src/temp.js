
import React, { useState } from "react";
import * as Api from "../../api";
import AWS from "aws-sdk";
import styled from 'styled-components';

function Profile({ ownerData, setOwnerData }) {
    const region = "ap-northeast-2";
    const bucket = "jeju-eats-img";

    AWS.config.update({
        region: region,
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    });

    const handleFileInput = async (e) => {
        const file = e.target.files[0];

        await Api.put(`user/test`, {
            image: test,
        });

        const upload = new AWS.S3.ManagedUpload({
            params: {
                Bucket: bucket, // 버킷 이름
                Key: test.png, // 유저 아이디
                Body: file, // 파일 객체
            },
        });

        const promise = upload.promise();
        promise.then(
            function () {
                // 이미지 업로드 성공
                window.setTimeout(function () {
                    location.reload();
                }, 2000);
            },
            function (err) {
                // 이미지 업로드 실패
            }
        );
    };

    return (
        <>
            <Input
                type="file"
                onChange={handleFileInput} />
        </>
    );
}

export default Profile;


const Input = styled.div`
    width: 100px;
`