import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

const root = ReactDOM.createRoot(document.getElementById("root"));

function FunctionName(props) {
  return (
    <div className="Container">
      <img src={props.PersonDp} className="imgClass" alt="imagera" />
      <div className="TextContainer">
        <div className="Header">
          <h4 className="PersonName">{props.PersonName}</h4>
          <div className="MsgInfo">
            <p className="MsgTime">{props.MsgTime}</p>
            <i className="fas fa-star" style={{ color: "lightgreen" }}></i>
          </div>
        </div>
        <p className="PersonText">{props.PersonText}</p>
      </div>
    </div>
  );
}

const PersonDetails = [
  {
    PersonName: "Jessica Koel",
    PersonText: "Hey Joel, I'm here to help you out.",
    PersonDp: "https://randomuser.me/api/portraits/women/6.jpg",
    MsgTime: "11:26",
  },
  {
    PersonName: "Neal Bolger",
    PersonText: "I will send you all documents as soon as possible.",
    PersonDp: "https://randomuser.me/api/portraits/women/5.jpg",
    MsgTime: "12:26",
  },
  {
    PersonName: "Tamara Suiale",
    PersonText: "Are you going to the business trip next week?",
    PersonDp: "https://randomuser.me/api/portraits/women/4.jpg",
    MsgTime: "8:26",
  },
  {
    PersonName: "Sam Nielson",
    PersonText: "I suggest to start a new business soon.",
    PersonDp: "https://randomuser.me/api/portraits/men/3.jpg",
    MsgTime: "7:16",
  },
  {
    PersonName: "Caroline Nexon",
    PersonText: "We need to start a new research center.",
    PersonDp: "https://randomuser.me/api/portraits/women/2.jpg",
    MsgTime: "9:26",
  },
  {
    PersonName: "Patrick Koeler",
    PersonText: "Maybe by yes.",
    PersonDp: "https://randomuser.me/api/portraits/men/1.jpg",
    MsgTime: "3:26",
  },
];

function App() {
  return (
    <div className="App">
      <div className="SearchBarContainer">
        <input type="text" placeholder="Search..." className="SearchBar" />
        <i className="fas fa-search SearchIcon"></i>
      </div>
      {PersonDetails.map((item, index) => (
        <FunctionName
          key={index}
          PersonName={item.PersonName}
          PersonText={item.PersonText}
          PersonDp={item.PersonDp}
          MsgTime={item.MsgTime}
        />
      ))}
    </div>
  );
}

root.render(<App />);
