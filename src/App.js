import "./App.css";

// maulik components

import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import UserList from "./components/UserList";
import Settings from "./components/Settings";
import Transaction from "./components/Transaction";
import GiftRewards from "./components/GiftRewards";
import Tournament from "./components/Tournament";
import Tournament_topPlayerLIstPage from "./components/Tournament_topPlayerLIstPage";
import Rewards_Pay_out_Page from "./components/Rewards_Pay_out_Page";
import Tournament_MeMee_post_by_user from "./components/Tournament_MeMee_post_by_user";
import Gift_Cards_invetory_page from "./components/Gift_Cards_invetory_page";
import Guidlines_rules_and_regulationspage from "./components/Guidlines_rules_and_regulationspage";
import Tournament_banner from "./components/Tournament_banner";
import Winner_FeedBack_Page from "./components/Winner_FeedBack_Page";
import Support_page from "./components/Support_page";
import Coin_rewards_page from "./components/Coin_rewards_page";

import Notification from "./components/Notification";

// ravi components


import { BrowserRouter, Routes, Route } from "react-router-dom";


import { useState } from "react";


function App() {
  const [show, setShow] = useState(false);

  const openSideBar = () => {
    setShow(true);
  };
  const closeSideBar = () => {
    setShow(false);
  };
  return (
    <>
      <BrowserRouter>
     

        <div className="A">
          {/* Side Bar */}

          {show ? (
            <div className="A-1" id="ExtraSideBar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-arrow-left-circle"
                viewBox="0 0 16 16"
                id="backSideButton"
                onClick={closeSideBar}
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                />
              </svg>
              <SideBar closeBar={closeSideBar} />
            </div>
          ) : null}

          <div className="A-1" id="PrSideBar">
            <SideBar  />
          </div>

          {/*  Header & Other Pages */}

          <div className="A-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
              id="memeeToggle"
              onClick={openSideBar}
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/UserList" element={<UserList />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/Transaction" element={<Transaction />} />
              <Route path="/GiftRewards" element={<GiftRewards />} />
              <Route path="/Tournament" element={<Tournament />} />
              <Route
                path="/Tournament_topPlayerLIstPage"
                element={<Tournament_topPlayerLIstPage />}
              />
              <Route
                path="/Rewards_Pay_out_Page"
                element={<Rewards_Pay_out_Page />}
              />
              <Route
                path="/Tournament_MeMee_post_by_user"
                element={<Tournament_MeMee_post_by_user />}
              />
              <Route
                path="/Gift_Cards_invetory_page"
                element={<Gift_Cards_invetory_page />}
              />
              <Route
                path="/Guidlines_rules_and_regulationspage"
                element={<Guidlines_rules_and_regulationspage />}
              />
              <Route
                path="/Tournament_banner"
                element={<Tournament_banner />}
              />
              <Route
                path="/Winner_FeedBack_Page"
                element={<Winner_FeedBack_Page />}
              />
              <Route path="/Support_page" element={<Support_page />} />
              <Route
                path="/Coin_rewards_page"
                element={<Coin_rewards_page />}
              />
              <Route path="/Notification" element={<Notification />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
