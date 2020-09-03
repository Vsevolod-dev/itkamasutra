import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Users.module.css'

const User = ({user, isDisabled, follow}) => {
    return (
        <div key={user.id}>
            <span>
                <div className={classes.size}>
                    <NavLink to={`/profile/${user.id}`}><img
                        src={user.photos.small != null ? user.photos.small : 'https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg'}
                        alt={''}
                    /></NavLink>
                </div>
                <div>
                    <button
                        disabled={isDisabled.some(id => id === user.id)}
                        onClick={() => follow(user.followed, user.id)}
                    >{user.followed ? "unfollow" : "follow"}</button>
                </div>
            </span>
            <span>
                <span>
                    <div> {user.name} </div>
                    <div> {user.status} </div>
                </span>
                <span>
                    <div> {"user.location.country"} </div>
                    <div> {"user.location.city"} </div>
                </span>
            </span>
        </div>
    )
}

export default User