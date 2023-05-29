import React from "react";
import classes  from "./Validation.module.css";



const ValidationErrorMessage = (props) => {
    return (
        <>
            {props.touched && <p className={classes.errorMessage}>{ props.message}</p>}
        </>
    )
}

export default ValidationErrorMessage;