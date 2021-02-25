import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (

            <div className="app-wrapper">
                <Header state = { props.state.img }/>
                <Navbar state = { props.state.sidebar } />
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() =>
                        <Dialogs state = { props.state.dialogPage } />}/>
                    <Route path='/profile' render={() =>
                        <Profile state = { props.state.profilePage }/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>

    );
}
export default App;

