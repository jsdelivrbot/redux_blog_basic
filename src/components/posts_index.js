import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        console.log(this.props.posts);
        return <div>All the posts</div>;
    }
    
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
