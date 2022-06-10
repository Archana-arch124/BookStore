import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import bookImg from "../../Assets/Image14.png";
import Services from "../../Services/bookServices";
import './wishlist.scss';
import Appbar from '../AppBar/appBar';
import { makeStyles } from "@material-ui/core/styles";

const services = new Services();
const useStyles = makeStyles((theme) => ({
    bookName: {
        fontSize: "13px",
        fontWeight: "bold",
    },
    bookAuthor: {
        fontSize: "12px",
    },
    bookPrize: {
        fontSize: "13px",
        fontWeight: "bold",
        marginRight: "20px",
    },
    remove: {
        marginLeft: "200px",
        marginTop: "-53px",
    },
}));


export default function Wishlist(props) {
    const [wishbooks, setWishBooks] = React.useState([]);
    const [wishdata, setWishData] = React.useState(0);

    const classes = useStyles();

    React.useEffect(() => {
        getWishlistItem();
    }, []);

    const removeWishItem = (id) => {
        services.deleteWishlistItem(id).then((data) => {
                console.log("Successfully deleted" + data);
            })
            .catch((err) => {
                console.log("Error while removing" + err)
            })
    }
    const getWishlistItem = () => {
        services.getWishlistItem().then((data) => {
            console.log(data.data.result);
            setWishBooks(data.data.result);
/*             setWishData(data.data.result);
 */        })
            .catch((err) => {
                console.log(err);
            });
    };

    const CheckoutItem = () => {
        return (
            <div className="wishItem">
                {wishbooks.map((data) => (
                    <div className="cartBookItem">
                        <img className="cartBookImage" src={bookImg} alt="" />
                        <div className="infoContainer">
                            <Typography className={classes.bookName}>
                                {data.product_id.bookName}
                            </Typography>
                            <Typography className={classes.bookAuthor}>
                                {data.product_id.author}
                            </Typography>
                            <Typography className={classes.bookPrize}>
                                Rs. {data.product_id.price * data.product_id.quantity}
                            </Typography>
                            <Button className={classes.remove} onClick={(e) => {removeWishItem () }} color="secondary">Remove</Button>
                        </div>
                    </div>

                ))}
            </div>
        );
    };
    return (
        <>
            <Appbar />
            <div className='wishlist' >
                <div>
                    <b>My Wishlist <font className="bookSize"> ({wishbooks.length} items) </font></b>
                </div>
            </div>
            <CheckoutItem />
        </>
    )
}

