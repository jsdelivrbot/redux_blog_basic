import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions/index'
import { Link } from 'react-router'

class ShowPosts extends Component {
    componentWillMount(){
        this.props.fetchPost(this.props.params.id)
    }
    
    render() {
        const { post } = this.props

        if(!this.props.post) {
            return <div>Loading...</div>
        }

        return (
        <div>
            <h3>Title: {post.title}</h3>
            <p>{post.content}</p>
            <hr/>
            <p>Categories: {post.categories}</p>
            <Link to="/" >Home</Link>
        </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        post: state.posts.post
    }
}

export default connect(mapStateToProps, {fetchPost})(ShowPosts)