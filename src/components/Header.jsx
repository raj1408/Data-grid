import React from "react";

export default function Header(props) {
  const renderArrow = (key) => {
    if (props.sortOption[key] === "asc") {
      return <span>&uarr;</span>;
    } else if (props.sortOption[key] === "desc") {
      return <span>&darr;</span>;
    }
    return null;
  };

  return (
    <div className="header">
      <div className="symbol"></div>
      <button>{props.Customer}</button>
      <button onClick={props.sortByLastSeen}>
        {props.LastSeen} {renderArrow("lastSeen")}
      </button>
      <button onClick={props.sortByOrders}>
        {props.Orders} {renderArrow("orders")}
      </button>
      <button onClick={props.sortByTotalSpent}>
        {props.TotalSpent} {renderArrow("totalSpent")}
      </button>
      <button onClick={props.sortByLatestPurchase}>
        {props.LatestPurchase} {renderArrow("latestPurchase")}
      </button>
      <button>{props.News}</button>
      <button>{props.Segments}</button>
    </div>
  );
}
