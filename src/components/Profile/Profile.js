import React from 'react'
import './Profile.module.css'
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import AvaInfo from "./AvaInfo/AvaInfo";
import Banner from "./Banner/Banner";


const Profile = (props) =>{
    return(
        <div>
            <Banner/>
            <AvaInfo/>
            <MyPosts postsData = { props.state.postsData }/>
        </div>
    )
}

export default Profile;
