import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ClassNames } from '@emotion/react';

const useStyles = makeStyles((theme) => ({
    p: {
        fontFamily: `Judson, serif`,
        // color: "white",
        fontSize: "2vw",
        textSizeAdjust: "auto",
        textAlign: "center"

    },
    emailContainer:{
        textAlign: "center"
    },
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
        cursor: "url('cursor-clicker.png'), pointer",
        contentAlign: "center"
    }
  }));

const InputField = props => {
    const classes = useStyles();
    //Checks if all the fields are filled and if an @ sign is used in the email field
    const validateInput = values => {

        if (values.some(f => f === "") || values[0].indexOf("@") === -1) {
            return true
        } else {
            return false
        }


    }
    if (props.type === "submit") {
        return (
            <div className={classes.emailContainer}>
            <input
                className={classes.button}
                type='submit'
                value={props.label}
                disabled={validateInput(props.formValues)}
            />
            </div>
        )
    } else if (props.type === "textarea") {
        return (
            <label className={classes.email}>
                {props.label}
                <textarea
                    onChange={(e) => props.onChangeHandler(e.target.value)}
                    placeholder={props.placeholder}
                    value={props.value}
                    required={props.isRequired}
                    className={classes.p}
                    rows={7}
                    name={props.name}
                />
            </label>
        );
    } else {
        return (
            <label className={classes.emailContainer}>
                {props.label}
                <input
                    onChange={(e) => props.onChangeHandler(e.target.value)}
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    required={props.isRequired}
                    className={classes.p}
                    name={props.name}
                />
            </label>
        );
    }


};

export default React.memo(InputField);
