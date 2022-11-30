import React, { useState } from "react";
import "../Css/GiftRewards.css";
import Search from "../images/Header_images/Search.png";
import Bell from "../images/Header_images/bell.png";
import Oval from "../images/Header_images/Oval.png";
import TransactionImg from "../images/All_header/Transaction.png";
import left from "../images/left.png";
import right from "../images/right.png";
import onStock from "../images/onStock.png";
import ordered from "../images/ordered.png";
import Modal from "react-modal";
import G_1 from "../images/G_1.png";

export default function GiftRewards() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);

  const tableData = [
    {
      id: 1,
      CardNumber: "22AW-L8CTA9-4P",
      Ranking: "1",
      Status: "On Stock",
      Stock: onStock,
      Remaining: "10",
      LastAwardedDate: "Pending",
    },
    {
      id: 2,
      CardNumber: "22AW-L8CTA9-4P",
      Ranking: "1",
      Status: "On Stock",
      Stock: ordered,
      Remaining: "10",
      LastAwardedDate: "Pending",
    },
    {
      id: 3,
      CardNumber: "22AW-L8CTA9-4P",
      Ranking: "1",
      Status: "On Stock",
      Stock: onStock,
      Remaining: "10",
      LastAwardedDate: "Pending",
    },
    {
      id: 4,
      CardNumber: "22AW-L8CTA9-4P",
      Ranking: "1",
      Status: "On Stock",
      Stock: ordered,
      Remaining: "10",
      LastAwardedDate: "Pending",
    },
    {
      id: 5,
      CardNumber: "22AW-L8CTA9-4P",
      Ranking: "1",
      Status: "On Stock",
      Stock: onStock,
      Remaining: "10",
      LastAwardedDate: "Pending",
    },
    {
      id: 6,
      CardNumber: "22AW-L8CTA9-4P",
      Ranking: "1",
      Status: "On Stock",
      Stock: onStock,
      Remaining: "10",
      LastAwardedDate: "Pending",
    },
    {
      id: 7,
      CardNumber: "22AW-L8CTA9-4P",
      Ranking: "1",
      Status: "On Stock",
      Stock: ordered,
      Remaining: "10",
      LastAwardedDate: "Pending",
    },
    {
      id: 8,
      CardNumber: "22AW-L8CTA9-4P",
      Ranking: "1",
      Status: "On Stock",
      Stock: onStock,
      Remaining: "10",
      LastAwardedDate: "Pending",
    },
    {
      id: 9,
      CardNumber: "22AW-L8CTA9-4P",
      Ranking: "1",
      Status: "On Stock",
      Stock: ordered,
      Remaining: "10",
      LastAwardedDate: "Pending",
    },
    {
      id: 10,
      CardNumber: "22AW-L8CTA9-4P",
      Ranking: "1",
      Status: "On Stock",
      Stock: ordered,
      Remaining: "10",
      LastAwardedDate: "Pending",
    },
  ];

  Modal.setAppElement("#root");
  return (
    <>
      <div className="GiftRewardsPage">
        <div className="Header" id="GiftRewdHead">
          <div className="H-1" id="GiftRewdHead-1">
            <div className="UH-1234" id="UUHH">
              <h1>Gift Rewards</h1>
              <img src={TransactionImg}></img>
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

        <div className="GiftRewardsPage-2">
          <div className="GiftRewardsPage_table-1">
            <h4>Gift Cards</h4>
            <button
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Add Gift Cards
            </button>
          </div>

          <Modal
            isOpen={isOpen}
            shouldCloseOnOverlayClick={false}
            onRequestClose={() => setIsOpen(false)}
          >
            <div className="MOdalMain">
              <div className="Modal3">
                <div className="edit_user_text">Add Gift Card</div>

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
                  <div className="M_12">
                    <div className="MMM2">
                      <h5>Rank</h5>
                      <select placeholder="Choose">
                        <option>Rank 1</option>
                        <option>Rank 2</option>
                        <option>Rank 3</option>
                      </select>
                    </div>
                    <div className="MMM2">
                      <h5>Amazon Gift Card Number</h5>
                      <input type="Email" placeholder="2344"></input>
                      <img id="AddCard" src={G_1}></img>
                    </div>
                    <div className="MMM2">
                      <h5>Value</h5>
                      <select placeholder="Choose">
                        <option>$ 100</option>
                        <option>$ 75</option>
                        <option>$ 50</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="save_changes">
                  <button
                    onClick={() => {
                      setIsOpenConfirm(true);
                    }}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </Modal>

          <Modal
            isOpen={isOpenConfirm}
            shouldCloseOnOverlayClick={false}
            onRequestClose={() => setIsOpenConfirm(false)}
          >
            <div className="MOdalMain2">
              <div className="Modal4">
                <div className="edit_user_text2">Confirmation</div>

                <div className="M">
                  <div className="M_15">
                    <p>
                      Are you sure you want to add
                      <br /> this gift card xxxxx as rank 1 <br /> to your List?
                    </p>
                  </div>
                </div>
                <div className="save_changes3">
                  <button
                    onClick={() => {
                      setIsOpenConfirm(false);
                    }}
                  >
                    Yes
                  </button>
                </div>
                <div className="save_changes8">
                  <button
                    onClick={() => {
                      setIsOpenConfirm(false);
                    }}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </Modal>

          <div className="GiftRewardsPage_table-2">
            <p>Ramaining Stocks</p>
            <div className="GiftRewardsPage_table-3">
              <ul>
                <li>
                  <h6>1st</h6>
                  <h4>10</h4>
                </li>
                <li>
                  <h6>2nd</h6>
                  <h4>10</h4>
                </li>
                <li>
                  <h6>3rd</h6>
                  <h4>10</h4>
                </li>
              </ul>
            </div>

            <div className="GiftRewardsPage_table">
              <div className="UserListPage-2">
                <table>
                  <tr>
                    <th>Card Number</th>
                    <th> Ranking</th>
                    <th>Status</th>
                    <th>Remaining</th>
                    <th>Last Awarded Date</th>
                  </tr>

                  {tableData.map((data, i) => {
                    return (
                      <tr key={i}>
                        <td id="TT-1">{data.CardNumber}</td>
                        <td id="TT-2">{data.Ranking}</td>
                        <td>
                          {/* <h4 id="paid">{data.Status}</h4> */}
                          <img src={data.Stock}></img>
                        </td>
                        <td id="TT-2">{data.Remaining}</td>
                        <td>
                          <span id="TT-2">{data.LastAwardedDate}</span>
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </div>

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
        </div>
      </div>
     
    </>
  );
}
