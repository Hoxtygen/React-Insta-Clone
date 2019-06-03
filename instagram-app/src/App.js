import React, {Component} from 'react';
import './App.css';
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from './components/SearchBar/SearchBar';


export default class App extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      data: dummyData
    }
  }
  render() {
    //console.log(this.state.data);
    const { data } = this.state;
    return (
      <div className="App">
        <div className="search-container">
        <SearchBar />
        </div>
        <div className="post-wrapper">
        <PostContainer
            data = { this.state.data}
           />
        </div>
        
      </div>
    );
  }
}
