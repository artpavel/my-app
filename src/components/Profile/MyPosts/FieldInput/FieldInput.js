import React from 'react';
import './FieldInput.module.css';
import s from './FieldInput.module.css';



const FieldInput = (props) =>{

    let newPostElement = React.createRef();



    let addPost = () =>{
        debugger;
        let text = newPostElement.current.value;
        props.addPost(text)
    }

    return(
        <div className={s.field}>
            <h3>My posts</h3>
            <div>
                <textarea placeholder="your news..." ref = { newPostElement }> </textarea>
                <button className={s.btn} onClick = { addPost }>Send</button>
            </div>
        </div>
    )
}

export default FieldInput;