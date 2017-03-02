import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return this.props.posts.map((post) => {
            return (
                <li key={post.id}>
                    <h4>Title: {post.title}</h4>
                    <p><strong>Categories:</strong> {post.categories}</p>
                    <Link to={(`posts/${post.id}`)} >View Post</Link> <br/>
                    <Link to="posts/new" >create new post</Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <h6>All the posts</h6>
                <ul>
                    { this.renderPosts() }
                </ul>
            </div>);
    }
    
}

function mapStateToProps(state) {
    return {
        posts: state.posts.all
    };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
