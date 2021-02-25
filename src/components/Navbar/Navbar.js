import React from 'react';
import s from './Navbar.module.css'
import Display from "./Display/Display";
import Menu from "./Menu/Menu";



const Navbar = (props) => {

    return (
        <nav className={s.nav}>

            <Menu menuNav = { props.state.menusNav }/>

            <Display displaysNav = { props.state.displaysNav }/>

        </nav>
    )
}

export default Navbar;