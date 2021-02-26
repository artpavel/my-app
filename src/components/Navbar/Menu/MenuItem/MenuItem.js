import React from 'react';
import s from './MenuItem.module.css'
import {NavLink} from "react-router-dom";

const MenuItem = (props) =>{

    return(
        <p className={`${s.item}`}><NavLink to={ props.path } activeClassName={s.activeLink}>
            { props.text }
        </NavLink></p>
    )
}

export default MenuItem