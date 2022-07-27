import React from "react";

import Payment from "./Payment";
import classes from "./PaymentsList.module.css";

const PaymentList = (props) => {
  const listItems = props.payments.map((payment) => (
    <Payment
      key={payment.id}
      id={payment.id}
      price_id={payment.price_id}
      quantity={payment.quantity}
    />
  ));

  return (
    <table>
      <thead>
        <th>ID</th>
        <th>Price</th>
        <th>Quantity</th>
      </thead>
      <tbody>{listItems}</tbody>
    </table>
  );
};

export default PaymentList;
