import React from "react";
import "../Css/Guidlines_rules_and_regulationspage.css";
import Guidlines_lmg from "../images/All_header/Guidlines_lmg.png";
import Search from "../images/Header_images/Search.png";
import Bell from "../images/Header_images/bell.png";
import Oval from "../images/Header_images/Oval.png";

export default function Guidlines_rules_and_regulationspage() {
  return (
    <>
      <div className="Guidlines_rules_and_regulationspage">
        <div className="Header" id="GiftRewdHead">
          <div className="H-1" id="GiftRewdHead-1">
            <div className="UH-1234" id="UUHH">
              <h1>Guidelines</h1>
              <img src={Guidlines_lmg}></img>
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

        <div className="Guidlines">
          <div className="Guidlines1">
            <div class="dropdown">
              <button
                class=" dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tournament - Rules and Regulations
              </button>
              <ul class="dropdown-menu">
                <li>Store - Rules and Regulations</li>
                <li>Judge - Rules and Regulations</li>
                <li>FAQ</li>
              </ul>
            </div>
            <button id="gbtn">Save</button>
          </div>

          <div className="Guidlines_Details">
            <div className="Guidlines_Details-1">
              <h4>Rules and Regulations</h4>
              <p>
                During the tournament all participants are expected to behave
                professionally and should avoid abusive language/gestures/
                question umpires decisions.
              </p>

              <p>
                The Team Captain is responsible for informing all of the
                teammates about when the team will be playing and on what dates.
              </p>

              <p>
                During the tournament all participants are expected to behave
                professionally and should avoid abusive language/gestures/
                question umpires decisions.
              </p>

              <p>
                The Team Captain is responsible for informing all of the
                teammates about when the team will be playing and on what dates.
              </p>

              <p>
                During the tournament all participants are expected to behave
                professionally and should avoid abusive language/gestures/
                question umpires decisions.
              </p>

              <p>
                The Team Captain is responsible for informing all of the
                teammates about when the team will be playing and on what dates.
              </p>

              <p>
                During the tournament all participants are expected to behave
                professionally and should avoid abusive language/gestures/
                question umpires decisions.
              </p>

              <p>
                The Team Captain is responsible for informing all of the
                teammates about when the team will be playing and on what dates.
              </p><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>

            <div className="Guidlines_Details-2">
                <h3 id="GG-1">April 8, 2022</h3>
                <h5 id="GG-2">09/12/2021</h5>
                <h6 id="GG-3">Term & Conditions - Updated!</h6>
                <hr id="hr_Guild" />
                <h5 id="GG-2">06/19/2021</h5>
                <h6 id="GG-3">FAQ</h6>
                <hr id="hr_Guild" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
