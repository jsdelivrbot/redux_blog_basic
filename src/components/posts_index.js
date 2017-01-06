import React, { Component } from 'react'
import { connect }  from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPosts } from '../actions/index'
import { Link } from 'react-router'

class PostIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts()
    }
    
    render() {
        return (
            <div>
                <Link to="/new" >Add a post</Link>
            <div>List of posts</div>
            </div>
        )
    }    
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchPosts: fetchPosts
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(PostIndex)