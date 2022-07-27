import React from "react";

//css
import classes from "./Payment.module.css";

const Payment = (props) => {
  return (
    <tr className={classes.payment}>
      <td>
        <h5>{props.id}</h5>
      </td>
      <td>
        <h5>{props.price_id}</h5>
      </td>
      <td>
        <h5>{props.quantity}</h5>
      </td>
    </tr>
  );
};

export default Payment;
