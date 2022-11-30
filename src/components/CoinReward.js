import React, { useState } from "react";
import "../Css/CoinReward.css";
import { RiCloseFill } from "react-icons/ri";
function CoinReward() {
  const [close,setClose] = useState(true);
  const handleClose = () =>{
  setClose(false);
  }
  return (
    <div>
    {close ?  <div className="coin_container">
        <div className="coin_cross">
          <RiCloseFill className="border_right" onClick={handleClose} />
        </div>
        <div className="daily_coin_reward">Daily Coin Reward</div>
        <div className="coin-text">coin</div>
        <div className="coin_value">
          <input type="text" />
        </div>
        <div className="save_button">
          <button>Save</button>
        </div>
      </div>:null}
    </div>
  );
}

export default CoinReward;
