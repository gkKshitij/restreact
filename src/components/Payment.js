import React from "react";

//css
import classes from "./Payment.module.css";

const Payment = (props) => {
  return (
    <div>
      <tr>
        <td>{props.id}</td>
        <td>{props.price_id}</td>
        <td>{props.quantity}</td>
      </tr>
      {/* <li className={classes.payment}>
        <div>
          <h3>{props.id}</h3>
        </div>
        <div>
          <h3>{props.price_id}</h3>
        </div>
        <div>
          <h3>{props.quantity}</h3>
        </div>
      </li> */}

      {/* <div className="grid-container">
        <div className={classes.grid_item}>1</div>
        <div className={classes.grid_item}>2</div>
        <div className={classes.grid_item}>3</div>
        <div className={classes.grid_item}>4</div>
        <div className={classes.grid_item}>5</div>
        <div className={classes.grid_item}>6</div>
        <div className={classes.grid_item}>7</div>
        <div className={classes.grid_item}>8</div>
        <div className={classes.grid_item}>9</div>
      </div> */}
    </div>
  );
};

export default Payment;
