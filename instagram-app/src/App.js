import React, {Component} from 'react';
import './App.css';
import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from './authentication/withAuthenticate'


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)
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
       <ComponentFromWithAuthenticate />
        
      </div>
    );
  }
}
