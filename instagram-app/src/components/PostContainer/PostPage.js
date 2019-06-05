import React, {Component} from 'react';
import dummyData from "../../dummy-data"
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar"


export default class PostPage extends Component {
    constructor(props)  {
        super(props);
        this.state = {
          data: [],
          searchInput: ""
        }
      }

      componentDidMount() {
        localStorage.setItem("postsData", JSON.stringify(dummyData))
        localStorage.getItem("postsData") && this.setState ({
          data: JSON.parse(localStorage.getItem("postsData"))
        }) 
      }
      
      
      handleSearch = event => {
        this.setState({
          searchInput: event.target.value
        })
      }
    
      handlePostFilter = event => {
        event.preventDefault()
        if (this.state.searchInput.trim()) {
          this.setState(prevState =>({
            data: prevState.data.filter(dataItem => dataItem.username.toLowerCase().includes(prevState.searchInput.toLowerCase()))
          }));
        }
      }
    
      handleLikes = id => {
        const newData = [...this.state.data]
        newData.forEach((data, index) => {
          if(data.id === id)  {
            data.likes += 1;
          }
        })
        this.setState({
          data: newData
        })
      }

    render() {
        const { data } = this.state;
        return (
            <div>
                <div className="search-container">
        <SearchBar
          handleSearch = {this.handleSearch}
          handlePostFilter = {this.handlePostFilter}
         />
        </div>
        <div className="post-wrapper">
        {
          data.map((item) => {
          return <PostContainer
                    id = {item.id}
                    key = {item.id}
                    data = { item}
                    handleLikes = {this.handleLikes}
                  />
          })
        }
        </div>
            </div>
        )
    }
}
