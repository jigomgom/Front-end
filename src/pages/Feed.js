import React from "react";
import {StarDisplay} from "./../elements/starRating";

// JY : import Sample Icon
import UserIcon from "../asserts/images/default_user_icons.png";
import SamplePhoto from "../asserts/images/food2.jpg";
import SamplePhoto2 from "../asserts/images/soup.jpg";

const Feed = ( ) => {
  return (
    <div className="container">
      <div className="feed-wrap">
        <div className="card_head_wrapper">
          <div className="headflex">
            <img className="cardimg" src={UserIcon} alt="" />
            <div className="card_nickname">Nick name</div>
          </div>
          <div className="headflex">
            <div>
              <span className="material-icons card_edit">edit</span>
            </div>
            <div>
              <span className="material-icons card_delete">delete</span>
            </div>
          </div>
        </div>
        <div className="card_body">
          <img className="card_img_wrapper" src={SamplePhoto} alt="" />
          <div className="card_body_title">
            <div className="flexleft">
              <div className="card_body_place">좋은 소식</div>
              <div className="card_body_header_class">일식</div>
            </div>
            <div className="flexright">
              <span className="material-icons card_body_heart">
                  favorite_border
              </span>
            </div> 
          </div>
          
          <StarDisplay rate={80}/>
          
          <div className="card_body_wrap">
            <div className="card_body_content">
              수원시 영통구 플라자 3층 302호
            </div>
            <div className="card_body_content ">"연어, 성게 맛있습니다."
            </div>            
          </div>
        </div>
      </div>
      <div className="feed-wrap">
        <div className="card_head_wrapper">
          <div className="headflex">
            <img className="cardimg" src={UserIcon} alt="" />
            <div className="card_nickname">Nick name</div>
          </div>
          <div className="headflex">
            <div>
              <span className="material-icons card_edit">edit</span>
            </div>
            <div>
              <span className="material-icons card_delete">delete</span>
            </div>
          </div>
        </div>

        <div className="card_body">
          <img className="card_img_wrapper" src={SamplePhoto2} alt="" />
          <div className="card_body_header">
            <div className="card_body_header_stars">
              <span className="material-icons stars">star_outline</span>
              <span className="material-icons stars">star_outline</span>
              <span className="material-icons stars">star_outline</span>
              <span className="material-icons stars">star_outline</span>
              <span className="material-icons stars">star_outline</span>
            </div>
            <div>
              <span className="material-icons card_body_heart">
                favorite_border
              </span>
            </div>
          </div>
          <div className="card_body_wrap">
            <div className="card_body_title">
              <div className="card_body_place">좋은 소식</div>
              <div className="card_body_header_class">일식</div>
            </div>
            <div className="card_bottom_wrap">
              <div className="card_body_address">
                장소 : 수원시 영통구 플라자 3층 302호
              </div>
              <div className="card_body_content">연어, 성게 맛있습니다.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="feed-wrap">
        <div className="card_head_wrapper">
          <div className="headflex">
            <img className="cardimg" src={UserIcon} alt="" />
            <div className="card_nickname">Nick name</div>
          </div>
          <div className="headflex">
            <div>
              <span className="material-icons card_edit">edit</span>
            </div>
            <div>
              <span className="material-icons card_delete">delete</span>
            </div>
          </div>
        </div>

        <div className="card_body">
          <img className="card_img_wrapper" src={SamplePhoto} alt="" />
          <div className="card_body_header">
            <div className="card_body_header_stars">
              <span className="material-icons stars">star_outline</span>
              <span className="material-icons stars">star_outline</span>
              <span className="material-icons stars">star_outline</span>
              <span className="material-icons stars">star_outline</span>
              <span className="material-icons stars">star_outline</span>
            </div>
            <div>
              <span className="material-icons card_body_heart">
                favorite_border
              </span>
            </div>
          </div>
          <div className="card_body_wrap">
            <div className="card_body_title">
              <div className="card_body_place">좋은 소식</div>
              <div className="card_body_header_class">일식</div>
            </div>
            <div className="card_bottom_wrap">
              <div className="card_body_address">
                장소 : 수원시 영통구 플라자 3층 302호
              </div>
              <div className="card_body_content">연어, 성게 맛있습니다.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="feed-wrap">
        <div className="card_head_wrapper">
          <div className="headflex">
            <img className="cardimg" src={UserIcon} alt="" />
            <div className="card_nickname">Nick name</div>
          </div>
          <div className="headflex">
            <div>
              <span className="material-icons card_edit">edit</span>
            </div>
            <div>
              <span className="material-icons card_delete">delete</span>
            </div>
          </div>
        </div>

        <div className="card_body">
          <img className="card_img_wrapper" src={SamplePhoto} alt="" />
          <div className="card_body_header">
            <div className="card_body_header_stars">
              <span className="material-icons stars">star_outline</span>
              <span className="material-icons stars">star_outline</span>
              <span className="material-icons stars">star_outline</span>
              <span className="material-icons stars">star_outline</span>
              <span className="material-icons stars">star_outline</span>
            </div>
            <div>
              <span className="material-icons card_body_heart">
                favorite_border
              </span>
            </div>
          </div>
          <div className="card_body_wrap">
            <div className="card_body_title">
              <div className="card_body_place">좋은 소식</div>
              <div className="card_body_header_class">일식</div>
            </div>
            <div className="card_bottom_wrap">
              <div className="card_body_address">
                장소 : 수원시 영통구 플라자 3층 302호
              </div>
              <div className="card_body_content">연어, 성게 맛있습니다.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="feed-wrap">
        <div className="card_head_wrapper">
          <div className="headflex">
            <img className="cardimg" src={UserIcon} alt="" />
            <div className="card_nickname">Nick name</div>
          </div>
          <div className="headflex">
            <div>
              <span className="material-icons card_edit">edit</span>
            </div>
            <div>
              <span className="material-icons card_delete">delete</span>
            </div>
          </div>
        </div>

        <div className="card_body">
          <img className="card_img_wrapper" src={SamplePhoto} alt="" />
          <div className="card_body_header">
            <div className="card_body_header_stars">
              <span className="material-icons stars">star_outline</span>
              <span className="material-icons stars">star_outline</span>
              <span className="material-icons stars">star_outline</span>
              <span className="material-icons stars">star_outline</span>
              <span className="material-icons stars">star_outline</span>
            </div>
            <div>
              <span className="material-icons card_body_heart">
                favorite_border
              </span>
            </div>
          </div>
          <div className="card_body_wrap">
            <div className="card_body_title">
              <div className="card_body_place">좋은 소식</div>
              <div className="card_body_header_class">일식</div>
            </div>
            <div className="card_bottom_wrap">
              <div className="card_body_address">
                장소 : 수원시 영통구 플라자 3층 302호
              </div>
              <div className="card_body_content">연어, 성게 맛있습니다.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="feed-wrap">
        <div className="card_head_wrapper">
          <div className="headflex">
            <img className="cardimg" src={UserIcon} alt="" />
            <div className="card_nickname">Nick name</div>
          </div>
          <div className="headflex">
            <div>
              <span className="material-icons card_edit">edit</span>
            </div>
            <div>
              <span className="material-icons card_delete">delete</span>
            </div>
          </div>
        </div>

        <div className="card_body">
          <img className="card_img_wrapper" src={SamplePhoto} alt="" />
          <div className="card_body_header">
            <div className="card_body_header_stars">
              <span className="material-icons stars">star_outline</span>
              <span className="material-icons stars">star_outline</span>
              <span className="material-icons stars">star_outline</span>
              <span className="material-icons stars">star_outline</span>
              <span className="material-icons stars">star_outline</span>
            </div>
            <div>
              <span className="material-icons card_body_heart">
                favorite_border
              </span>
            </div>
          </div>
          <div className="card_body_wrap">
            <div className="card_body_title">
              <div className="card_body_place">좋은 소식</div>
              <div className="card_body_header_class">일식</div>
            </div>
            <div className="card_bottom_wrap">
              <div className="card_body_address">
                장소 : 수원시 영통구 플라자 3층 302호
              </div>
              <div className="card_body_content">연어, 성게 맛있습니다.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="feed-wrap">
        <div className="card_head_wrapper">
          <div className="headflex">
            <img className="cardimg" src={UserIcon} alt="" />
            <div className="card_nickname">Nick name</div>
          </div>
          <div className="headflex">
            <div>
              <span className="material-icons card_edit">edit</span>
            </div>
            <div>
              <span className="material-icons card_delete">delete</span>
            </div>
          </div>
        </div>

        <div className="card_body">
          <img className="card_img_wrapper" src={SamplePhoto} alt="" />
          <div className="card_body_header">
            <div className="card_body_header_stars">
              <span className="material-icons stars">star_outline</span>
              <span className="material-icons stars">star_outline</span>
              <span className="material-icons stars">star_outline</span>
              <span className="material-icons stars">star_outline</span>
              <span className="material-icons stars">star_outline</span>
            </div>
            <div>
              <span className="material-icons card_body_heart">
                favorite_border
              </span>
            </div>
          </div>
          <div className="card_body_wrap">
            <div className="card_body_title">
              <div className="card_body_place">좋은 소식</div>
              <div className="card_body_header_class">일식</div>
            </div>
            <div className="card_bottom_wrap">
              <div className="card_body_address">
                장소 : 수원시 영통구 플라자 3층 302호
              </div>
              <div className="card_body_content">연어, 성게 맛있습니다.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
