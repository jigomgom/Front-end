import React, { useEffect } from "react";
import { StarDisplay } from "../elements/StarRating";
import { useSelector, useDispatch } from "react-redux";
import {
  getFeedLists,
  deleteFeedLists,
  increaseFeedHeart,
  decreaseFeedHeart,
  getFeedListMore,
} from "../redux/modules/feedSlice";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import UserIcon from "../asserts/images/default_user_icons.png";
import SamplePhoto from "../asserts/images/food2.jpg";
// import SamplePhoto2 from "../asserts/images/soup.jpg";

import Carousels from "./Carousels";

const Feed = () => {
  const FeedLists = useSelector((state) => state.Feed.list);
  const loginState = useSelector((state) => state.Feed.isLogin);
  const totalListlen = useSelector((state) => state.Feed.isLength);
  const [ref, inView] = useInView();
  const listLength = FeedLists.length;
  console.log( FeedLists );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ FirstLoad, setFirstLoad ] = React.useState( true );

  useEffect(() => {
    // if (listLength === 1) {
    if( 1 ){
      console.log("First load");
      dispatch(getFeedLists());
      setFirstLoad( false );
    }

    if ( FeedLists && FeedLists.length > 0) {
      // console.log(FeedLists[0].img_url);
    }
  }, []);

  // useEffect(()=>{
  //   if( !FirstLoad ){
  //     dispatch(getFeedLists());
  //   }
  // },[])

  useEffect(() => {
    // if (listLength !== 1 && inView) {
    if( !FirstLoad && inView ){
      console.log("첫 로딩 이후 무한 스크롤");
      dispatch(getFeedListMore({ listLength, totalListlen }));
    }
  }, [inView]);

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
    if (loginState) {
      dispatch(increaseFeedHeart({ id, token: access_token }));
    } else {
      window.alert("Login is required.");
    }
  };

  // console.log(FeedLists);

  const onclickDecreaseHeart = (id) => {
    const access_token = localStorage.getItem("access_token");
    if (loginState) {
      dispatch(decreaseFeedHeart({ id, token: access_token }));
    } else {
      window.alert("Login is required.");
    }

    console.log(FeedLists);
  };

  return (
    <>
      <Carousels />
      <div className="container">
        {FeedLists.map((item, index) => {
          return (
            <div className="feed-wrap" key={index}>
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
                    src={
                      item.img_url !== "null"
                        ? item.img_url && item.img_url[0]
                        : SamplePhoto
                    }
                    alt=""
                  />
                  <div
                    className="overlay"
                    onClick={() => {
                      navigate(`/detail`, { state: { item } });
                    }}
                  >
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
                    {item.like ? (
                      <span
                        className="material-icons card_body_heart_filled"
                        onClick={() => {
                          if (loginState) {
                            onclickDecreaseHeart(item.id);
                          } else {
                            window.alert("Login is required.");
                          }
                        }}
                      >
                        favorite
                      </span>
                    ) : (
                      <span
                        className="material-icons card_body_heart"
                        onClick={() => {
                          if (loginState) {
                            onclickIncreaseHeart(item.id);
                          } else {
                            window.alert("Login is required.");
                          }
                        }}
                      >
                        favorite_border
                      </span>
                    )}
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
                    <div className="isLike">
                      좋아요 {item.likeCount ? item.likeCount : 0}개
                    </div>
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
      <div ref={ref} className="Target-Element" />
    </>
  );
};

export default Feed;
