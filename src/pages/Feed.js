import React, { useEffect } from "react";
import { StarDisplay } from "./../elements/starRating";

import { useSelector, useDispatch } from "react-redux";

import { getFeedLists, deleteFeedLists } from "../redux/modules/feedSlice";

// JY : import Sample Icon
import UserIcon from "../asserts/images/default_user_icons.png";
import SamplePhoto from "../asserts/images/food2.jpg";
// import SamplePhoto2 from "../asserts/images/soup.jpg";

const Feed = () => {
  const FeedLists = useSelector((state) => state.Feed.list);
  console.log( FeedLists );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeedLists());
  }, []);

  const deleteFeedClickEventListener = ( id ) => {
    dispatch( deleteFeedLists( id ) );
  };

  return (
    <div className="container">
      {FeedLists.map((item, index) => {
        // console.log( item.img_url );
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
                  <span className="material-icons card_edit">edit</span>
                </div>
                <div>
                  <span
                    className="material-icons card_delete"
                    onClick={() => {
                      deleteFeedClickEventListener(item.id );
                    }}
                  >
                    delete
                  </span>
                </div>
              </div>
            </div>
            <div className="card_body">
              <img
                className="card_img_wrapper"
                src={item.img_url !== "null" ? item.img_url : SamplePhoto}
                alt=""
              />
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
                  <span className="material-icons card_body_heart">
                    favorite_border
                  </span>
                </div>
              </div>

              <StarDisplay rate={item.stars * 20} />

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
