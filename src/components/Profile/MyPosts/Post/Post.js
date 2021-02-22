import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt86sQ9Ya33SIwiA1tc4FGlpq1jqhimI_XVw&usqp=CAU"
                alt=""/>
            {props.message}
        </div>
    )
}

export default Post;