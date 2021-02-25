import React from 'react';
import './Header.module.css';
import classes from './Header.module.css'


const Header = (props) =>{


    return(
        <header className={classes.header}>
            <a href="">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OJW0KUrh-3T2TBQt94N960-yusz__8TjkA&usqp=CAU"
                    alt="logo"/>
            </a>
        </header>
    )
}

export default Header;