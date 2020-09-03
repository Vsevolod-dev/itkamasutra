import React, {lazy} from 'react';
import './App.css'
import NavBar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from 'react-router-dom';

import UsersContainer from "./components/users/UsersContainer";

import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initialize} from "./components/redux/app-reducer";
import {compose} from "redux";
import Preloader from "./assets/Preloader";
import store from "./components/redux/redux-store";
import Lazy from "./components/hoc/Lazy";

const News = React.lazy(() => import("./components/News/News"))
const Music = React.lazy(() => import("./components/Music/Music"))
const Settings = React.lazy(() => import("./components/Settings/Settings"))

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));


class App extends React.Component<{}> {
    componentDidMount() {
        this.props.initialize()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <NavBar/>

                <div className={'app-wrapper-content'}>
                    <Route path='/profile/:userId?' render={Lazy(ProfileContainer)}/>
                    <Route path='/dialogs' render={Lazy(DialogsContainer)}/>

                    <Route path='/news' render={Lazy(News)}/>
                    <Route path='/music' render={Lazy(Music)}/>
                    <Route path='/settings' render={Lazy(Settings)}/>

                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    isFetching: state.app.isFetching,
})

const AppWithRouter = compose(withRouter, connect(mapStateToProps, {initialize}))(App)


const MainApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppWithRouter/>
        </Provider>
    </BrowserRouter>
}

export default MainApp
