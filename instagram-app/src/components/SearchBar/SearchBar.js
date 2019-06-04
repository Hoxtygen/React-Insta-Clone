import React from 'react'
import "./search.css"

export default function SearchBar({handleSearch, handlePostFilter}) {
    return (
        <div className = "header">
            <div className = "insta-logo-container">
                <p><span><i className="fab fa-instagram icon"></i></span></p>
                <p><span className = "pipe">&#124;</span></p>
                <h2>Instagram</h2>
            </div>
            <div className = "search-box-wrapper">
                <form action="" onSubmit = {handlePostFilter}>
                    <input 
                        type="text" 
                        name="" 
                        placeholder = "&#x1F50E;Search"
                        onChange = {handleSearch}
                    />
                </form>
            </div>
            <div className = "right-container">
                <p><span><i className="far fa-compass"></i></span></p>
                <p><span><i className="far fa-heart"></i></span></p>
                <p><span><i className="far fa-user"></i></span></p>
            </div>
        </div>
    )
}
