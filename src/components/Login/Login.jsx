import React from "react";
import {reduxForm} from "redux-form";
import {Input, CreateField} from "../../assets/OwnElements/OwnElements";
import {maxLengthCreator, required} from "../../utils/validator/validators";
import {connect} from "react-redux";
import {login, logout} from "../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import classes from './../../assets/OwnElements/OwnElements.module.css'

const maxLength10 = maxLengthCreator(30)

// VsevolodK
// Talk8840&System&

const Login = ({login, isAuth}) => {

    const Login = formData => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if(isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={Login}/>
        </div>
    );
}

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField(Input, 'email', 'Email', {},[required, maxLength10], 'VsevolodK')}
            {CreateField(Input, 'password', 'Password', 'password', [required, maxLength10])}
            {CreateField('input', 'rememberMe', {}, 'checkbox', {}, 'remember me')}
            <div>
                <button>Submit</button>
            </div>
            {error && <div className={classes.error}>{error}</div>}
        </form>
);
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, logout})(Login);
