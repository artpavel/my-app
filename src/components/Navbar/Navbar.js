import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Display from "./Display/Display";


const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <p className={`${s.item}`}><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></p>
            <p className={`${s.item}`}><NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink></p>
            <p className={`${s.item}`}><NavLink to="/news" activeClassName={s.activeLink}>News</NavLink></p>
            <p className={`${s.item}`}><NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink></p>
            <p className={`${s.item}`}><NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink></p>

            <Display displaysNav = { props.state.displaysNav }/>
        </nav>
    )
}

export default Navbar;