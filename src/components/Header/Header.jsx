import React from "react";
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (<header className={classes.header}>
        <img src={'https://im0-tub-ru.yandex.net/i?id=3ccc488523683f3a0f409f7acdf4e4b7&n=13'}
             alt={""}/>
        <div className={classes.loginBlock}>
            {props.isAuth
                ? <div>
                    {props.userName}
                    <div onClick={props.logout} className={classes.out}>Logout</div>
                </div>
                :<NavLink to={'/login'}>Login</NavLink>}

        </div>
    </header>);
}

export default Header;