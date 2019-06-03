import React from 'react'
import "./search.css"

export default function SearchBar() {
    return (
        <div className = "search-bar-container">
            <div className = "insta-logo-container">
                <p><span><i className="fa fa-instagram"></i></span></p> |
                <h2>Instagram</h2>
            </div>
            <div className = "search-box-wrapper">
                <input type="text" name="" id="" placeholder = "&#x1F50E;Search"/>
            </div>
            <div className = "right-container">
                <p><span><i className="fa fa-compass"></i></span></p>
                <p><span><i className="fa fa-heart"></i></span></p>
                <p><span><i className="fa fa-user"></i></span></p>
            </div>
        </div>
    )
}
