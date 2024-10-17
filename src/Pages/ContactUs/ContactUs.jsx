import React from "react";
import "./ContactUs.css";
import locIcon from "./locicon.png";
import phoneIcon from "./phone.png";
import emailIcon from "./Mail.png";
import mapIcon from './map.png';
export default function Tutorial() {
  return (
    <div id="contactusPage">
      <div className="row">
        <div className="CUTitle">
          <p>CONTACT US</p>
          <p>EXPLORE WITH EASE AND ENJOY YOUR RIDE</p>
        </div>
      </div>
      <div className="row cards">
        <div className="col-4">
          <div className="card" style={{ backgroundColor: "#A3C1AD" }}>
            <div className="card-body">
              <div className="icon">
                <img id="locIcon" src={locIcon} alt="" />
              </div>
              <div className="head">ACACIA STREET</div>
              <div className="body">
                OUR LOCATION IS AT SAN JOSE RODRIGUEZ, RIZAL
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ backgroundColor: "#8DA399" }}>
            <div className="card-body">
              <div className="icon">
                <img id="locIcon" src={phoneIcon} alt="" />
              </div>
              <div className="head">(+63) 09123456789</div>
              <div className="body">
                FOR MORE INFORMATION DIAL THIS NUMBER.
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ backgroundColor: "#5F9EA0" }}>
            <div className="card-body">
              <div className="icon">
                <img id="locIcon" src={emailIcon} alt="" />
              </div>
              <div className="head">rbms.labanos2024@gmail.com</div>
              <div className="body">
                YOU CAN EMAIL US!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row map">
        <img id="myMap" src={mapIcon} alt="map" />
      </div>
      <div className="footer">
        2023 RENTAL BIKE MANAGEMENT SYSTEM • ALL RIGHTS RESERVED
      </div>
    </div>
  );
}
