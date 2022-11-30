import React from "react";
import "../Css/Tournament_MeMee_post_by_user.css";
import Search from "../images/Header_images/Search.png";
import Bell from "../images/Header_images/bell.png";
import Oval from "../images/Header_images/Oval.png";
import Timage from "../images/All_header/TournamentHead.png";
import Back from '../images/BackToPage.png';
import User_meme_post_1 from '../images/Memee_post_images/User_meme_post_1.png';
import Memee_post from '../images/Memee_post_images/Memee_post.png';
import Unlike from '../images/Memee_post_images/Unlike.png';
import Like from '../images/Memee_post_images/Like.png';
import dear from '../images/Memee_post_images/Dear_User.png';
import got from '../images/Memee_post_images/Got_user.png'
import Ghost_User from '../images/Memee_post_images/Ghost_User.png'

export default function Tournament_MeMee_post_by_user() {

  const tableData=[
    {
      id:1,
      DatePosted:"January 05, 2022",
      Like:"324",
      Dislike:"12",
      LikeImg:Like,
      DislikeImg:Unlike,
      post:Memee_post
    },
    {
      id:2,
      DatePosted:"January 05, 2022",
      Like:"324",
      Dislike:"12",
      LikeImg:Like,
      DislikeImg:Unlike,
      post:dear,
    },
    {
      id:3,
      DatePosted:"January 05, 2022",
      Like:"324",
      Dislike:"12",
      LikeImg:Like,
      DislikeImg:Unlike,
      post:Ghost_User,
    },
    {
      id:4,
      DatePosted:"January 05, 2022",
      Like:"324",
      Dislike:"12",
      LikeImg:Like,
      DislikeImg:Unlike,
      post:got
    },
    {
      id:5,
      DatePosted:"January 05, 2022",
      Like:"324",
      Dislike:"12",
      LikeImg:Like,
      DislikeImg:Unlike,
      post:Memee_post
    },
    {
      id:6,
      DatePosted:"January 05, 2022",
      Like:"324",
      Dislike:"12",
      LikeImg:Like,
      DislikeImg:Unlike,
      post:dear
    },
    {
      id:7,
      DatePosted:"January 05, 2022",
      Like:"324",
      Dislike:"12",
      LikeImg:Like,
      DislikeImg:Unlike,
      post:Ghost_User
    },
    {
      id:8,
      DatePosted:"January 05, 2022",
      Like:"324",
      Dislike:"12",
      LikeImg:Like,
      DislikeImg:Unlike,
      post:Memee_post
    },
    {
      id:9,
      DatePosted:"January 05, 2022",
      Like:"324",
      Dislike:"12",
      LikeImg:Like,
      DislikeImg:Unlike,
      post:Memee_post
    },
    {
      id:10,
      DatePosted:"January 05, 2022",
      Like:"324",
      Dislike:"12",
      LikeImg:Like,
      DislikeImg:Unlike,
      post:dear,
    },
    {
      id:11,
      DatePosted:"January 05, 2022",
      Like:"324",
      Dislike:"12",
      LikeImg:Like,
      DislikeImg:Unlike,
      post:Ghost_User,
    },
    {
      id:12,
      DatePosted:"January 05, 2022",
      Like:"324",
      Dislike:"12",
      LikeImg:Like,
      DislikeImg:Unlike,
      post:got
    },
    {
      id:13,
      DatePosted:"January 05, 2022",
      Like:"324",
      Dislike:"12",
      LikeImg:Like,
      DislikeImg:Unlike,
      post:Memee_post
    },
    {
      id:14,
      DatePosted:"January 05, 2022",
      Like:"324",
      Dislike:"12",
      LikeImg:Like,
      DislikeImg:Unlike,
      post:dear
    },
    {
      id:15,
      DatePosted:"January 05, 2022",
      Like:"324",
      Dislike:"12",
      LikeImg:Like,
      DislikeImg:Unlike,
      post:Ghost_User
    },
    {
      id:16,
      DatePosted:"January 05, 2022",
      Like:"324",
      Dislike:"12",
      LikeImg:Like,
      DislikeImg:Unlike,
      post:Memee_post
    },
    {
      id:17,
      DatePosted:"January 05, 2022",
      Like:"324",
      Dislike:"12",
      LikeImg:Like,
      DislikeImg:Unlike,
      post:Ghost_User
    },
    
    {
      id:18,
      DatePosted:"January 05, 2022",
      Like:"324",
      Dislike:"12",
      LikeImg:Like,
      DislikeImg:Unlike,
      post:got
    },
    
    
   

  ]


  return (
    <>
      <div className="Tournament_MeMee_post_by_user">
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


        <div className="Tournament_MeMee_post_by_user_postpage">
          
            <div className="Tournament_MeMee_post_by_user_postpage_userProfile">
                <ul>
                    <li><img src={Back}></img></li>
                    <li><img src={User_meme_post_1}></img></li>
                    <li>
                        <h5>Mr Astronut</h5>
                        <h6>iammemer@memee.com</h6>
                    </li>
                </ul>
            </div>
            <h2>Memes Posts by Mr Astronut</h2>


            <div className="Tournament_MeMee_post">
            {tableData.map((data, i) => {
                     return (
                  <div className="Memee_post_cards">
                    <img id="MeMee_img" src={data.post}></img>
                    <div className="Memee_post_cards_Details">
                    
                        <ul>
                            <li>Date Posted</li>
                            <li>{data.DatePosted}</li>
                            <li>
                                <button><img src={data.LikeImg}></img>{data.Like}</button>
                                <button><img src={data.DislikeImg}></img>{data.Dislike}</button>
                            </li>
                        </ul>
                        
                    </div>
                  </div>  
                    );
                  })}
            </div>
        </div>
      </div>
    </>
  );
}
