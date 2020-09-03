import React, {useEffect, useState} from "react";
//import Preloader from "../../../assets/Preloader";

const ProfileStatusWithHooks = props => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            {editMode
                ? <div>
                    <input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deactivateEditMode}
                           value={status}
                    />
                </div>
                : <div>
                    <span onDoubleClick={activateEditMode}>{props.status ? props.status : "-----"}</span>
                </div>
            }
        </>
    );

}

export default ProfileStatusWithHooks