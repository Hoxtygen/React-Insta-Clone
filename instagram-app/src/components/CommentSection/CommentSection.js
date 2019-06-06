import React, {Component} from 'react';
import Comment from "./Comment";
import PropTypes from "prop-types";

export default class CommentSection extends Component{
    //console.log(comments)
    constructor(props)   {
        super(props);
        this.state  = {
            comments: this.props,
            text: "",
            index: "",
        }
    }

    handleChange = (event) => {
        //console.log(event.target.value)
        this.setState({
            text: event.target.value,
            index: event.target.value
        })
    }

    addNewComment = (event, index) => {
        event.preventDefault();
        const newComment = {
            index: 5,
            text: this.state.text,
            username: "Maduro"
        }
        const commentList = this.props.comments.push(newComment); //[ ...this.props.comment, newComment ]
        if (this.state.text === "") {
            return;
        }
        this.setState({
            comments: commentList,
            text: " ",
            index: "",
            value: ""
        })
       
        
    }




    render ()   {
        //console.log(this.state.comments)
        const { comments } = this.props;
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
                    <form action="" onSubmit = {this.addNewComment}>
                        <input
                        type="text"
                        name="newComment"
                        id="new-comment"
                        placeholder="Add a comment...."
                        onChange = {this.handleChange}
                        value ={this.state.text}
                    />
                        {/*<button type="submit">Add Comment</button>*/}
                    </form>
                </div>
            </div>
        )
    }

}


CommentSection.propTypes = {
    comments: PropTypes.array.isRequired
}
