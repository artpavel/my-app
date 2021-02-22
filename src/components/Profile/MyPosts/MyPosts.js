import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import FieldInput from "./FieldInput/FieldInput";


const MyPosts = () => {
    return (
        <div>
            <FieldInput/>
            <Post message='Hi, how are you?'/>
            <Post message="It's my first post"/>
        </div>
    )
}

export default MyPosts;