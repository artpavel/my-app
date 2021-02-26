import React from 'react';
import Post from "./Post/Post";
import FieldInput from "./FieldInput/FieldInput";




const MyPosts = (props) => {

    let postsElements =
        props.postsData.map( p => <Post message={p.post}/>)

    return (
        <div>
            <FieldInput addPost = { props.addPost }/>
            {postsElements}
        </div>
    )
}

export default MyPosts;