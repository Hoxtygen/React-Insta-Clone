import React from "react";
import PropTypes from "prop-types";

 function Comment({username, text})   {
  return (
    <div className = "single-comment">
      <h4>{username}</h4>
      <p>{text}</p>
    </div>
  );
}

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default Comment;