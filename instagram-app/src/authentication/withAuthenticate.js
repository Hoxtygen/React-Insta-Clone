import React, { Component } from 'react'

const withAuthenticate = PassedComponent => 
    class  extends Component {
    render() {
        return (
           <PassedComponent />
        )
    }
}


export default withAuthenticate;