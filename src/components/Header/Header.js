import React from 'react';
import './Header.module.css';
import classes from './Header.module.css'
import logo from '../../logo192.png'


const Header = (props) =>{

    return(
        <header className={classes.header}>

            <a href="">
                <img
                    src= { logo }
                    alt="logo"/>
            </a>
        </header>
    )
}

export default Header;