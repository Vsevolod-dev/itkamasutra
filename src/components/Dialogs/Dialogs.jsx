import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem";
import MessageItem from "./Message/MessageItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../assets/OwnElements/OwnElements";
import {maxLengthCreator, required} from "../../utils/validator/validators";

const maxLength10 = maxLengthCreator(10)

const Dialogs = (props) => {
    let state = props.dialogPage
    const dialogs = state.users.map(d => <DialogItem name={d.name} key={d.id} id={d.id} img={d.avatar}/>)
    const messages = state.messages.map(m => <MessageItem message={m.message} key={m.id} id={m.id}/>)
    const addNewMessage = (values) => props.addMessage(values.newMessageBody)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItem}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                {messages}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>

        </div>
    )
}

const AddMessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newMessageBody'}
                       placeholder={'Enter your message'}
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;