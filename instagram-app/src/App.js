import React, {Component} from 'react';
import './App.css';
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from './components/SearchBar/SearchBar';


export default class App extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  handleLikes = (id) => {
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
      <div className="App">
        <div className="search-container">
        <SearchBar />
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
    );
  }
}
