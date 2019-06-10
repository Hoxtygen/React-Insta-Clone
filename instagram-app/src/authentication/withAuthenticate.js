import React, { Component } from 'react'

const withAuthenticate = PassedComponent => AnotherPassedComponent =>
    class  extends Component {
        state = {
            loggedIn: false
        }
        componentDidMount() {
            if (!localStorage.getItem("user")) {
                this.setState({
                    loggedIn:false
                })
            } else {
                this.setState({ loggedIn: true });
            }
          }
        

    render() {
        if (this.state.loggedIn) return <PassedComponent />;
        return  <AnotherPassedComponent />
    }
}


export default withAuthenticate;

/**
 * 
 * 
 * if (this.state.loggedIn) return <PostsPage />;
      return <LoginPage />;
 */