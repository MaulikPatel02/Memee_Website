import React, { useState } from "react";
import "../Css/Tournament.css";
import Search from "../images/Header_images/Search.png";
import Bell from "../images/Header_images/bell.png";
import Oval from "../images/Header_images/Oval.png";
import Timage from "../images/All_header/TournamentHead.png";
import left from "../images/left.png";
import right from "../images/right.png";
import T1IMG from "../images/T-1IMG.png";
import User_rewards_3 from "../images/User_rewards_3.png";
import User_rewards_2 from "../images/User_rewards_2.png";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import Modal from "react-modal";
import Reward_modal_Img from '../images/Reward_modal_Img.png';
import Reward_True from '../images/Reward_True.png';
import Reward_Close from '../images/Reward_Close.png';

export default function Tournament() {
  const [openDate, setOpenDate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  Modal.setAppElement("#root");

  const [show, setShow] = useState(false);

  const showRewar = () => {
    setShow(!show);
  };
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const [showDate, SetShowDate] = useState(false);
  const ShowDatePiker = () => {
    SetShowDate(!showDate);
  };

  const tableData = [
    {
      id: 1,
      No: "1",
      Name: "Mr Astronut",
      Email: "iammemer@memee.com",
      UpVote: "2485",
      DownVote: "12",
      DateJoined: "Jan 5, 2022",
      Participated: "23",
      UserImage: T1IMG,
      Status: "Ongoing",
    },
    {
      id: 2,
      No: "2",
      Name: "Mr Astronut",
      Email: "iammemer@memee.com",
      UpVote: "2485",
      DownVote: "12",
      DateJoined: "Jan 5, 2022",
      Participated: "23",
      UserImage: User_rewards_3,
      Status: "Ongoing",
    },

    {
      id: 3,
      No: "3",
      Name: "Mr Astronut",
      Email: "iammemer@memee.com",
      UpVote: "2485",
      DownVote: "12",
      DateJoined: "Jan 5, 2022",
      Participated: "23",
      UserImage: User_rewards_2,
      Status: "Ongoing",
    },
    {
      id: 4,
      No: "4",
      Name: "Mr Astronut",
      Email: "iammemer@memee.com",
      UpVote: "2485",
      DownVote: "12",
      DateJoined: "Jan 5, 2022",
      Participated: "23",
      UserImage: T1IMG,
      Status: "Ongoing",
    },
    {
      id: 5,
      No: "5",
      Name: "Mr Astronut",
      Email: "iammemer@memee.com",
      UpVote: "2485",
      DownVote: "12",
      DateJoined: "Jan 5, 2022",
      Participated: "23",
      UserImage: User_rewards_3,
      Status: "Ongoing",
    },
    {
      id: 6,
      No: "6",
      Name: "Mr Astronut",
      Email: "iammemer@memee.com",
      UpVote: "2485",
      DownVote: "12",
      DateJoined: "Jan 5, 2022",
      Participated: "23",
      UserImage: User_rewards_2,
      Status: "Ongoing",
    },
    {
      id: 7,
      No: "7",
      Name: "Mr Astronut",
      Email: "iammemer@memee.com",
      UpVote: "2485",
      DownVote: "12",
      DateJoined: "Jan 5, 2022",
      Participated: "23",
      UserImage: User_rewards_3,
      Status: "Ongoing",
    },
    {
      id: 8,
      No: "8",
      Name: "Mr Astronut",
      Email: "iammemer@memee.com",
      UpVote: "2485",
      DownVote: "12",
      DateJoined: "Jan 5, 2022",
      Participated: "23",
      UserImage: User_rewards_2,
      Status: "Ongoing",
    },
    {
      id: 9,
      No: "9",
      Name: "Mr Astronut",
      Email: "iammemer@memee.com",
      UpVote: "2485",
      DownVote: "12",
      DateJoined: "Jan 5, 2022",
      Participated: "23",
      UserImage: User_rewards_3,
      Status: "Ongoing",
    },
    {
      id: 10,
      No: "10",
      Name: "Mr Astronut",
      Email: "iammemer@memee.com",
      UpVote: "2485",
      DownVote: "12",
      DateJoined: "Jan 5, 2022",
      Participated: "23",
      UserImage: User_rewards_2,
      Status: "Ongoing",
    },
    {
      id: 11,
      No: "11",
      Name: "Mr Astronut",
      Email: "iammemer@memee.com",
      UpVote: "2485",
      DownVote: "12",
      DateJoined: "Jan 5, 2022",
      Participated: "23",
      UserImage: User_rewards_2,
      Status: "Ongoing",
    },
    {
      id: 12,
      No: "12",
      Name: "Mr Astronut",
      Email: "iammemer@memee.com",
      UpVote: "2485",
      DownVote: "12",
      DateJoined: "Jan 5, 2022",
      Participated: "23",
      UserImage: User_rewards_2,
      Status: "Ongoing",
    },
  ];

  return (
    <>
      <div className="TournamentPage">
        <div className="Header" id="GiftRewdHead">
          <div className="H-1" id="GiftRewdHead-1">
            <div className="UH-1234" id="UUHH">
              <h1>Tournament</h1>
              <img src={Timage}></img>
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

        <div className="TournamentPage-2">
          <div className="TP-1">
            <h5>Tournament</h5>
            {showDate ? (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
              />
            ) : null}
          </div>
          <div
            className={`${
              openDate ? "open_dropDown_months" : "dropDown_months"
            }`}
            onClick={() => setOpenDate(!openDate)}
          >
            <div onClick={() => SetShowDate(false)}>Months</div>
            <div onClick={ShowDatePiker}>January</div>
            <div onClick={ShowDatePiker}>February</div>
            <div onClick={ShowDatePiker}>March</div>
            <div onClick={ShowDatePiker}>April</div>
            <div onClick={ShowDatePiker}>May</div>
            <div onClick={ShowDatePiker}>June</div>
            <div onClick={ShowDatePiker}>July</div>
            <div onClick={ShowDatePiker}>August</div>
            <div onClick={ShowDatePiker}>September</div>
            <div onClick={ShowDatePiker}>October</div>
            <div onClick={ShowDatePiker}>November </div>
            <div onClick={ShowDatePiker}>December</div>
          </div>

          <div>
            <div className="UserListPage-2">
              <table>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th> Email</th>
                  <th>Up Vote</th>
                  <th>Down Vote</th>
                  <th>Date Joined</th>
                  <th> Participated</th>
                  <th> Image</th>
                  <th>Status</th>
                  <th></th>
                </tr>

                {tableData.map((data, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <h6 className={`${i >= 10 ? "topTen" : "num"}`}>
                          {data.No}
                        </h6>
                      </td>
                      <td id="NUm-2">{data.Name}</td>
                      <td id="NUm-2">{data.Email}</td>
                      <td id="NUm-2">{data.UpVote}</td>
                      <td id="NUm-2">{data.DownVote}</td>
                      <td id="NUm-2">{data.DateJoined}</td>
                      <td id="NUm-2">{data.Participated}</td>
                      <td>
                        <img id="NUm-3" src={data.UserImage}></img>
                      </td>
                      <td id="NUm-2">{data.Status}</td>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-three-dots-vertical"
                          viewBox="0 0 16 16"
                          onClick={showRewar}
                          id="DotsOfR ewards"
                        >
                          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>

                        {/* {show && (
                          <div className="ModalshowRewards">
                            <h5>Disable&nbsp;Account</h5>
                            <hr id="Reward_Modal_hr" />
                            <h5
                              onClick={() => {
                                setIsOpen(true);
                              }}
                            >
                              Reward
                            </h5>
                          </div>
                        )} */}
                      </td>
                    </tr>



                  );
                })}
              </table>
            </div>
          </div>
          <Modal
            isOpen={isOpen}
            shouldCloseOnOverlayClick={false}
            onRequestClose={() => setIsOpen(false)}
          >
            <div className="MOdalMain">
              <div className="Reawds_1_Modal">
                <div className="edit_user_text">Reward</div>

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
                  <div className="M_banner" id="Rewards_Scroll_Media">
                    <div className="M_1banner">


                      <div className="Reward_Modal_Details">
                        <div className="Reward_Modal_Details_1">
                            <table>
                              <tr>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Date&nbsp;Joined</td>
                              </tr>
                              <tr>
                                <td>Mr Astronut</td>
                                <td>iammemer@memee.com</td>
                                <td>Jan 1,&nbsp;2022</td>
                              </tr>
                            </table>
                        </div>
                      </div>


                      <div className="M_Banner_Input">
                        <h5>Date Start</h5>
                        <input type="text" placeholder="Choose date"></input>
                      </div>
                      <div className="M_Banner_Input">
                        <h5>Date End</h5>
                        <input type="text" placeholder="Choose date"></input>
                      </div>
                      <div className="save_Banner_Send">
                        <button>Send</button>
                      </div>
                    </div>
                    <div className="M_2banner3">
                        <div className="Reward_modal_Img">
                          <img  src={Reward_modal_Img}></img>
                        </div>
                        <div className="True_false">
                        <button><img src={Reward_True}></img><span id="span332">322</span></button>
                        <button><img src={Reward_Close}></img><span id="span12">12</span></button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
          <div className="UserListPage-3">
            <div className="U3-1">
              <h5>Showing 1 to 7 of 23 entries</h5>
            </div>
            <div className="U3-2">
              <ul>
                <li>
                  <img src={left}></img>{" "}
                </li>
                <li>Previous</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>Next</li>
                <li>
                  <img src={right}></img>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
