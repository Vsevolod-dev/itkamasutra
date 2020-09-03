import React from "react";
import classes from "../../assets/OwnElements/OwnElements.module.css";

const Element = Element => ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <Element {...input} {...props} />
            {hasError && <span> {error} </span>}
        </div>
    );
};

export default Element