import React from 'react'
import "./search.css"

export default function SearchBar() {
    return (
        <div className = "header">
            <div className = "insta-logo-container">
                <p><span><i className="fab fa-instagram icon"></i></span></p>
                <p><span className = "pipe">&#124;</span></p>
                <h2>Instagram</h2>
            </div>
            <div className = "search-box-wrapper">
                <input type="text" name="" id="" placeholder = "&#x1F50E;Search"/>
            </div>
            <div className = "right-container">
                <p><span><i className="far fa-compass"></i></span></p>
                <p><span><i className="far fa-heart"></i></span></p>
                <p><span><i className="far fa-user"></i></span></p>
            </div>
        </div>
    )
}
