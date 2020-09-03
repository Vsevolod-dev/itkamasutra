import React from 'react';
import {follow, getUsersAPI} from '../redux/users-reducer';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from "../../assets/Preloader";
import {compose} from "redux";
import { getUsersSuperSelector, getPageSize, getCountOfUsers, getCurrentPage, getIsFetching, getIsDisabled,} from "../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersAPI(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = pageNumber => {
        this.props.getUsersAPI(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            <Preloader isFetching={this.props.isFetching}/>
            <Users {...this.props} onPageChanged={this.onPageChanged} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        usersPage: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        countOfUsers: getCountOfUsers(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isDisabled: getIsDisabled(state),
    }
}

export default compose(connect(mapStateToProps, {getUsersAPI, follow}))(UsersContainer);