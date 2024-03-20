import React from "react";
export default function Customer(props) {
  return (
    <div className="header">
      <div className="symbol"></div>
      <div className="info">
        <img src={props.infoImage} alt="" />
        <p>{props.name}</p>
      </div>

      <p>{props.date}</p>
      <p>{props.order}</p>
      <p>{props.spent}</p>
      <p>{props.purchase}</p>
      <img className="check" src={props.news} alt="right" />
      <p className="segment">{props.segment}</p>
    </div>
  );
}
