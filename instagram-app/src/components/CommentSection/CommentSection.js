import React from 'react';
import Comment from "./Comment";
import PropTypes from "prop-types";

export default function CommentSection({comments}) {
    return (
        <div>
            {
                comments.map((comment, index) => {
                    return <Comment 
                        key = {index}
                        text = {comment.text}
                        username = {comment.username}
                    />
                }) 
            }
        </div>
    )
}


CommentSection.propTypes = {
    comments: PropTypes.array.isRequired
}
