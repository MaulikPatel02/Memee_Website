import React from "react";
import "../Css/Notification.css";
import Bell from "../images/Header_images/bell.png";
import Oval from "../images/Header_images/Oval.png";
import notification from "../images/All_header/notification.png";
import Bold from "../images/notification_page/Bold.png";
import emoji from "../images/notification_page/emoji.png";
import Italic from "../images/notification_page/Italic.png";
import avtar from '../images/notification_page/Notification_Avtar.png';
import Alert from '../images/notification_page/Notification_alert.png'

export default function Notification() {
  return (
    <>
      <div className="Notification">
        <div className="SettingsPageHeader">
          <div className="UH-123">
            <h1>All Notifications</h1>
            <img src={notification}></img>
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

        <div className="notification_Details">
          <div className="Notification_1">
            <h2>Push Notifications</h2>
            <input type="text" placeholder="Title"></input>
            <br />
            <input type="text" placeholder="Any Link Optional"></input>

            <div className="notification_keyBoard">
              <div className="notification_icon">
                <img src={emoji}></img>
                <img src={Bold}></img>
                <img src={Italic}></img>
              </div>
              <hr id="NotificationHr" />
              <br />

              <textarea
                placeholder="We’re glad you like it. Here are some more shot We would like to share with you"
                rows="10"
              ></textarea>
            </div>
            <br />
            <div className="Send_NOtification">
              <button>Send Push notification</button>
            </div>
          </div>

          <div className="Notification_2">
                <h3>Recent Notification</h3>
                <br />
                <div className="notification_User">
                        <div className="Notification_userImg">
                                <img id="avtarnotification" src={avtar}></img>
                                <span><img src={Alert}></img> </span>
                        </div>
                        <div className="Notification_userDetails">
                                <div className="N_U">
                                    <h5>Sarah Saunders</h5>
                                    <p>8hr</p>
                                </div>
                                <p id="User_notification_message">Just joined the memee app.</p>
                        </div>
                </div>

                <div className="notification_User">
                        <div className="Notification_userImg">
                                <img id="avtarnotification" src={avtar}></img>
                                <span><img src={Alert}></img> </span>
                        </div>
                        <div className="Notification_userDetails">
                                <div className="N_U">
                                    <h5>Sarah Saunders</h5>
                                    <p>8hr</p>
                                </div>
                                <p id="User_notification_message">Just joined the memee app.</p>
                        </div>
                </div>


                <div className="notification_User">
                        <div className="Notification_userImg">
                                <img id="avtarnotification" src={avtar}></img>
                                <span><img src={Alert}></img> </span>
                        </div>
                        <div className="Notification_userDetails">
                                <div className="N_U">
                                    <h5>Sarah Saunders</h5>
                                    <p>8hr</p>
                                </div>
                                <p id="User_notification_message">Just joined the memee app.</p>
                        </div>
                </div>


                <div className="notification_User">
                        <div className="Notification_userImg">
                                <img id="avtarnotification" src={avtar}></img>
                                <span><img src={Alert}></img> </span>
                        </div>
                        <div className="Notification_userDetails">
                                <div className="N_U">
                                    <h5>Sarah Saunders</h5>
                                    <p>8hr</p>
                                </div>
                                <p id="User_notification_message">Just joined the memee app.</p>
                        </div>
                </div>


                <div className="notification_User">
                        <div className="Notification_userImg">
                                <img id="avtarnotification" src={avtar}></img>
                                <span><img src={Alert}></img> </span>
                        </div>
                        <div className="Notification_userDetails">
                                <div className="N_U">
                                    <h5>Sarah Saunders</h5>
                                    <p>8hr</p>
                                </div>
                                <p id="User_notification_message">Just joined the memee app.</p>
                        </div>
                </div>


                <div className="notification_User">
                        <div className="Notification_userImg">
                                <img id="avtarnotification" src={avtar}></img>
                                <span><img src={Alert}></img> </span>
                        </div>
                        <div className="Notification_userDetails">
                                <div className="N_U">
                                    <h5>Sarah Saunders</h5>
                                    <p>8hr</p>
                                </div>
                                <p id="User_notification_message">Just joined the memee app.</p>
                        </div>
                </div>

                <div className="notification_User">
                        <div className="Notification_userImg">
                                <img id="avtarnotification" src={avtar}></img>
                                <span><img src={Alert}></img> </span>
                        </div>
                        <div className="Notification_userDetails">
                                <div className="N_U">
                                    <h5>Sarah Saunders</h5>
                                    <p>8hr</p>
                                </div>
                                <p id="User_notification_message">Just joined the memee app.</p>
                        </div>
                </div>
          </div>

        </div>
      </div>
    </>
  );
}
