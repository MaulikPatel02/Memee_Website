import React, { useState } from "react";
import "../Css/Gift_Cards_invetory_page.css";
import Search from "../images/Header_images/Search.png";
import Bell from "../images/Header_images/bell.png";
import Oval from "../images/Header_images/Oval.png";
import left from "../images/left.png";
import right from "../images/right.png";
import Amzon_gift_cards from '../images/Amzon_gift_cards.png';
import Modal from "react-modal";
import Amzon_Banner_scroll from '../images/Amzon_Banner-scroll.png' 

export default function Gift_Cards_invetory_page() {
  const [isOpen, setIsOpen] = useState(false);

  Modal.setAppElement("#root");
    const tableData = [
        {
          id: 1,
          GiftCardImg:Amzon_gift_cards,
          Name:"$100",
          GiftCardNumber:"22AW-L8CTA9-4P",
          CoinPrice:"14,000",
          DateAdded:"April 4, 2022"
        },
        {
            id: 2,
            GiftCardImg:Amzon_gift_cards,
            Name:"$100",
            GiftCardNumber:"22AW-L8CTA9-4P",
            CoinPrice:"14,000",
            DateAdded:"April 4, 2022"
          },
          {
            id: 3,
            GiftCardImg:Amzon_gift_cards,
            Name:"$100",
            GiftCardNumber:"22AW-L8CTA9-4P",
            CoinPrice:"14,000",
            DateAdded:"April 4, 2022"
          },
          {
            id: 4,
            GiftCardImg:Amzon_gift_cards,
            Name:"$100",
            GiftCardNumber:"22AW-L8CTA9-4P",
            CoinPrice:"14,000",
            DateAdded:"April 4, 2022"
          },
          {
            id: 5,
            GiftCardImg:Amzon_gift_cards,
            Name:"$100",
            GiftCardNumber:"22AW-L8CTA9-4P",
            CoinPrice:"14,000",
            DateAdded:"April 4, 2022"
          },
          {
            id: 6,
            GiftCardImg:Amzon_gift_cards,
            Name:"$100",
            GiftCardNumber:"22AW-L8CTA9-4P",
            CoinPrice:"14,000",
            DateAdded:"April 4, 2022"
          },
          {
            id: 7,
            GiftCardImg:Amzon_gift_cards,
            Name:"$100",
            GiftCardNumber:"22AW-L8CTA9-4P",
            CoinPrice:"14,000",
            DateAdded:"April 4, 2022"
          },
          {
            id: 8,
            GiftCardImg:Amzon_gift_cards,
            Name:"$100",
            GiftCardNumber:"22AW-L8CTA9-4P",
            CoinPrice:"14,000",
            DateAdded:"April 4, 2022"
          },
          {
            id: 9,
            GiftCardImg:Amzon_gift_cards,
            Name:"$100",
            GiftCardNumber:"22AW-L8CTA9-4P",
            CoinPrice:"14,000",
            DateAdded:"April 4, 2022"
          },
          {
            id: 10,
            GiftCardImg:Amzon_gift_cards,
            Name:"$100",
            GiftCardNumber:"22AW-L8CTA9-4P",
            CoinPrice:"14,000",
            DateAdded:"April 4, 2022"
          },
    ]
  return (
    <>
      <div className="Gift_Cards_invetory_page">
        <div className="Header" id="GiftRewdHead">
          <div className="H-1" id="GiftRewdHead-1">
            <div className="UH-1234" id="UUHH">
              <h1>Gift Card Inventory</h1>
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


        <div className="Gift_Cards_invetory_page_table">
            <div id="table_content_button">
                <h3>Gift Cards</h3>
             <button onClick={() => {
                setIsOpen(true);
              }}>Add Amazon Card</button>
            </div>


            <Modal
            isOpen={isOpen}
            shouldCloseOnOverlayClick={false}
            onRequestClose={() => setIsOpen(false)}
          >
            <div className="MOdalMain">
              <div className="Add_Gift_Card_modal">
                <div className="Modal_card_Overflow">
                <div className="edit_user_text">Add Amazon Gift Card</div>

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
  <div className="M_banner">
    <div className="M_1banner">
      <div className="M_Banner_Input">
        <h5>Name</h5>
        <input type="text" placeholder="$100"></input>
      </div>
      <div className="M_Banner_Input">
        <h5>Gift Card #</h5>
        <input type="text" placeholder="22AW-L8CTA9-4P"></input>
      </div>
      <div className="M_Banner_Input">
        <h5>Amount</h5>
        <input type="text" placeholder="00"></input>
      </div>
      <div className="M_Banner_Input2">
        <h5>Coin Price</h5>
        <input type="text" placeholder="14,000"></input>
      </div>
      <div className="save_card" >
        <button>Save Card</button>
      </div>
    </div>
    <div className="M_2banner">
        <h5>Add image</h5>
        <div className="Scroll_banner">
        <div className="Banner_Scrole">
          <img src={Amzon_Banner_scroll}></img>
          
        </div>
        <div className="Banner_Scrole">
          <img src={Amzon_Banner_scroll}></img>
         
        </div>
        <div className="Banner_Scrole">
          <img src={Amzon_Banner_scroll}></img>
         
        </div>
        <div className="Banner_Scrole">
          <img src={Amzon_Banner_scroll}></img>
          
        </div>
        <div className="Banner_Scrole">
          <img src={Amzon_Banner_scroll}></img>
          
        </div>
         <div className="Banner_Scrole">
          <img src={Amzon_Banner_scroll}></img>
         
        </div>
         <div className="Banner_Scrole">
          <img src={Amzon_Banner_scroll}></img>
          
        </div>

        </div>
    </div>
  </div>
</div>
                </div>
              </div>
            </div>
          </Modal>



            <div>
            <div className="UserListPage-2">
              <table>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th> Gift Card Number</th>
                  <th>Coin Price</th>
                  <th>Date Added</th>
                  <th></th>
                </tr>

                {tableData.map((data, i) => {
                  return (
                    <tr key={i}>
                      <td id="Gift_cards_td"><img src={data.GiftCardImg}></img> </td>
                      <td id="Gift_cards_td">{data.Name}</td>
                      <td id="Gift_cards_td">{data.GiftCardNumber}</td>
                      <td id="Gift_cards_td">{data.CoinPrice}</td>
                      <td id="Gift_cards_td">{data.DateAdded}</td>
                     
                      
                      <td id="Gift_cards_td2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          fill="currentColor"
                          class="bi bi-three-dots-vertical"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
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
