import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components"

const SingleComment = styled.div `
  display: flex;
  padding: 5px;

  h4  {
    font-weight: 600;
  font-size: 1.1rem;
  margin-right: 6px;
  }
`

 function Comment({username, text})   {
  return (
    <SingleComment>
      <h4>{username}</h4>
      <p>{text}</p>
    </SingleComment>
  );
}

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default Comment;