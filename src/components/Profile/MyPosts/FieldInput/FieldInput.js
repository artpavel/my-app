import React from 'react';
import './FieldInput.module.css';
import s from './FieldInput.module.css';


const FieldInput = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {

        props.addPost()
        props.updateNewPostText(' ');
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.field}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} placeholder="your news..."
                          ref={newPostElement} value={props.newPostText}/>
                <button className={s.btn} onClick={addPost}>Send</button>
            </div>
        </div>
    )
}

export default FieldInput;