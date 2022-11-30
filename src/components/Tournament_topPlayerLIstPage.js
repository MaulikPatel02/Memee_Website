import React from "react";
import "../Css/Tournament_topPlayerLIstPage.css";
import Trank1 from "../images/Trank-1.png";
import Trank_table_user_photo from "../images/Trank_table_user_photo.png";
import { Link } from "react-router-dom";
import Trank1st from "../images/Trank-1.png";
import Trank2nd from "../images/Trank-2.png";
import User_rewards_2 from "../images/User_rewards_2.png";
import User_rewards_3 from "../images/User_rewards_3.png";

export default function Tournament_topPlayerLIstPage() {
  const tableData = [
    {
      id: 1,
      First: Trank1st,
      Rank: "1st",
      Name: "Mr Astronut",
      UpVote: "24850",
      DateJoined: "Jan 1, 2022",
      User_image: Trank_table_user_photo,
    },
    {
      id: 2,
      First: Trank1st,
      Rank: "2nd",
      Name: "Mr Astronut",
      UpVote: "24850",
      DateJoined: "Jan 1, 2022",
      User_image: User_rewards_2,
    },
    {
      id: 3,
      First: Trank1st,
      Rank: "3rd",
      Name: "Mr Astronut",
      UpVote: "24850",
      DateJoined: "Jan 1, 2022",
      User_image: User_rewards_3,
    },
    {
      id: 4,
      First: Trank1st,
      Rank: "4th",
      Name: "Mr Astronut",
      UpVote: "24850",
      DateJoined: "Jan 1, 2022",
      User_image: Trank_table_user_photo,
    },
    {
      id: 5,
      First: Trank2nd,
      Rank: "5th",
      Name: "Mr Astronut",
      UpVote: "24850",
      DateJoined: "Jan 1, 2022",
      User_image: User_rewards_2,
    },
    {
      id: 6,
      First: Trank2nd,
      Rank: "6th",
      Name: "Mr Astronut",
      UpVote: "24850",
      DateJoined: "Jan 1, 2022",
      User_image: Trank_table_user_photo,
    },
    {
      id: 7,
      First: Trank2nd,
      Rank: "7th",
      Name: "Mr Astronut",
      UpVote: "24850",
      DateJoined: "Jan 1, 2022",
      User_image: User_rewards_3,
    },
    {
      id: 8,
      First: Trank2nd,
      Rank: "8th",
      Name: "Mr Astronut",
      UpVote: "24850",
      DateJoined: "Jan 1, 2022",
      User_image: User_rewards_2,
    },
    {
      id: 9,
      First: Trank2nd,
      Rank: "9th",
      Name: "Mr Astronut",
      UpVote: "24850",
      DateJoined: "Jan 1, 2022",
      User_image: User_rewards_3,
    },
    {
      id: 10,
      First: Trank2nd,
      Rank: "10th",
      Name: "Mr Astronut",
      UpVote: "24850",
      DateJoined: "Jan 1, 2022",
      User_image: User_rewards_2,
    },
  ];
  return (
    <>
      <div className="Tournament_topPlayerLIstPage">
        <div className="Tournament_topPlayerLIstPage-1">
          <div className="Tournament_topPlayerLIstPage-1-1">
            <h4>Top Players (Week 1)</h4>
            <input type="checkbox"></input>Auto Pay
          </div>
          <div className="Tournament_topPlayerLIstPage-1-2">
            <Link to="/Rewards_Pay_out_Page">
              <button>Reward Payout</button>
            </Link>
          </div>
        </div>

        <div className="Tournament_topPlayerLIstPage-2">
          <div className="UserListPage-2">
            <table id="Tournament_top_player_table">
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Up Vote</th>
                <th>Date Joined</th>
                <th>Image</th>
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
                    <td>{data.UpVote}</td>
                    <td>
                      <h4>{data.DateJoined}</h4>
                    </td>
                    <td>
                      <img src={data.User_image}></img>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
