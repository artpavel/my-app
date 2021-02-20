import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import FieldInput from "./FieldInput/FieldInput";


const MyPosts = () => {
    return (
        <div>
            <FieldInput/>
            <Post/>
            <Post/>
        </div>
    )
}

export default MyPosts;