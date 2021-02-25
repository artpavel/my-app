import React from 'react';
import MenuItem from "./MenuItem/MenuItem";


const Menu = (props) => {

    let menus = props.menuNav.map(
        item => <MenuItem path = { item.path } text = { item.text } />
    )

    return(
        <div>
            { menus }
        </div>
    )
}

export default Menu