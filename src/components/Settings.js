import React from "react";
import "../Css/Settings.css";
import Oval from "../images/Header_images/Oval.png";
import Settingslogo from "../images/All_header/SettingsPage.png";
import Bell from "../images/Header_images/bell.png";
import Usetting from "../images/uSetting.png";

export default function Settings() {
  return (
    <>
      <div className="SettingsPage">
        <div className="SettingsPageHeader">
          <div className="UH-123">
            <h1>Settings</h1>
            <img src={Settingslogo}></img>
          </div>

          <div className="UserheaderNotification">
            <div className="H-3">
              <div className="bellNotification">
                <img src={Bell}></img>
              </div>
              <div className="NumOfNotification">
                <h6>2</h6>
              </div>
              <div id="BellNumber">
                <img src={Oval}></img>
              </div>
            </div>
          </div>
        </div>

        <div className="SettingsPageData">
          <div className="SSSSSSPage">
            <div className="Simg">
              <img src={Usetting}></img>
            </div>
            <div className="Simgbtn">
              <h5> Upload New</h5>
            </div>
          </div>
          <hr id="hr" />

          <div className="FormOfSettingsPage">
            <form>
              <div className="FF-1">
                <div className="FF-1-1">
                  <h5>Your Full Name</h5>
                  <input type="text" placeholder="John Smith" />
                </div>
                <div className="FF-1-1">
                  <h5>Location</h5>
                  <input type="text" placeholder="Sai Gon City, Vietnam" />
                </div>
              </div>

              <div className="FF-1">
                <div className="FF-1-1">
                  <h5>Role</h5>
                  <input type="text" placeholder="Admin" />
                </div>
                <div className="FF-1-1">
                  <h5>Old passowrd</h5>
                  <input type="password" placeholder="Enter Old passowrd" />
                </div>
              </div>

              <div className="FF-1">
                <div className="FF-1-1">
                  <h5>New Password</h5>
                  <input type="Password" placeholder="Enter New passowrd" />
                </div>
                <div className="FF-1-1">
                  <h5>Confirm New Password</h5>
                  <input type="password" placeholder="Confirm New  passowrd" />
                </div>
              </div>

                <div id="SettingFormbtn">
                <button>Update Profile</button>
                </div>
             
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
