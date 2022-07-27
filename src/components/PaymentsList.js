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
    <div>
      <table className={classes.table}>
        <thead>
          <tr className={classes.payment}>
            <th>
              <h5>payment_ID</h5>
            </th>
            <th>
              <h5>Price_ID</h5>
              {/* directly linked to product_ID */}
            </th>
            <th>
              <h5>Qty.</h5>
            </th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
    </div>
  );
};

export default PaymentList;
