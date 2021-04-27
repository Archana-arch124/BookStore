import React from "react";
import "./orderPlaced.scss";
import placed from "../../Assets/Placed.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "17px",
  },
  shopingButton: {
    marginTop: "1%",
    backgroundColor: "",
  },
}));

export default function OrderPlaced(props) {
  const classes = useStyles();
  const random = Math.floor((Math.random() * 1000000 ) + 1);
  let history = useHistory();

  function handleClick() {
    history.push("/dashboard");
  }
  return (
    <div className="placedBody">
      <img className="successfulImage" src={placed} alt="" />
      <Typography className={classes.text}>
        hurray!!!your order is confirmed{" "}
      </Typography>
      <Typography className={classes.text}>
        {" "}
        the order id is #{random} save the order id for
      </Typography>
      <Typography className={classes.text}>further communication. </Typography>

      <table className="orderTable">
        <tr>
          <th>Email Us</th>
          <th>Contact Us</th>
          <th>Address</th>
        </tr>
        <tr>
          <td>admin@bookstore.com</td>
          <td>+918163475881</td>
          <td>
            42, 14 main 15th Cross, Sector 4, opp to BDA complex near Kamarakom
            restaurent HSR layout Banglore 560034
          </td>
        </tr>
      </table>
      <Button 
        className={classes.shopingButton}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        CONTINUE SHOPPING
      </Button>
    </div>
  );
}
