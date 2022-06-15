
import React, { useEffect } from "react";
import { StarDisplay } from "../elements/StarRating";
import { useSelector, useDispatch } from "react-redux";
import {
  getFeedLists,
  deleteFeedLists,
  increaseFeedHeart,
  decreaseFeedHeart,
  getLoginFeedLists,
  getFeedListMore,
} from "../redux/modules/feedSlice";
import { useNavigate } from "react-router-dom";

import UserIcon from "../asserts/images/default_user_icons.png";
import SamplePhoto from "../asserts/images/food2.jpg";
// import SamplePhoto2 from "../asserts/images/soup.jpg";

import Carousels from "./Carousels";
import Detail from "./Detail";

const Feed = () => {
  const FeedLists = useSelector((state) => state.Feed.list);
  const loginState = useSelector((state) => state.Feed.isLogin);
  
  const [isHeart, setIsHeart] = React.useState(false);

  const loginUserUID = localStorage.getItem("user_uid");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (FeedLists.length === 1 && loginUserUID === null) {
      console.log("First load");
      dispatch(getFeedLists());
    }

    if(FeedLists && FeedLists.length > 0) {
      console.log(FeedLists[0].img_url);

    }
  }, []);

  // Delete event handlers
  const deleteFeedClickEventListener = (id) => {
    if (loginState) {
      dispatch(deleteFeedLists(id));
    } else {
      window.alert("Login is required.");
    }
  };

  // onClick change heart
  const onclickIncreaseHeart = (id) => {
    const access_token = localStorage.getItem("access_token");
    if( loginState ){
      dispatch( increaseFeedHeart( { id, token: access_token } ) );
    }else{
      window.alert("Login is required.");
    }
  };

  // console.log(FeedLists);

  const onclickDecreaseHeart = ( id ) => {
    const access_token = localStorage.getItem("access_token");
    if( loginState ){
      dispatch(decreaseFeedHeart({ id, token: access_token }));
    }else{
      window.alert("Login is required.");
    }

  
  console.log(FeedLists);

  };

  return (
    <>
      <Carousels />
      <div className="container">
        {FeedLists.map((item, index) => {
          console.log( item.likeCount )
          return (
            <div className="feed-wrap" key={item.id}>
              <div className="card_head_wrapper">
                <div className="headflex">
                  <img
                    className="cardimg"
                    src={item.icon_url ? item.icon_url : UserIcon}
                    alt=""
                  />
                  <div className="card_nickname">{item.nickname}</div>
                </div>
                <div className="headflex">
                  <div>
                    <span
                      className="material-icons card_edit"
                      // onClick={() => {
                      //   navigate(`/edit`, { state: { item } });
                      // }}
                      onClick={() => {
                        loginState
                          ? navigate(`/edit`, { state: { item } })
                          : window.alert("Login is required.");
                      }}
                    >
                      edit
                    </span>
                  </div>
                  <div>
                    <span
                      className="material-icons card_delete"
                      onClick={() => {
                        deleteFeedClickEventListener(item.id);
                      }}
                    >
                      delete
                    </span>
                  </div>
                </div>
              </div>
              <div className="card_body">

                <div className="card-wrap2">
                    <img
                    className="card_img_wrapper"
                    src={item.img_url !== "null" ? item.img_url && item.img_url[0]: SamplePhoto}
                    alt=""
                  />
                  <div className="overlay"
                   onClick={()=>{
                    navigate(`/detail`, { state: {item} })
                  }}>
                    <div className="feedimgtxt">자세히보기</div>
                  </div>
                </div>

                <div className="card_body_title">
                  <div className="flexleft">
                    <div className="card_body_place">
                      {item.storeName ? item.storeName : ""}
                    </div>
                    <div className="card_body_header_class">
                      {item.menu ? item.menu : ""}
                    </div>
                  </div>
                  <div className="flexright">
                    { item.like ? (<span
                      className="material-icons card_body_heart_filled"
                      onClick={() => {
                        onclickDecreaseHeart(item.id);
                      }}
                    >favorite</span>): (<span
                      className="material-icons card_body_heart"
                      onClick={() => {
                        onclickIncreaseHeart(item.id);
                      }}
                    >
                      favorite_border
                    </span>)}
                    {/* <span
                      className="material-icons card_body_heart"
                      onClick={() => {
                        onclickIncreaseHeart(item.id);
                      }}
                    >
                      favorite_border
                    </span>
                    <span
                      className="material-icons card_body_heart_filled"
                      style={{ display: isHeart ? "inline-block" : "none" }}
                      onClick={() => {
                        onclickDecreaseHeart(item.id);
                      }}
                    >
                      favorite
                    </span> */}
                    <div className="isLike">좋아요 {item.likeCount ? item.likeCount : 0}개</div>
                  </div>
                </div>

                <StarDisplay rate={item.stars} />

                <div className="card_body_wrap">
                  <div className="card_body_content">
                    {item.address ? item.address : ""}
                  </div>
                  
                  <div className="card_body_content ">
                    "{item.comment ? item.comment : ""}"
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
    // <div className="container">
    //   <div className="feed-wrap">
    //     <div className="card_head_wrapper">
    //       <div className="headflex">
    //         <img className="cardimg" src={UserIcon} alt="" />
    //         <div className="card_nickname">Nick name</div>
    //       </div>
    //       <div className="headflex">
    //         <div>
    //           <span className="material-icons card_edit">edit</span>
    //         </div>
    //         <div>
    //           <span className="material-icons card_delete">delete</span>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="card_body">
    //       <img className="card_img_wrapper" src={SamplePhoto} alt="" />
    //       <div className="card_body_title">
    //         <div className="flexleft">
    //           <div className="card_body_place">좋은 소식</div>
    //           <div className="card_body_header_class">일식</div>
    //         </div>
    //         <div className="flexright">
    //           <span className="material-icons card_body_heart">
    //               favorite_border
    //           </span>
    //         </div>
    //       </div>

    //       <StarDisplay rate={80}/>

    //       <div className="card_body_wrap">
    //         <div className="card_body_content">
    //           수원시 영통구 플라자 3층 302호
    //         </div>
    //         <div className="card_body_content ">"연어, 성게 맛있습니다."
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //  구분선 위에 것 쓰기

    //   <div className="feed-wrap">
    //     <div className="card_head_wrapper">
    //       <div className="headflex">
    //         <img className="cardimg" src={UserIcon} alt="" />
    //         <div className="card_nickname">Nick name</div>
    //       </div>
    //       <div className="headflex">
    //         <div>
    //           <span className="material-icons card_edit">edit</span>
    //         </div>
    //         <div>
    //           <span className="material-icons card_delete">delete</span>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="card_body">
    //       <img className="card_img_wrapper" src={SamplePhoto2} alt="" />
    //       <div className="card_body_header">
    //         <div className="card_body_header_stars">
    //           <span className="material-icons stars">star_outline</span>
    //           <span className="material-icons stars">star_outline</span>
    //           <span className="material-icons stars">star_outline</span>
    //           <span className="material-icons stars">star_outline</span>
    //           <span className="material-icons stars">star_outline</span>
    //         </div>
    //         <div>
    //           <span className="material-icons card_body_heart">
    //             favorite_border
    //           </span>
    //         </div>
    //       </div>
    //       <div className="card_body_wrap">
    //         <div className="card_body_title">
    //           <div className="card_body_place">좋은 소식</div>
    //           <div className="card_body_header_class">일식</div>
    //         </div>
    //         <div className="card_bottom_wrap">
    //           <div className="card_body_address">
    //             장소 : 수원시 영통구 플라자 3층 302호
    //           </div>
    //           <div className="card_body_content">연어, 성게 맛있습니다.</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="feed-wrap">
    //     <div className="card_head_wrapper">
    //       <div className="headflex">
    //         <img className="cardimg" src={UserIcon} alt="" />
    //         <div className="card_nickname">Nick name</div>
    //       </div>
    //       <div className="headflex">
    //         <div>
    //           <span className="material-icons card_edit">edit</span>
    //         </div>
    //         <div>
    //           <span className="material-icons card_delete">delete</span>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="card_body">
    //       <img className="card_img_wrapper" src={SamplePhoto} alt="" />
    //       <div className="card_body_header">
    //         <div className="card_body_header_stars">
    //           <span className="material-icons stars">star_outline</span>
    //           <span className="material-icons stars">star_outline</span>
    //           <span className="material-icons stars">star_outline</span>
    //           <span className="material-icons stars">star_outline</span>
    //           <span className="material-icons stars">star_outline</span>
    //         </div>
    //         <div>
    //           <span className="material-icons card_body_heart">
    //             favorite_border
    //           </span>
    //         </div>
    //       </div>
    //       <div className="card_body_wrap">
    //         <div className="card_body_title">
    //           <div className="card_body_place">좋은 소식</div>
    //           <div className="card_body_header_class">일식</div>
    //         </div>
    //         <div className="card_bottom_wrap">
    //           <div className="card_body_address">
    //             장소 : 수원시 영통구 플라자 3층 302호
    //           </div>
    //           <div className="card_body_content">연어, 성게 맛있습니다.</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="feed-wrap">
    //     <div className="card_head_wrapper">
    //       <div className="headflex">
    //         <img className="cardimg" src={UserIcon} alt="" />
    //         <div className="card_nickname">Nick name</div>
    //       </div>
    //       <div className="headflex">
    //         <div>
    //           <span className="material-icons card_edit">edit</span>
    //         </div>
    //         <div>
    //           <span className="material-icons card_delete">delete</span>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="card_body">
    //       <img className="card_img_wrapper" src={SamplePhoto} alt="" />
    //       <div className="card_body_header">
    //         <div className="card_body_header_stars">
    //           <span className="material-icons stars">star_outline</span>
    //           <span className="material-icons stars">star_outline</span>
    //           <span className="material-icons stars">star_outline</span>
    //           <span className="material-icons stars">star_outline</span>
    //           <span className="material-icons stars">star_outline</span>
    //         </div>
    //         <div>
    //           <span className="material-icons card_body_heart">
    //             favorite_border
    //           </span>
    //         </div>
    //       </div>
    //       <div className="card_body_wrap">
    //         <div className="card_body_title">
    //           <div className="card_body_place">좋은 소식</div>
    //           <div className="card_body_header_class">일식</div>
    //         </div>
    //         <div className="card_bottom_wrap">
    //           <div className="card_body_address">
    //             장소 : 수원시 영통구 플라자 3층 302호
    //           </div>
    //           <div className="card_body_content">연어, 성게 맛있습니다.</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="feed-wrap">
    //     <div className="card_head_wrapper">
    //       <div className="headflex">
    //         <img className="cardimg" src={UserIcon} alt="" />
    //         <div className="card_nickname">Nick name</div>
    //       </div>
    //       <div className="headflex">
    //         <div>
    //           <span className="material-icons card_edit">edit</span>
    //         </div>
    //         <div>
    //           <span className="material-icons card_delete">delete</span>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="card_body">
    //       <img className="card_img_wrapper" src={SamplePhoto} alt="" />
    //       <div className="card_body_header">
    //         <div className="card_body_header_stars">
    //           <span className="material-icons stars">star_outline</span>
    //           <span className="material-icons stars">star_outline</span>
    //           <span className="material-icons stars">star_outline</span>
    //           <span className="material-icons stars">star_outline</span>
    //           <span className="material-icons stars">star_outline</span>
    //         </div>
    //         <div>
    //           <span className="material-icons card_body_heart">
    //             favorite_border
    //           </span>
    //         </div>
    //       </div>
    //       <div className="card_body_wrap">
    //         <div className="card_body_title">
    //           <div className="card_body_place">좋은 소식</div>
    //           <div className="card_body_header_class">일식</div>
    //         </div>
    //         <div className="card_bottom_wrap">
    //           <div className="card_body_address">
    //             장소 : 수원시 영통구 플라자 3층 302호
    //           </div>
    //           <div className="card_body_content">연어, 성게 맛있습니다.</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="feed-wrap">
    //     <div className="card_head_wrapper">
    //       <div className="headflex">
    //         <img className="cardimg" src={UserIcon} alt="" />
    //         <div className="card_nickname">Nick name</div>
    //       </div>
    //       <div className="headflex">
    //         <div>
    //           <span className="material-icons card_edit">edit</span>
    //         </div>
    //         <div>
    //           <span className="material-icons card_delete">delete</span>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="card_body">
    //       <img className="card_img_wrapper" src={SamplePhoto} alt="" />
    //       <div className="card_body_header">
    //         <div className="card_body_header_stars">
    //           <span className="material-icons stars">star_outline</span>
    //           <span className="material-icons stars">star_outline</span>
    //           <span className="material-icons stars">star_outline</span>
    //           <span className="material-icons stars">star_outline</span>
    //           <span className="material-icons stars">star_outline</span>
    //         </div>
    //         <div>
    //           <span className="material-icons card_body_heart">
    //             favorite_border
    //           </span>
    //         </div>
    //       </div>
    //       <div className="card_body_wrap">
    //         <div className="card_body_title">
    //           <div className="card_body_place">좋은 소식</div>
    //           <div className="card_body_header_class">일식</div>
    //         </div>
    //         <div className="card_bottom_wrap">
    //           <div className="card_body_address">
    //             장소 : 수원시 영통구 플라자 3층 302호
    //           </div>
    //           <div className="card_body_content">연어, 성게 맛있습니다.</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="feed-wrap">
    //     <div className="card_head_wrapper">
    //       <div className="headflex">
    //         <img className="cardimg" src={UserIcon} alt="" />
    //         <div className="card_nickname">Nick name</div>
    //       </div>
    //       <div className="headflex">
    //         <div>
    //           <span className="material-icons card_edit">edit</span>
    //         </div>
    //         <div>
    //           <span className="material-icons card_delete">delete</span>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="card_body">
    //       <img className="card_img_wrapper" src={SamplePhoto} alt="" />
    //       <div className="card_body_header">
    //         <div className="card_body_header_stars">
    //           <span className="material-icons stars">star_outline</span>
    //           <span className="material-icons stars">star_outline</span>
    //           <span className="material-icons stars">star_outline</span>
    //           <span className="material-icons stars">star_outline</span>
    //           <span className="material-icons stars">star_outline</span>
    //         </div>
    //         <div>
    //           <span className="material-icons card_body_heart">
    //             favorite_border
    //           </span>
    //         </div>
    //       </div>
    //       <div className="card_body_wrap">
    //         <div className="card_body_title">
    //           <div className="card_body_place">좋은 소식</div>
    //           <div className="card_body_header_class">일식</div>
    //         </div>
    //         <div className="card_bottom_wrap">
    //           <div className="card_body_address">
    //             장소 : 수원시 영통구 플라자 3층 302호
    //           </div>
    //           <div className="card_body_content">연어, 성게 맛있습니다.</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Feed;
