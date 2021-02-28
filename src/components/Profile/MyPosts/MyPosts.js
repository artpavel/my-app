import React from 'react';
import Post from "./Post/Post";
import FieldInput from "./FieldInput/FieldInput";




const MyPosts = (props) => {

    let postsElements =
        props.postsData.map( p => <Post message={p.post}/>)

    return (
        <div>
            <FieldInput addPost = { props.addPost }
                        newPostText = { props.newPostText }
                        updateNewPostText = { props.updateNewPostText }/>
            { postsElements }
        </div>
    )
}

export default MyPosts;