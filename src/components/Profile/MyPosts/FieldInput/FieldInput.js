import React from 'react';
import './FieldInput.module.css';
import s from './FieldInput.module.css';



const FieldInput = () =>{
    return(
        <div className={s.field}>
            <h3>My posts</h3>
            <div>
                <textarea placeholder="your news..."></textarea>
                <button className={s.btn}>Send</button>
            </div>
        </div>
    )
}

export default FieldInput;