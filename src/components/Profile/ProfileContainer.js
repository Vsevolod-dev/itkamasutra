import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../redux/profile-reducer";
import Preloader from "../../assets/Preloader";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.userId
            if (!userId) this.props.history.push('/login')
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <div>
            <Preloader isFetching={this.props.isFetching}/>
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.userId,
    }
}

export default compose(connect(mapStateToProps, {getProfile, updateStatus, getStatus}), withRouter, withAuthRedirect)(ProfileContainer)
