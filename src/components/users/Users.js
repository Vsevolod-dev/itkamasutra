import React from "react";
import Paginator from "../../assets/Paginator/Paginator";
import User from "./User";

const Users = ({countOfUsers, pageSize, onPageChanged, usersPage, currentPage, isDisabled, follow}) => {
    return <div>
        <Paginator
            countOfUsers={countOfUsers}
            pageSize={pageSize}
            onPageChanged={onPageChanged}
            currentPage={currentPage}
        />
        {usersPage.map(u => <User
            user={u}
            isDisabled={isDisabled}
            follow={follow}
        />)}
    </div>
}

export default Users