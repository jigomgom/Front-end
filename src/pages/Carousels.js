import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const Carousels =() => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="container3">
            <h2 className="heading1"> 🌴 제주 도민 맛집 BEST 3 🌴   </h2>
            <div className="carouselbox">            
                <div className="card-wrap">
                  <img src="https://blog.kakaocdn.net/dn/RNzQ0/btrxrcf95vc/BVMk7mdrPHxEwvcqU1gsB1/img.jpg" ></img>
                  <div className="overlay">
                    <div className="tag"> #리얼타코<br/> #제주시<br/> #웨이팅</div>
                  </div>
                  <div className="heading2">🌮 라스또르따스</div>
                </div>
                <div className="card-wrap">
                  <img src="https://cdn.univ20.com/wp-content/uploads/2015/07/fdd9da364a8374e89a89b9152c7974e5.jpg" ></img>
                  <div className="overlay">
                    <div className="tag"> #제주전복<br/> #전복돌솥밥<br/> #버터구이</div>
                  </div>
                  <div className="heading2">🍚 연미정</div>
                </div>
                <div className="card-wrap">
                  <img src="https://travelview.co.kr/wp-content/uploads/2021/09/image_3658002811630546227717.jpg" ></img>
                  <div className="overlay">
                    <div className="tag">  #오마카세<br/> #현지해산물<br/> #예약필수</div>
                  </div>
                  <div className="heading2">🐟 스시호시카이</div>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="container3">
            <h2 className="heading1"> 🌴 제주 흑돼지 맛집 BEST 3 🌴   </h2>
            <div className="carouselbox">            
                <div className="card-wrap">
                  <img src="https://img.siksinhot.com/place/1575611565561384.jpg" ></img>
                  <div className="overlay">
                    <div className="tag"> #숙성흑돼지<br/>#뼈등심뼈목살 <br/> #테이블링</div>
                  </div>
                  <div className="heading2">🍖 숙성도</div>
                </div>
                <div className="card-wrap">
                  <img src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fu4MXE%2FbtqFDxKKYIW%2FtSeSsmSKrWW706BO5k07HK%2Fimg.jpg" ></img>
                  <div className="overlay">
                    <div className="tag"> #근고기원조<br/> #돈사돈본점<br/> #구워주는곳</div>
                  </div>
                  <div className="heading2">🍖 돈사돈</div>
                </div>
                <div className="card-wrap">
                  <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjA1MjJfNzYg%2FMDAxNjUzMjA2NzkxMDA5.6IBuT28sRkoMdbeEf8GJPZ166o4LuflhSsJsF3PHT40g.GJ21iAWgTlNfTN9-rCaJctokXhomU2t9Kb9mhhUNUNwg.JPEG%2Fupload_c4ce99894eb6fe9727424389367e12d0.jpeg" ></img>
                  <div className="overlay">
                    <div className="tag">  #야외테이블<br/> #애견동반가능<br/> #와인과함께</div>
                  </div>
                  <div className="heading2">🍖 모메든식당</div>
                </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}


export default Carousels;