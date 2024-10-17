import React from "react";
import "./AboutUs.css";
import AUBike from "./AUBike.png";
import AUBiker from "./AUBiker.png";

export default function AboutUs() {
  return (
    <div id="aboutusPage">
      <div className="AUBike">
        <img src={AUBike} alt="AUbike" id="auBike"/>
      </div>
      <div className="AUBiker">
      <img src={AUBiker} alt="AUbiker" id="auBiker"/>
      </div>
      <div className="row">
        <div className="col-7">
          <div className="greet">
            <div className="greet-title">WELCOME TO RBMS!</div>
            <div className="greet-body">
              We created “RBMS” to provide a hassle-free and enjoyable
              experience for users. Whether booking online or walking in, our
              system is designed to make the rental process smooth and easy.
              We've prioritized both bike security and user safety by
              incorporating features like sound alarms and strong lock
              mechanisms. This way, users can confidently enjoy their rides,
              knowing that both they and the bike are well-protected. Our system
              aims to reduce the inconvenience of long walks while ensuring a
              safe, secure experience for everyone.
            </div>
          </div>
        </div>
        <div className="col-5"></div>
      </div>
      <div className="row mission-vision">
        <div className="col-6">
          <div className="vision">
            <div className="vision-title">VISION</div>
            <div className="vision-body">
              To be the ultimate provider of secure and advanced bike rental
              solutions, promoting convenient access to eco- friendly
              transportation for all.
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="mission">
            <div className="mission-title">MISSION</div>
            <div className="mission-body">
              We strive to deliver a seamless bike rental experience by
              leveraging cutting-edge technology, ensuring safety and
              convenience, and fostering sustainable urban modality
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
