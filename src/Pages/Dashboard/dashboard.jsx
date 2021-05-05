import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Footer from '../../Components/Footer/footer'
import AppBar from "../../Components/AppBar/appBar.jsx";
import Books from "../../Components/Display/displayBooks";
import Cart from "../../Components/Cart/cart";
import { Route, Switch } from 'react-router-dom';
import ProtectedRoutes  from "../../Services/protectedRoutes.js";
import Services from "../../Services/bookServices"; 
import PlacedOrder from "../../Components/OrderPlaced/orderPlaced";
import { getallBooks } from "../../Redux/Actions/action";
const services = new Services();

const useStyles = makeStyles((theme) => ({
    dashboardMain: {
        width: "100%",
        display: "flex",  
        marginTop: "25px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },

}));

export default function Dashboard(props) {
    const classes = useStyles();
    const [setShow] = React.useState(false);
    const [cartBooks, setCartBooks] = React.useState([]);
    const [orderPlaced] = React.useState([]);

   React.useEffect(() => {
        allCartItem();
      }, []);
    
      const allCartItem = () => {
        services.getCartItem().then((data) => {
            console.log(data.data.result);
            setCartBooks(data.data.result);
          })
          .catch((err) => {
            console.log(err);
          });
      }; 

    return (
        <div className={classes.dashboardMain}>
            <AppBar totalCartItem={cartBooks.length}
                setShow={setShow}
                allCartItem={allCartItem}/>
            <Switch>
                <Route path="/dashboard" exact>
                    <Books cartBooks={cartBooks} allCartItem={allCartItem}  />
                </Route>
                <ProtectedRoutes path="/dashboard/cart" exact>
                    <Cart cartBooks={cartBooks} allCartItem={allCartItem} />
                </ProtectedRoutes >
                <ProtectedRoutes path="/dashboard/orderPlaced" exact>
          <PlacedOrder orderPlaced={orderPlaced}  />
        </ProtectedRoutes >
            </Switch>
            <Footer />
        </div>
    );
}