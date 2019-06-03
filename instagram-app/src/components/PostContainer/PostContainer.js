import React, { Fragment } from 'react';
//import Comment from "../CommentSection/Comment";
import PropTypes from "prop-types"
import CommentSection from '../CommentSection/CommentSection';

function PostContainer({data}) {
    console.log(data)
    //console.log(username)
    return (
        <Fragment>
          {
              data.map((user) => {
                  return <div className = "single" key = {user.username}>
                      <div className="profile">
                          <div className="image-container-thumbnail">
                      <img src= {user.thumbnailUrl} alt=""/>
                          </div>
                      <p>{user.username}</p>
                      </div>
                      <div className="image-likes">
                          <div className="image-container">
                              <img src= {user.imageUrl} alt=""/>
                          </div>
                          <div className="likes">
                              <span><i className="fa fa-heart"></i></span>
                              <span><i className="fa fa-comment"></i></span>
                              <p className="likes">{user.likes}</p>
                          </div>
                      </div>
                      <CommentSection
                      comments = {user.comments} 
                      />
                  </div>
                  
              })
          }
        </Fragment>
    )
}

PostContainer.propTypes = {
    data: PropTypes.array.isRequired
  }


export default PostContainer;