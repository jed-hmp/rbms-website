import React from "react";
import "./Tutorial.css";

export default function Tutorial() {
  return (
    <div id="tutorialPage">
      <div className="ytVid">
        <iframe
          src="https://www.youtube.com/embed/[VIDEO_ID]"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="steps">
        <p className="step-title">MOBILE APPLICATION TUTORIAL STEP BY STEP</p>
        <div className="step-body">
          <div className="step-tuts">
            <span className="stepNum">STEP 1: </span>
            <span className="stepDesc">
              DOWNLOAD THE APPLICATION IN HOMEPAGE.
            </span>
          </div>
          <div className="step-tuts">
            <span className="stepNum">STEP 2: </span>
            <span className="stepDesc">
              CREATE AN ACCOUNT AND FILL OUT THE NEEDED INFORMATION.
            </span>
          </div>
          <div className="step-tuts">
            <span className="stepNum">STEP 3: </span>
            <span className="stepDesc">
              AFTER CREATING AN ACCOUNT SIGN IN YOUR ACCOUNT
            </span>
          </div>
          <div className="step-tuts">
            <span className="stepNum">STEP 4: </span>
            <span className="stepDesc">
              CLICK THE RENT ICON
            </span>
          </div>
          <div className="step-tuts">
            <span className="stepNum">STEP 5: </span>
            <span className="stepDesc">
              CHOOSE YOUR BIKE AND RESERVE NOW! 
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
