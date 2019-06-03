import React from 'react';
import PropTypes from "prop-types"
import CommentSection from '../CommentSection/CommentSection';

function PostContainer({data}) {
    console.log(data)
    //console.log(username)
    return (
        <div className = "single" key = {data.username}>
        <div className="profile">
            <div className="image-container-thumbnail">
        <img src= {data.thumbnailUrl} alt=""/>
            </div>
        <p>{data.username}</p>
        </div>
        <div className="image-likes">
            <div className="image-container">
                <img src= {data.imageUrl} alt=""/>
            </div>
            <div className="likes">
                <span><i className="far fa-heart"></i></span>
                <span><i className="far fa-comment"></i></span>
                <p className="likes">{data.likes}</p>
            </div>
        </div>
        <CommentSection
        comments = {data.comments} 
        />
    </div>
    )
}

PostContainer.propTypes = {
    data: PropTypes.object.isRequired
  }


export default PostContainer;
