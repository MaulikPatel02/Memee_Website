import React from "react";
import "../Css/Winner_FeedBack_Page.css";
import Search from "../images/Header_images/Search.png";
import Bell from "../images/Header_images/bell.png";
import Oval from "../images/Header_images/Oval.png";
import F_user_1 from "../images/Feedback_page_img/F_user_1.png";
import F_user_2 from "../images/Feedback_page_img/F_user_2.png";
import F_user_3 from "../images/Feedback_page_img/F_user_3.png";
import F_user_4 from "../images/Feedback_page_img/F_user_4.png";
import Message_bg from "../images/Feedback_page_img/Message_bg.png";
import Chat_user_1 from "../images/Feedback_page_img/Chat_user_1.png";
import U_chat_img from "../images/Feedback_page_img/U_chat_img.png";
import web_chat_logo from "../images/Feedback_page_img/web_chat_logo.png";
import pin from '../images/Feedback_page_img/pin.png';
import gallary from '../images/Feedback_page_img/gallary.png';
import send from '../images/Feedback_page_img/send.png';
import { Link } from "react-router-dom";


export default function Winner_FeedBack_Page() {
  const tableData = [
    {
      id: 1,
      UserImg: F_user_1,
      UserName: "John Kristen",
      LastSeen: "5 mins ago",
      Messagebg: Message_bg,
      messages: "2",
      Message_text: "I want my reward via...",
    },
    {
      id: 2,
      UserImg: F_user_2,
      UserName: "Gretchen Botosh",
      LastSeen: "5 mins ago",
      Messagebg: Message_bg,
      messages: "2",
      Message_text: "I want my reward via...",
    },
    {
      id: 3,
      UserImg: F_user_3,
      UserName: "Martin Bothman",
      LastSeen: "5 mins ago",
      Messagebg: Message_bg,
      messages: "2",
      Message_text: "I want my reward via...",
    },
    {
      id: 4,
      UserImg: F_user_4,
      UserName: "Jaydon Torff",
      LastSeen: "5 mins ago",
      Messagebg: Message_bg,
      messages: "2",
      Message_text: "I want my reward via...",
    },
  ];
  return (
    <>
      <div className="Winner_FeedBack_Page">
        <div className="Header" id="GiftRewdHead">
          <div className="H-1" id="GiftRewdHead-1">
            <div className="UH-1234" id="UUHH">
              <h1>Winner’s Feedback</h1>
            </div>
          </div>

          <div className="H-2">
            <img src={Search}></img>
            <input type="search" placeholder="Search"></input>
          </div>

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

        <div className="Winner_FeedBack_Page_Details">
          <div className="Winner_profile_section">
            <h2>Messages</h2>
            <div className="Amazon_Giftcards">
              <div className="A_G_1">
                <h3>Amazon Giftcards</h3>
                <hr id="A_G_HR2" />
              </div>
              <div className="A_G_1">
              <Link to="/Coin_rewards_page">  <h3>Coin Rewards</h3></Link>
                <hr id="A_G_HR" />
              </div>
            </div>

            {tableData.map((data, i) => {
              return (
                <div className="F_user_1">
                  <div className="F_user_1_img">
                    <img src={data.UserImg}></img>
                  </div>
                  <div className="F_user_1_Details">
                    <div className="F_user_1_Details_1">
                      <div>
                        <h5>{data.UserName}</h5>
                      </div>
                      <div>
                        {" "}
                        <h6>{data.LastSeen}</h6>
                      </div>
                    </div>
                    <div className="F_user_1_Details_2">
                      <h5>{data.Message_text}</h5>
                      <span>
                        <img src={data.Messagebg}></img>
                        <h6>{data.messages}</h6>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="Winner_chat">
            <div className="Winner_chat_header">
              <div className="Chat_User_img">
                <img src={Chat_user_1}></img>
              </div>
              <div className="Chat_user_Details">
                <div className="User_d_1">
                  <h4>John Kristen</h4>
                  <h5>johnkristen@gmail.com</h5>
                  <h6>902r55u39573957</h6>
                </div>

                <div className="User_d_2">
                  <div class="dropdown">
                    <button
                      class=" dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Mark As
                    </button>
                    <ul class="dropdown-menu" id="dmenu">
                      <li id="dmenu-2">Action</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr id="A_G_HR3" />

            <div className="Support_chat">
              <div className="User_chat">
                <img src={U_chat_img}></img>
                <div className="User_chat_details">
                  <h5>I want my reward via Amazon gift card</h5>
                </div>
              </div>
              <div className="User_chat_2">
                <img src={web_chat_logo}></img>
                <div className="User_chat_details_2">
                  <h5>
                    Hi,John, <br /><br /> Here is your amazon gift card:<br /> Here is your Amazon
                    Gift Card: 22AW-L8CTA9-4P
                  </h5>
                </div>
              </div>
            </div>

                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
            <hr id="A_G_HR3" />

            <div className="Chat_KeyBoard">
                    <div className="chat_key_1">
                        <img src={pin}></img>
                        <img src={gallary}></img>
                        <input type="text" placeholder="Write your message here"></input>
                    </div>
                    <div className="chat_key_1">
                        <img src={send}></img>
                    </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
