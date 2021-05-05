import React from "react";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Menu from "@material-ui/core/Menu";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    profileIcon: {
        marginTop: "20px",
        border: "2px solid red",
        borderRadius: "2px",
        width: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: "38px",
    },
    open:{
        display: "flex",
        alignItems: "center",
    },
    logout:{
        color:"red",

    },
    iconLogo: {
        width: "1.1em",
        height: "1.1em",
        color: "white",
        [theme.breakpoints.down("xs")]: {
            width: "0.9em",
            height: "0.9em",

        },

    },
}));
export default function Profile(props) {
    const classes = useStyles();
    const [anchorE2, setAnchorE2] = React.useState(null);


    let history = useHistory();

    function handleClick() {
        history.push("/Login");
    }
    const profileHandleOpen = (event) => {
        setAnchorE2(event.currentTarget);
    };

    const profileHandleClose = () => {
        setAnchorE2(null);
    };
/*     marginRight: theme.spacing(2),
 */
    return (
        <div className="button">
            <IconButton
                className={classes.appBarButton}
                onClick={profileHandleOpen}>
                <AccountCircleOutlinedIcon className={classes.iconLogo} />
            </IconButton>
            <Paper  >
                <Menu style={{ marginTop: "42px" }} 
                    anchorEl={anchorE2}
                    open={Boolean(anchorE2)}
                    onClose={profileHandleClose}>
                    <div className="MenuList" >
                        <b  style={{ fontSize: 20,paddingLeft:"15px",paddingRight:"25px" }}>Hello,Archanagowda </b>
                        <MenuItem  >
                        <div>My Profile</div>
                        </MenuItem>
                        <MenuItem  >
                        <div>Your Orders</div>
                        </MenuItem>
                        <MenuItem  >
                        <div>Wishlist</div>
                        </MenuItem>
                        <MenuItem className={classes.profileIcon}  >
                        <div className={classes.logout} onClick={handleClick}>LOGOUT</div>
                        </MenuItem>
                    </div>
                </Menu>
            </Paper>
        </div>
    )
}