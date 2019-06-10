import React from 'react';
import PropTypes from "prop-types"
import CommentSection from '../CommentSection/CommentSection';
import styled from "styled-components";


const SinglePost =styled.div `
    border: 1px solid #ccc;
    width: 40%;
    margin: 0 auto;
    margin-bottom: 10px;
`

const UserThumbnail = styled.div `
    display: flex;
    align-items: center;
    margin-right: 10px;

    img     {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        
    }
`

const Profile = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
`

const Username = styled.h4 `
    font-weight: 700;
`

const ImageContainer = styled.div `

img{
    width: 100%;
    height: auto;
}
`
const LikesContainer = styled.div `
    display: flex;
  flex-direction: column;

  div   {
      padding: 5px;
  }

  p     {
    font-weight: 600;
  }

  span {
    display: inline-block;
    padding: 5px;
    font-size: 1.5rem;
    cursor: pointer;
  }
`



function PostContainer({ data, handleLikes, id }) {
    return (
        <SinglePost >
            <Profile>
                <UserThumbnail>
                    <img src={data.thumbnailUrl} alt="profile pix" />
                </UserThumbnail>
                <Username>{data.username}</Username>
            </Profile>
            <LikesContainer>
                <ImageContainer>
                    <img src={data.imageUrl} alt="" />
                </ImageContainer>
                <div>
                    <span onClick = {() =>handleLikes(id)}><i className="far fa-heart icon"></i></span>
                    <span><i className="far fa-comment"></i></span>
                    <p className="p-likes">{data.likes} likes</p>
                </div>
            </LikesContainer>
            <CommentSection
                comments={data.comments}
            />
        </SinglePost>
    )
}

PostContainer.propTypes = {
    data: PropTypes.object.isRequired
}


export default PostContainer;
