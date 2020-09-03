import React from "react";
//import classes from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = props => {
    return (
        <div>
            <NavLink to={'/dialogs/' + props.id}>
                <img src={props.img} alt={'cartoon'}/>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;