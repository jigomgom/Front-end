import React from "react";

const Feed = () => {

  return (
    null
  //   <div className="container">
  //   {all_posts.map((post, idx) => {
  //       return(
  //         <>
  //           {post.layout === "right" && (
  //               <Card>
  //                 <div className="card_head_wrapper">

  //                     <div className='inflex'>
  //                       <img className="cardimg" src={"https://i.kym-cdn.com/photos/images/facebook/001/673/605/8bc.jpg"}/>
  //                       <Cardid> nugget </Cardid>
  //                     </div>
                      
  //                     <div className='inflex'>
  //                       <Time>{post.time}</Time>
  //                       <div className='btn md-btn boldtext' onClick={()=>{
  //                         if (_email === post.email) {
  //                           navigate(`/edit/${post.id}`)
  //                         }else {
  //                           alert("You are not allowed to edit this post😨")
  //                         };
  //                       }}> edit
  //                       </div>
  //                       <div className='btn md-btn boldtext leftmg5' onClick={()=>{                                  
  //                         if (_email !== post.email) {
  //                           alert("You are not allowed to delete this post😨");
  //                           return;
  //                         };
  //                         const confirmBox = window.confirm('Are you sure you want to delete this post?')   
  //                         if (confirmBox === true && _email === post.email){
  //                           dispatch(deleteFeedFB(post));  
  //                         } else {
  //                           return;
  //                         };                                 
  //                         }}> delete
  //                         </div>
  //                     </div>
  //                 </div>

  //                 <Grid>
  //                   <div className='card_txt'> {post.txt} </div>
  //                   <img className='card_img_wrapper' src={post.img}/>
  //                 </Grid>

  //                 <div className="card_head_wrapper">
  //                   <p>좋아요 10개</p>
  //                   <span class="material-icons">favorite_border</span>
  //                   {/* <span class="material-icons">favorite</span> */}
  //                 </div>
  //               </Card>
  //           )}
        
  //         </>
  //         ) 
  //     })
  //   }
  // </div>
  )
}

export default Feed;