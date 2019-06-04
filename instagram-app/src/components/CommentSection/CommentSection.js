import React from 'react';
import Comment from "./Comment";
import PropTypes from "prop-types";

export default function CommentSection({ comments }) {
    console.log(comments)
    return (
        <div className="comment-container">
            {
                comments.map((comment, index) => {
                    return <Comment
                        key={index}
                        text={comment.text}
                        username={comment.username}
                    />
                })
            }
            <div className="new-comment">
                <form action="">
                    <input type="text" name="newComment" id="new-comment" placeholder="Add a comment...." />
                    {/*<button type="submit">Add Comment</button>*/}
                </form>
            </div>
        </div>
    )
}


CommentSection.propTypes = {
    comments: PropTypes.array.isRequired
}
