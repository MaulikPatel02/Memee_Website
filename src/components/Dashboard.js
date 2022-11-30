import React, { useState } from "react";
import "../Css/Header.css";
import Group from "../images/DashBoard_images/Group.png";
import Vector from "../images/DashBoard_images/Vector.png";
import Oval from "../images/Header_images/Oval.png";
import "../Css/Dashboard.css";
import UserGroup from "../images/DashBoard_images/UserGroup.png";
import Active from "../images/DashBoard_images/ACtivity%.png";
import Inactive from "../images/DashBoard_images/Inactive.png";
import Online from "../images/DashBoard_images/Active.png";
import postreport from "../images/DashBoard_images/postreport.png";
import volume from "../images/DashBoard_images/volume.png";
import arrow from "../images/DashBoard_images/arrow.png";
import yellow from "../images/DashBoard_images/yellow.png";
import purple from "../images/DashBoard_images/purple.png";
import U from "../images/DashBoard_images/U-1.png";
import U1 from "../images/DashBoard_images/U-2.png";
import U2 from "../images/DashBoard_images/U-3.png";
import U3 from "../images/DashBoard_images/U-4.png";
import Search from "../images/Header_images/Search.png";
import Bell from "../images/Header_images/bell.png";
import Modal from 'react-modal';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { PieChart, Pie } from "recharts";

export default function Dashboard() {
  const[isOpen,setIsOpen]=useState(false)
  const data = [
    {
      name: "12AM",

      pv: 400,
    },
    {
      name: "2AM",

      pv: 398,
    },
    {
      name: "4AM",

      pv: 500,
    },
    {
      name: "8AM",

      pv: 508,
    },
    {
      name: "10AM",

      pv: 500,
    },
    {
      name: "12AM",

      pv: 400,
    },
    {
      name: "14AM",
      pv: 300,
    },
    {
      name: "16AM",
      pv: 300,
    },
    {
      name: "18AM",

      pv: 300,
    },
    {
      name: "20AM",

      pv: 300,
    },
    {
      name: "22AM",

      pv: 300,
    },
  ];

  const data2 = [
    {
      name: "Mar",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Apr",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "May",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Jun",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "July",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Aug",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Sap",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const data3 = [
    { name: "Group A", value: 200 },
    { name: "Group B", value: 500 },
    { name: "Group C", value: 300 },
  ];
  const COLORS = [
    " rgba(161, 54, 245, 1)",
    " rgba(97, 97, 97, 1)",
    "rgba(255, 205, 47, 1)",
  ];

  return (
    <>
     
    <div>
    <div className="Header" id="dashboardHeader">
        <div className="H-1">
          <h1>
            Hi <span>John!</span>
          </h1>
          <div className="handicon">
            <img src={Group}></img>
            <img id="hand" src={Vector}></img>
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
    </div>
      <div className="DashBoard">
        <div className="DashBoard-1">
          <div className="D-11">
            <h1>
              User Activity Report{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                class="bi bi-lightbulb-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z" />
              </svg>
            </h1>

            <div className="D-22">
              <div className="Chart">
                <ResponsiveContainer width="100%" aspect={2.1}>
                  <BarChart
                    width="100%"
                    height={300}
                    data={data}
                    margin={{
                      top: 10,
                      right: 5,
                      left: 5,
                      bottom: 10,
                    }}
                    barSize={4}
                  >
                    <XAxis dataKey="name" padding={{ left: 5, right: 5 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Bar
                      dataKey="pv"
                      fill="white"
                      background={{ fill: "grey" }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <br />
              <div className="Chart-2">
                <div className="TotalUser">
                  <div className="T-1">
                    <img src={UserGroup}></img>
                    <h6>Total User</h6>
                  </div>

                  <div className="T-2">
                    <h1>36K</h1>
                  </div>

                  <div className="T-3">
                    <div className="T33"></div>
                  </div>
                </div>

                <div className="TotalUser">
                  <div className="T-1">
                    <img src={Online}></img>
                    <h6>Active User</h6>
                  </div>

                  <div className="T-2">
                    <h1>743</h1>
                  </div>

                  <div className="T-3">
                    <div className="T33"></div>
                  </div>
                </div>

                <div className="TotalUser">
                  <div className="T-1">
                    <img src={Inactive}></img>
                    <h6>Inactive User</h6>
                  </div>

                  <div className="T-2">
                    <h1>29K</h1>
                  </div>

                  <div className="T-3">
                    <div className="T33"></div>
                  </div>
                </div>

                <div className="TotalUser">
                  <div className="T-1">
                    <img src={Active}></img>
                    <h6>Activity %</h6>
                  </div>

                  <div className="T-2">
                    <h1>17%</h1>
                  </div>

                  <div className="T-3">
                    <div className="T33"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="D-2-2">
            <div className="D-221">
              <div className="header_div">
                <h2>Posts report</h2>
              </div>
              <div className="imageWrapper">
                  <div className="postReport">
                    <div className="post-1">
                      <img src={volume}></img>
                    </div>

                    <div className="post-2">
                      <h2>172K</h2>

                      <div className="post-3">
                        <h5>Total User </h5>
                        <h6>
                          18% <img src={arrow}></img>
                        </h6>
                      </div>
                    </div>
                  </div>
                
              </div>
            </div>

            <div className="D-222">
              <ResponsiveContainer width="100%" aspect={2.9}>
                <BarChart
                  width={400}
                  height={300}
                  data={data2}
                  margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                  }}
                  barSize={8}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill=" rgba(255, 205, 47, 1)" />
                  <Bar dataKey="uv" fill=" rgba(57, 51, 65, 1)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="DashBoard-2">
          <div  onClick={()=>{setIsOpen(true)}}  className="Dash-1">
            <h5> Edit Daily Coin Reward</h5>
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

<div className="MOdalMain2" >
        <div className="Modal2">
          <div className="edit_user_text">Daily Coin Reward</div>

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
                <h5>Coin</h5>
                <input type="text" placeholder="50"></input>
              </div>
              
            </div>
            
          </div>
          <div className="save_changes2">
            <button>Save</button>
          </div>
        </div>
      </div>

         </Modal>





<div className="showFlexinMedia">
<div className="Dash-2">
            <div className="dash-2-2">
              <h5>User Spendings</h5>
              <h6>Last 6 Months</h6>
            </div>

            <div className="piechart">
              <PieChart width={250} height={200}>
                <Pie
                  data={data3}
                  cx={120}
                  cy={115}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={3}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </div>

            <h1>$6479</h1>
            <div className="dash-2-3">
              <div id="yellow">
                <img src={yellow}></img>Stores Spendings
              </div>
              <div id="yellow">
                <img src={purple}></img>Coin Spendings
              </div>
            </div>

            <div className="transaction">
              <h5> View All Transaction</h5>
            </div>
          </div>

          <div className="Dash-3">
            <div className="Latestuser">
              <h4>Latest User</h4>
              <h6>See all</h6>
            </div>

            <div className="user-2">
              <div className="userspic2">
                <div className="userspic">
                  <img src={U}></img>
                </div>
                <h6>Jane</h6>
              </div>

              <div className="userspic2">
                <div className="userspic">
                  <img src={U1}></img>
                </div>
                <h6>Daina</h6>
              </div>

              <div className="userspic2">
                <div className="userspic">
                  <img src={U2}></img>
                </div>
                <h6>Sarah</h6>
              </div>

              <div className="userspic2">
                <div className="userspic">
                  <img src={U3}></img>
                </div>
                <h6>Jaime</h6>
              </div>
            </div>
          </div>
</div>
          
        </div>
      </div>
     
    </>
  );
}
