import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPost } from '../actions/index';

class PostsShow extends Component {
    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    render() {
        const { post } = this.props;
        if (!post) {
            return <h5>loading...</h5>;
        }
        return (
            <div>
                <h3>title: {post.title}</h3>
                <p>{post.content}</p>
                <p><strong>categories:</strong> {post.categories}</p>
                <Link to="/">Home</Link>
            </div>
            );
    }   
}

function mapStateToProps(state) {
    return {
        post: state.posts.post
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchPost
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);
