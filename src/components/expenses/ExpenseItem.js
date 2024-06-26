import React from "react";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  console.log(props);
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.item.date} />
        <div className="expense-item__description">
          <h2>{props.item.title}</h2>
          <div className="expense-item__price">₹{props.item.amount}</div>
        </div>
      </Card>
    </li>
  );
}
export default ExpenseItem;
