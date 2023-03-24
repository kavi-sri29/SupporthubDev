import React from "react";
import bluediv from '../assets/images/bluediv_landingpage.png';
//import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import { Register } from "./Register";

export const Login = () => {
  


  return (
    <div className="instructionContainer">
      <div className="leftContent">
        <div className="givesupport">
          <h1>
            Get the support you need. From multiple organisations. In minutes.
          </h1>
        </div>
        <div className="supportpara">
          <p className="mb-9">
            Millions of us have support needs. <br />Like getting our statements in
            Braille.<br /> Being given more time to complete tasks.<br /> Or using a British
            Sign Language interpreter.
          </p>
          <p className="mb-9">
            Support Hub will help you tell multiple organisations about your
            support needs. Saving you time. Making everyday life easier. Free to
            use, forever.
          </p>
          <p>
            <span className="font-bold">Support Hub is in beta.</span> All features work but there could be areas
            you think could be improved. We'd like to hear your thoughts on how
            to improve and you will be able to provide feedback.
          </p>
        </div>
      </div>
      <div className="rightContent">
        <div className="rightImage" style={{backgroundImage : `url(${bluediv})`}}>
          <div className="imageContent">
            <p>
              Share your support needs with multiple organisations in 3 simple
              steps:
              <hr className="opacity-30 w-11/12 mt-2.5"/>
              <ol className="ml-11 mt-6 list-decimal">
                <li>Select your support needs</li>
                <li>Set up your account</li>
                <li>Share with organisations</li>
              </ol>
            </p>
          </div>
        </div>
        <div className="redirectionContainer">
          <button id="supportBtn">Learn how Support Hub works</button>
          <button
            id="loginBtn"
            
          >
            Let's get you started
          </button>
          <div>
            Already have a Support Hub account?
            <a href="#" className="underline">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};