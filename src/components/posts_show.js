import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPost, deletePost } from '../actions/index'
import { Link } from 'react-router'

class ShowPosts extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    componentWillMount(){
        this.props.fetchPost(this.props.params.id)
    }
    
    deleter() {
        console.log(this.props.deletePost)
        this.props.deletePost(this.props.params.id)
                  .then(() => {
                      this.context.router.push("/")
                  })
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
            <button onClick={this.deleter.bind(this)} >Delete Post</button>
            <br/><Link to="/" >Home</Link>
        </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        post: state.posts.post
    }
}

export default connect(mapStateToProps, 
{fetchPost, deletePost})(ShowPosts)