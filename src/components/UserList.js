import React, { useState } from "react";
import "../Css/UserList.css";
import userheaderimg from "../images/All_header/UserList.png";
import Oval from "../images/Header_images/Oval.png";
import edit from "../images/Edit.png";
import Delete from "../images/Delete.png";
import u1 from "../images/Utable.png";
import activeuser from "../images/ActiveUser.png";
import Search from "../images/Header_images/Search.png";
import left from "../images/left.png";
import right from "../images/right.png";
import Bell from "../images/Header_images/bell.png";
import offline from '../images/offline.png';
import Diasable from '../images/Diasable.png';
import Userlistuser1 from '../images/User_list_user-1.png';
import Userlistuser2 from '../images/User_list_user-2.png';
import Modal from 'react-modal';

Modal.setAppElement('#root')
export default function UserList() {
  const[isOpen,setIsOpen]=useState(false)
  const tableData = [
    {
      id: 1,
      user_img:u1,
      Name: "Joshua Smith",
      Email: "Joshua@gmail.com",
      Location: "Washington, USA",
      Status: "Active",
      Status_Color:activeuser,
      Date: "23 Aug, 2020",
    },
    {
      id: 2,
      user_img:Userlistuser1,
      Name: "Joshua Smith",
      Email: "Joshua@gmail.com",
      Location: "Washington, USA",
      Status: "Active",
      Status_Color:activeuser,
      Date: "23 Aug, 2020",
    },
    {
      id: 3,
      user_img:Userlistuser2,
      Name: "Joshua Smith",
      Email: "Joshua@gmail.com",
      Location: "Washington, USA",
      Status: "Inactive",
      Status_Color:offline,
      Date: "23 Aug, 2020",
    },
    {
      id: 4,
      user_img:u1,
      Name: "Joshua Smith",
      Email: "Joshua@gmail.com",
      Location: "Washington, USA",
      Status: "Active",
      Status_Color:activeuser,
      Date: "23 Aug, 2020",
    },
    {
      id: 5,
      user_img:Userlistuser1,
      Name: "Joshua Smith",
      Email: "Joshua@gmail.com",
      Location: "Washington, USA",
      Status: "Inactive",
      Status_Color:offline,
      Date: "23 Aug, 2020",
    },
    {
      id: 6,
      user_img:Userlistuser2,
      Name: "Joshua Smith",
      Email: "Joshua@gmail.com",
      Location: "Washington, USA",
      Status: "Disabled",
      Status_Color:Diasable,
      Date: "23 Aug, 2020",
    },
    {
      id: 7,
      user_img:u1,
      Name: "Joshua Smith",
      Email: "Joshua@gmail.com",
      Location: "Washington, USA",
      Status: "Inactive",
      Status_Color:offline,
      Date: "23 Aug, 2020",
    },
    {
      id: 8,
      user_img:Userlistuser1,
      Name: "Joshua Smith",
      Email: "Joshua@gmail.com",
      Location: "Washington, USA",
      Status: "Disabled",
      Status_Color:Diasable,
      Date: "23 Aug, 2020",
    },
    {
      id: 9,
      user_img:Userlistuser2,
      Name: "Joshua Smith",
      Email: "Joshua@gmail.com",
      Location: "Washington, USA",
      Status: "Disabled",
      Status_Color:Diasable,
      Date: "23 Aug, 2020",
    },
    {
      id: 10,
      user_img:u1,
      Name: "Joshua Smith",
      Email: "Joshua@gmail.com",
      Location: "Washington, USA",
      Status: "Active",
      Status_Color:activeuser,
      Date: "23 Aug, 2020",
    },
 
  ];

  return (
    <>
      <div className="UserList">
        <div className="UserHeader">
          <div className="UH-1">
            <h1>All Users</h1>
            <img src={userheaderimg}></img>
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

        <div className="UserListPage">
          <div className="UserListPage-1">
            <div className="UU1">
              <select>
                <option>Last 30 Days</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>

            <div className="UU2">
              <select>
                <option>
                  <img src={activeuser}></img> Active
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>

            <div className="UU3">
              <img src={Search}></img>
              <input type="search" placeholder="Search"></input>{" "}
            </div>

            <div className="UU4">
              <img  onClick={()=>{setIsOpen(true)}} src={edit}></img>
            </div>
            <div className="UU5">
              <img src={Delete}></img>
            </div>
          </div>


          <Modal
         isOpen={isOpen}
         shouldCloseOnOverlayClick={false}
         onRequestClose={()=>setIsOpen(false)}

         style={
            {
            
                overlay:{
                    // backgroundColor:'grey'
                    
                }
            }
         }
         >


<div className="MOdalMain">
          <div className="Modal">
            <div className="edit_user_text">Edit User</div>

            <div className="M">
              <div className="edit_right_cross">
                <svg
                onClick={()=>{setIsOpen(false)}}
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
              <div className="M_1">
                <div className="MMM">
                  <h5>Name</h5>
                  <input type="text" placeholder="Jaime Smith"></input>
                </div>
                <div className="MMM">
                  <h5>Email</h5>
                  <input
                    type="Email"
                    placeholder="jaime.smith@gmail.com"
                  ></input>
                </div>
              </div>
              <div className="M_1">
                <div className="MMM">
                  <h5>New Password</h5>
                  <input type="Password" placeholder="New Password"></input>
                </div>
                <div className="MMM">
                  <h5>Confirm New Password</h5>
                  <input type="Password" placeholder="Confirm New Password"></input>
                </div>
              </div>
            </div>
            <div className="save_changes">
              <button>Save Changes</button>
            </div>
          </div>
        </div>
        </Modal>




          <div className="UserListPage-2">
            <table>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th> Select All</th>
                <th>Name/Email</th>
                <th>Location</th>
                <th>Status</th>
                <th>Date</th>
              </tr>

              {tableData.map((data, i) => {
                return (
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <img src={data.user_img}></img>
                    </td>
                    <td>
                      <h5>{data.Name}</h5>
                      <h6>{data.Email}</h6>
                    </td>
                    <td>
                      <h4>{data.Location}</h4>
                    </td>
                    <td>
                      <img src={data.Status_Color}></img>
                      <span> {data.Status}</span>
                    </td>
                    <td>
                      <p>{data.Date}</p>
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
      {/* {show && <EditUser />} */}
    </>
  );
}
