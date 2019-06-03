import React, { Fragment } from 'react';
import Comment from "../CommentSection/Comment"

export default function PostContainer({data}) {
    console.log(data)
    //console.log(username)
    return (
        <Fragment>
           <h2>Hello world</h2>
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
                      <Comment
                      comments = {user.comments} 
                      />
                  </div>
                  
              })
          }
        </Fragment>
    )
}
