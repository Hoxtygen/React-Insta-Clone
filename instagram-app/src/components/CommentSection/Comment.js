import React, { Fragment } from "react";

export default function Comment({comments})   {
  console.log(comments)
  return (
    <Fragment>
      {
        comments.map((comment, index) => {
          return <div key ={index}>
            <p>{comment.username}</p> <span className="comment">{comment.text}</span>
          </div>
        })
      }
    </Fragment>
  );
}
