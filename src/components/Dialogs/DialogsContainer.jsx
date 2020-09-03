import {addMessageActionCreator} from "../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody))
        },
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)