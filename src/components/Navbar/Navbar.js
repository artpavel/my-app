import React from 'react';
import s from './Navbar.module.css'


const Navbar = () => {
    return(
        <nav className={s.nav}>
            <p ><a href="#" className={`${s.item} ${s.active}`}>Profile</a></p>
            <p ><a href="#" className={s.item}>Messages</a></p>
            <p ><a href="#" className={s.item}>News</a></p>
            <p ><a href="#" className={s.item}>Music</a></p>
            <p ><a href="#" className={s.item}>Settings</a></p>
        </nav>
    )
}

export default Navbar;