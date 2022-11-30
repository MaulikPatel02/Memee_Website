import React from "react";
import "../Css/Transaction.css";
import Bell from "../images/Header_images/bell.png";
import Oval from "../images/Header_images/Oval.png";
import TransactionImg from "../images/All_header/Transaction.png";
import Search from "../images/Header_images/Search.png";
import left from "../images/left.png";
import right from "../images/right.png";

export default function Transaction() {
  const tableData = [
    {
      id: 1,
      Transaction: "$10",
      TransactionEmail: "Joshua@gmail.com",
      PayoutMethod: "Apple Pay",
      Status: "Paid",
      DateProcessed: "17 Aug 2020",
      Coins: "1000",
    },
    {
      id: 2,
      Transaction: "$10",
      TransactionEmail: "Joshua@gmail.com",
      PayoutMethod: "Apple Pay",
      Status: "Paid",
      DateProcessed: "17 Aug 2020",
      Coins: "1000",
    },
    {
      id: 3,
      Transaction: "$10",
      TransactionEmail: "Joshua@gmail.com",
      PayoutMethod: "Apple Pay",
      Status: "Paid",
      DateProcessed: "17 Aug 2020",
      Coins: "1000",
    },
    {
      id: 4,
      Transaction: "$10",
      TransactionEmail: "Joshua@gmail.com",
      PayoutMethod: "Apple Pay",
      Status: "Paid",
      DateProcessed: "17 Aug 2020",
      Coins: "1000",
    },
    {
      id: 5,
      Transaction: "$10",
      TransactionEmail: "Joshua@gmail.com",
      PayoutMethod: "Apple Pay",
      Status: "Paid",
      DateProcessed: "17 Aug 2020",
      Coins: "1000",
    },
    {
      id: 6,
      Transaction: "$10",
      TransactionEmail: "Joshua@gmail.com",
      PayoutMethod: "Apple Pay",
      Status: "Paid",
      DateProcessed: "17 Aug 2020",
      Coins: "1000",
    },
    {
      id: 7,
      Transaction: "$10",
      TransactionEmail: "Joshua@gmail.com",
      PayoutMethod: "Apple Pay",
      Status: "Paid",
      DateProcessed: "17 Aug 2020",
      Coins: "1000",
    },
    {
      id: 8,
      Transaction: "$10",
      TransactionEmail: "Joshua@gmail.com",
      PayoutMethod: "Apple Pay",
      Status: "Paid",
      DateProcessed: "17 Aug 2020",
      Coins: "1000",
    },

    {
      id: 9,
      Transaction: "$10",
      TransactionEmail: "Joshua@gmail.com",
      PayoutMethod: "Apple Pay",
      Status: "Paid",
      DateProcessed: "17 Aug 2020",
      Coins: "1000",
    },
    {
      id: 10,
      Transaction: "$10",
      TransactionEmail: "Joshua@gmail.com",
      PayoutMethod: "Apple Pay",
      Status: "Paid",
      DateProcessed: "17 Aug 2020",
      Coins: "1000",
    },
  ];

  return (
    <>
      <div className="TransactionPage">
        <div className="TransactionHeader">
          <div className="UH-1234">
            <h1>Transactions</h1>
            <img src={TransactionImg}></img>
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

        <div className="TransactionTable">
          <h4 id="Transact">Transactions</h4>

          <div className="UserListPage-1" id="Trans">
            <div className="UU1">
              <select id="Tra-1">
                <option>Last 30 Days</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>

            <div className="UU2">
              <select id="Tra-2">
                <option>Active</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>

            <div className="UU3">
              <img src={Search}></img>
              <input type="search" placeholder="Search"></input>{" "}
            </div>
          </div>

          <div className="UserListPage-2">
            <table>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th> Transaction</th>
                <th>Payout Method</th>
                <th>Status</th>
                <th>Date Processed</th>
                <th>Coins</th>
              </tr>

              {tableData.map((data, i) => {
                return (
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <h5>{data.Transaction}</h5>
                      <h6>{data.TransactionEmail}</h6>
                    </td>
                    <td id="applePay">{data.PayoutMethod}</td>
                    <td>
                      <h4 id="paid">{data.Status}</h4>
                    </td>
                    <td id="applePay">{data.DateProcessed}</td>
                    <td>
                      <p id="Pay">{data.Coins}</p>
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
    </>
  );
}
