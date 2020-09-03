import React from "react";
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img
                src={'https://avatars.mds.yandex.net/get-pdb/1907868/518c05e0-80a3-4b75-a263-3f5746c8cf4d/s1200?webp=false'}
                alt={'cartoon'}
            />
            {props.message}
            <div>
                <span>
                    {props.like} like
                </span>
            </div>
        </div>
    )
}

export default Post;
