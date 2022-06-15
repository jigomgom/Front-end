import React, {useRef, useState, useEffect} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import styled from 'styled-components';
import UserIcon from "../asserts/images/default_user_icons.png";
import SamplePhoto from "../asserts/images/food2.jpg";
import { StarDisplay2 } from "./../elements/StarRating";

//carousel
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";


const { kakao } = window;

const Detail = (props) => {
  // const { open, close, item } = props;
  const location = useLocation();
  const item = location.state.item;
  const imgArr = item.img_url;
  console.log(imgArr);

  //MAP

  const container = useRef(null);
  useEffect(() => {

    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
    let geocoder = new kakao.maps.services.Geocoder();
    console.log(geocoder)
    geocoder.addressSearch(`제주특별자치도 제주시 첨단로 242`, function(result, status) {
      if (status === kakao.maps.services.Status.OK) {
        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        
        const marker = new kakao.maps.Marker({
        map: map,
        position: coords
        });
      }
      
    })

  }, []);

  

  
  
  
  
  return(
      <div className="detail-container">
        
        {/* carousel */}
        <Swiper
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {imgArr.map((img) => {
          return (
            <>
              <SwiperSlide>
                <div className="slide-img-wrap">
                  <img
                    src={img !== "null" ? img && img: SamplePhoto}
                    alt=""
                  />
                </div>
              </SwiperSlide>
            </>
          )
        })
      }        
      </Swiper>

      <div className="detail-box">
        <h2 className="detail-head">{item.storeName}<span className="menu">{item.menu}</span></h2>
        <StarDisplay2 rate={item.stars} />
        
        <div className="detail-content">
         <span class="material-icons">place</span>{item.address ? item.address : ""}
        </div>
        <div
          className="map" 
          id="map"
          ref={container}
        > 
        </div>

        <div className="detail-headflex">
          <img
            className="cardimg"
            src={item.icon_url ? item.icon_url : UserIcon}
            alt=""
          />
          <div className="card_nickname">{item.nickname}</div>
        </div>

        <div className="detail-content">
        "{item.comment ? item.comment : ""}"
        </div>
      </div>
        
      </div>


        

  )
}

export default Detail;