import React, {Component} from 'react';
import './App.css';
import PostPage from "./components/PostContainer/PostPage";


export default class App extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      data: [],
      searchInput: ""
    }
  }
  

  render() {
    return (
      <div className="App">
       <PostPage />
        
      </div>
    );
  }
}
