import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
    render() {
        console.log(this.props.state)
        return (         
            <div>
            App is Here
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        state: state
    }
} 

export default connect(mapStateToProps)(App)