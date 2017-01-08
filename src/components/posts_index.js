import React, { Component } from 'react'
import { connect }  from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPosts } from '../actions/index'
import { Link } from 'react-router'

class PostIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts()
    }
    
    renderPosts() {
        console.log(this.props.posts)
        return this.props.posts.map( (post) => {
            return (<li>test
                    </li>)
        })
    }

    render() {
        return (
            <div>
                <Link to="/new" >Add a post</Link>
            <h3>List of posts</h3>
                <ul>
                    { this.renderPosts() }
                </ul>
            </div>
        )
    }    
}

function mapStateToProps(state) {
    return {
        posts: state.posts.all
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchPosts: fetchPosts
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex)