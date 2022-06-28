import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    button: {
        "backgroundColor": "#FF0055",
        "borderRadius": "30px",
        "boxShadow": "rgba(255, 0, 85, .2) 0 -25px 18px -14px inset,rgba(255, 0, 85, .15) 0 1px 2px,rgba(255, 0, 85, .15) 0 2px 4px,rgba(255, 0, 85, .15) 0 4px 8px,rgba(255, 0, 85, .15) 0 8px 16px,rgba(255, 0, 85, .15) 0 16px 32px",
        "color": "white",
        "display": "inline-block",
        "padding": "1.5vh 2vw",
        "marginTop": "2vh",
        "border": "0",
        "fontSize": "1.5vw",
        fontWeight: "bold",
        "&:hover, &:focus": {
            backgroundColor: "#ff006f",
            transition: "1s",
        },
        cursor: "url('cursor-clicker.png'), pointer"
    },
    emailContainer:{
        textAlign: "center"
    }
}));

const Button = props => {
    const classes = useStyles();
    return (
        <div className={classes.emailContainer}>
        <button
            className={classes.button}
            // className={`primaryBtn 
            // ${props.size === 'big' ? "primaryBtn--big" : "primaryBtn--normal"}
            // ${props.icon ? "primaryBtn--grid" : null}
            // ${props.customClass}`}
            onClick={props.handleClick}
        >
            {props.icon && props.icon}
            {props.label}
        </button>
        </div>


    );
}

export default Button;
