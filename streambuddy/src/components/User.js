import React, {useContext} from 'react';
import {Container} from "@material-ui/core";
import profilePicture from "../assets/profilePic.png"
import {UserContext} from "./UserContext";



function User(props) {
    const {user} = useContext(UserContext);

    let numWatchedMovies = user.watched.length;
    let numWatchlistMovies = user.watchlist.length;
    let numReviews = user.reviews.length;
    // dummy data for follower and following below
    let numFollowers = 5;
    let numFollowing = 7;

    const editButtonClick = () => {
        alert("Implement form to edit user profile!")
    }

    return(
        <Container maxWidth="lg">
            <div className="userDiv">  
                <img className="userImg" src={profilePicture} alt='a user' onClick={() => editButtonClick()}/>
                <div className ="userDetailsDiv">
                    <h1 onClick={() => editButtonClick()}> {props.name} </h1>
                    <span>{numWatchedMovies} watched movies ~ {numWatchlistMovies} watchlist movies ~ {numReviews} reviews ~ {numFollowers} followers ~ {numFollowing} following</span>
                </div>
                
            </div>
        </Container>
    );
}

export default User;