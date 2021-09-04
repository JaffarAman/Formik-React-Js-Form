import React from "react"
import './App.css';

// import { AiOutlineLike } from 'react-icons/fa';  
import { AiOutlineLike , BiCommentDots,BiShare ,BiSmile , GrGallery } from "react-icons/all";

function App({postImgUrl , imgUrl , name , caption}) {
  return (
      <div className="box">
        <div className="mainBox">

          <div className="topHead">
              <img src={imgUrl} className="myPro" alt="profilePic" />
              <div className="proName">
                  <small><strong>{name}</strong> </small> <p></p>
                  <small>9/2/2021</small>
              </div>
          </div>
            {/* ///caption section/// */}
          <div className="captionBox">

            <p>{caption }</p>
            {/* <p>HOW ARE YOU?</p> */}

            </div>

            {/* ///img//   */}
            <div className="imageDiv">
              <img src={postImgUrl} className="postPic" alt="" />
            </div>

              <div className="boost">
                <small>See insights</small>
                  <button>BOOST POST</button>
              </div>

            <div className="commentSection">

            <section className="commentBtn">
              <span><AiOutlineLike/>Like</span>
              <span><BiCommentDots/>Comments</span>
              <span><BiShare />Share</span>
            </section>
            <section className="commentInput">

              <input type="text" placeholder="Enter your Comments..." />
        <div className="inputIcon">
            <span>
            <BiSmile />

            </span>
            <span>
            <GrGallery />

            </span>
        </div>
                </section>

            </div>

        </div>  


      </div>
  );
}




export default App;
