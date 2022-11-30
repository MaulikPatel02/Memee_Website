import React from "react";
import "../Css/Rewards_Pay_out_Page.css";
import Search from "../images/Header_images/Search.png";
import Bell from "../images/Header_images/bell.png";
import Oval from "../images/Header_images/Oval.png";
import Timage from "../images/All_header/TournamentHead.png";
import Back from '../images/BackToPage.png';
import { Link } from "react-router-dom";
import Trank1 from "../images/Trank-1.png";
import Trank2 from "../images/Trank-2.png";
// import Trank_table_user_photo from "../images/Trank_table_user_photo.png";

export default function Rewards_Pay_out_Page() {
    const tableData = [
        {
            id: 1,
            First:Trank1,
            Rank: "1st",
            Name: "Mr Astronut",
            Email:"iammemer@memee.com",
            UpVote: "24850",
            DateJoined: "Jan 1, 2022",
        },
        {
          id: 2,
          First:Trank1,
          Rank: "2nd",
          Name: "Mr Astronut",
          Email:"iammemer@memee.com",
          UpVote: "24850",
          DateJoined: "Jan 1, 2022",
      },
      {
        id: 3,
        First:Trank1,
        Rank: "3rd",
        Name: "Mr Astronut",
        Email:"iammemer@memee.com",
        UpVote: "24850",
        DateJoined: "Jan 1, 2022",
    },
    {
      id: 4,
      First:Trank2,
      Rank: "4th",
      Name: "Mr Astronut",
      Email:"iammemer@memee.com",
      UpVote: "24850",
      DateJoined: "Jan 1, 2022",
  },
  {
    id: 5,
    First:Trank2,
    Rank: "5th",
    Name: "Mr Astronut",
    Email:"iammemer@memee.com",
    UpVote: "24850",
    DateJoined: "Jan 1, 2022",
},
{
  id: 6,
  First:Trank2,
  Rank: "6th",
  Name: "Mr Astronut",
  Email:"iammemer@memee.com",
  UpVote: "24850",
  DateJoined: "Jan 1, 2022",
},
{
  id: 7,
  First:Trank2,
  Rank: "7th",
  Name: "Mr Astronut",
  Email:"iammemer@memee.com",
  UpVote: "24850",
  DateJoined: "Jan 1, 2022",
},
{
  id: 8,
  First:Trank2,
  Rank: "8th",
  Name: "Mr Astronut",
  Email:"iammemer@memee.com",
  UpVote: "24850",
  DateJoined: "Jan 1, 2022",
},
{
  id: 9,
  First:Trank2,
  Rank: "9th",
  Name: "Mr Astronut",
  Email:"iammemer@memee.com",
  UpVote: "24850",
  DateJoined: "Jan 1, 2022",
},
{
  id: 10,
  First:Trank2,
  Rank: "10th",
  Name: "Mr Astronut",
  Email:"iammemer@memee.com",
  UpVote: "24850",
  DateJoined: "Jan 1, 2022",
},
      
    
    ]
  return (
    <>
      <div className="Rewards_Pay_out_Page">
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



        <div className="Rewards_Pay_out_Page-1">
            <div className="Rewards_Pay_out_Page-backpage">
            <Link to="/Tournament_topPlayerLIstPage">  <img src={Back}></img> </Link>
                <h4>Reward Payout</h4>
            </div>



            <div className="Rewards_Pay_out_Page-Table">
            <div className="UserListPage-2">
            <table id="Tournament_top_player_table">
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Email</th>
                <th>Up Vote</th>
                <th>Date Joined</th>
                <th>Reward</th>
              </tr>

              {tableData.map((data, i) => {
                return (
                  <tr>
                    <td className="imageTd">
                      <div className="imgContainer">
                        <img id="rank-1" src={data.First}></img>
                        <img id="rank-2" src={data.First}></img>
                      </div>
                      <span id="rank-No">{data.Rank}</span>
                    </td>
                    <td>{data.Name}</td>
                    <td>{data.Email}</td>
                    <td id="UpWotesRewards">{data.UpVote}</td>
                    <td id="UpWotesRewards2">
                      <h4>{data.DateJoined}</h4>
                    </td>
                    <td id="UpWotesRewards3">
                     <select>
                        <option>Gift Card</option>
                     </select>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
            </div>
        </div>
      </div>
    </>
  );
}
