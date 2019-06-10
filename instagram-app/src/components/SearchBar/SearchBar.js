import React from 'react'
import styled from "styled-components";

const Header = styled.div `
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem .5rem;
    margin-bottom: 10px;
`

const LogoImage = styled.div `
    background-image: yellow;
    background-image: url('https://res.cloudinary.com/dh3jxarvg/image/upload/v1559825627/header.jpg');
    background-size: cover;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center center;
`

const LogoHeader = styled.div `
      display: flex;
      /* width: 10rem; */
      justify-content: space-between;
      align-items: center;

      .icon     {
        font-size: 2.3rem;
      display: inline-block;
      margin-right: 5px;
      }

      h2    {
        @import url('https://fonts.googleapis.com/css?family=Rochester&display=swap');
        font-family: Rochester;
        font-size: 2rem;
      }

      span.pipe    {
        display: block;
        height: 25px;
        font-weight: 700;
        width: 5px;
        color: black;
      }
`

const SearchBox = styled.div `

    input   {
      width: 100%;
      height: 20px;
      line-height: 20px;
      outline: none;
      padding: 8px;
      font-size: 1.2rem;
      width: 17rem;
    }
`

const RightContainer  = styled.div `
    display: flex;
    padding: 5px;
    justify-content: space-between;

    span {
    display: inline-block;
      width: 50px;
      font-size: 1.3rem;
      color: #222;
      text-align: center;
    }

`

export default function SearchBar({handleSearch, handlePostFilter}) {
    return (
        <LogoImage>
        <Header>
            
            <LogoHeader>
                <p><span><i className="fab fa-instagram icon"></i></span></p>
                <p><span className = "pipe">&#124;</span></p>
                <h2>Instagram</h2>
            </LogoHeader>
            <SearchBox>
                <form action="" onSubmit = {handlePostFilter}>
                    <input 
                        type="text" 
                        name="" 
                        placeholder = "&#x1F50E;Search"
                        onChange = {handleSearch}
                    />
                </form>
            </SearchBox>
            <RightContainer>
                <p><span><i className="far fa-compass"></i></span></p>
                <p><span><i className="far fa-heart"></i></span></p>
                <p><span><i className="far fa-user"></i></span></p>
            </RightContainer>
        </Header>
        </LogoImage>
    )
}
