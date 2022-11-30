import React, { useState } from "react";
import "../Css/Tournament_banner.css";
import Search from "../images/Header_images/Search.png";
import Bell from "../images/Header_images/bell.png";
import Oval from "../images/Header_images/Oval.png";
import April from "../images/Tournament_Banner_Img/April_Banner.png";
import May from "../images/Tournament_Banner_Img/May_Banner.png";
import June from "../images/Tournament_Banner_Img/june_Banner.png";
import July from "../images/Tournament_Banner_Img/May_Banner.png";
import Modal from "react-modal";
import Upload_Banner from '../images/Upload_Banner.png'

export default function Tournament_banner() {
  const [isOpen, setIsOpen] = useState(false);

  Modal.setAppElement("#root");
  const tableData = [
    {
      id: 1,
      Banner: April,
      Banner_Text: "APRIL 2022",
    },
    {
      id: 2,
      Banner: May,
      Banner_Text: "May 2022",
    },
    {
      id: 3,
      Banner: June,
      Banner_Text: "June 2022",
    },
    {
      id: 4,
      Banner: July,
      Banner_Text: "July 2022",
    },
  ];

  return (
    <>
      <div className="Tournament_banner">
        <div className="Header" id="GiftRewdHead">
          <div className="H-1" id="GiftRewdHead-1">
            <div className="UH-1234" id="UUHH">
              <h1>Tournament Banner</h1>
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

        <div className="Tournament">
          <div id="Tournament_Banner_BUtton_Div">
            <h3>Banner Lists</h3>
            <button
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Add Banner
            </button>
          </div>


          <Modal
            isOpen={isOpen}
            shouldCloseOnOverlayClick={false}
            onRequestClose={() => setIsOpen(false)}
          >
            <div className="MOdalMain">
              <div className="Modal_Banner">
                <div className="edit_user_text">Add Banner</div>

                <div className="M">
                  <div className="edit_right_cross">
                    <svg
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="currentColor"
                      class="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </div>
                  <div className="M_banner">
                    <div className="M_1banner">
                      <div className="M_Banner_Input">
                        <h5>Date Start</h5>
                        <input type="text" placeholder="Choose date"></input>
                      </div>
                      <div className="M_Banner_Input">
                        <h5>Date End</h5>
                        <input type="text" placeholder="Choose date"></input>
                      </div>
                      <div className="save_Banner">
                        <button>Save Banner</button>
                      </div>
                    </div>
                    <div className="M_2banner">
                        <h5>Add image</h5>
                        <img src={Upload_Banner}></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>


          
          <div className="Tournament_banner_sections">
            {tableData.map((data, i) => {
              return (
                <div className="Tournament_banner_First">
                  <img src={April}></img>
                  <h5>APRIL 2022</h5>
                </div>
              );
            })}
          </div>{" "}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br /> <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
