import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import MyPIC from "./img/87818686_980997402297697_1315258795810619392_n.jpg"
import PostPic from "./img/pexels-photo-1149831.jpeg"
import MernPic from "./img/mern.jpg"
import BilalPic from "./img/bilal.jpg"
import SufiyanPic from "./img/sufiyan.jpg"
import FlutterPic from "./img/flutter.jpg"
ReactDOM.render(
  <React.StrictMode>
   
    <App  name="Jaffar Aman" imgUrl={MyPIC} caption="HELLO WORLD This is my new car" postImgUrl={PostPic} />
    <App  name="Inno Sufiyan" imgUrl={SufiyanPic} caption="HELLO WORLD This is me Inno Sufiyan and I am Fully Pro Level Mern Stack Developer " postImgUrl={MernPic} />
    <App  name="Bilal Rehman" imgUrl={BilalPic} caption="HELLO WORLD This is me Bilal rehman and I am Fully Pro Level Mern Flutter Developer " postImgUrl={FlutterPic} />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
