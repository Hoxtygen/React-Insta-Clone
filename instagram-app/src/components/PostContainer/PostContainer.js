import React from 'react';
import PropTypes from "prop-types"
import CommentSection from '../CommentSection/CommentSection';

function PostContainer({ data, handleLikes, id }) {
    return (
        <div className="single" >
            <div className="profile">
                <div className="image-container-thumbnail">
                    <img src={data.thumbnailUrl} alt="" />
                </div>
                <h4>{data.username}</h4>
            </div>
            <div className="image-likes">
                <div className="image-container">
                    <img src={data.imageUrl} alt="" />
                </div>
                <div className="likes">
                    <span onClick = {() =>handleLikes(id)}><i className="far fa-heart icon"></i></span>
                    <span><i className="far fa-comment"></i></span>
                    <p className="p-likes">{data.likes} likes</p>
                </div>
            </div>
            <CommentSection
                comments={data.comments}
            />
        </div>
    )
}

PostContainer.propTypes = {
    data: PropTypes.object.isRequired
}


export default PostContainer;
