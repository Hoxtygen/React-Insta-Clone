import React, {Component} from 'react';
import './App.css';
import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from './authentication/withAuthenticate';
import Login from "./components/Login/Login";
import styled from "styled-components"

const AppHolder = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
`


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login)
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
      <AppHolder>
       <ComponentFromWithAuthenticate />        
      </AppHolder>
    );
  }
}
