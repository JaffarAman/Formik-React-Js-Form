import React from "react"
import './App.css';
import MyPIC from "./img/87818686_980997402297697_1315258795810619392_n.jpg"
import PostPic from "./img/pexels-photo-1149831.jpeg"
// import { AiOutlineLike } from 'react-icons/fa';  
import { AiOutlineLike , BiCommentDots,BiShare ,BiSmile , GrGallery } from "react-icons/all";

function App() {
  return (
      <div className="box">
        <div className="mainBox">

          <div className="topHead">
              <img src={MyPIC} className="myPro" alt="" />
              <div className="proName">
                  <small><strong>Jaffar Aman</strong> </small> <p></p>
                  <small>9/2/2021</small>
              </div>
          </div>
            {/* ///caption section/// */}
          <div className="captionBox">

            <p>HELLO WORLD </p>
            <p>HOW ARE YOU?</p>

            </div>

            {/* ///img//   */}
            <div className="imageDiv">
              <img src={PostPic} className="postPic" alt="" />
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

              <input type="text" />
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
