import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../../assets/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.profile}>
                {/*<img*/}
                {/*    src="https://avatars.mds.yandex.net/get-pdb/2186514/72a5f745-2884-48c6-805c-c4bbe73ff728/s1200?webp=false"*/}
                {/*    alt=""/>*/}
            </div>
            <div className={classes.description}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large:'https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg'} alt=""/>
                <div>{props.profile.fullName}</div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;
