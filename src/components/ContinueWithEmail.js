import React from "react";
import "../Css/ContinueWithEmail.css";
import { RiCloseFill } from "react-icons/ri";
function ContinueWithEmail() {
  return (
    <div>
      <div className="email_alert_container">
        <div className="email_red_exit">
          <RiCloseFill className="border_right" />
        </div>
        <div className="email_text">Continue With Email</div>
        <div className="email_address_text">Enter Email Address</div>
        <div className="after_email_input">
          <input type="text" placeholder="Type here" size={30} />
        </div>
        <div className="continue_btn">
          <button className="continue_btn_value">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default ContinueWithEmail;
