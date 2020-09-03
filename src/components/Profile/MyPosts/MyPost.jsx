import React from "react";
import classes from './MyPost.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validator/validators";
import {Textarea} from "../../../assets/OwnElements/OwnElements";

const maxLength10 = maxLengthCreator(300)

class MyPost extends React.PureComponent {

    render() {
        console.log('render')
        let state = this.props.profilePage
        const messages = state.posts.map(m => <Post message={m.message} key={m.id} like={m.like}/>)

        const addPost = (values) => this.props.addPost(values.newPostBody)

        return <div className={classes.pad}>
            <h3>MyPost</h3>
            <AddMyPostFormRedux onSubmit={addPost}/>
            <div>
                {messages}
            </div>
        </div>
    }
}

const AddMyPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newPostBody'}
                       placeholder={'Enter your post'}
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const AddMyPostFormRedux = reduxForm({form: "profileAddMyPostForm"})(AddMyPostForm)

export default MyPost;
