import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPost, deletePost } from '../actions/index';

class PostsShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    deleter() {
        this.props.deletePost(this.props.params.id)
            .then(() => this.context.router.push('/'));
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
                <button onClick={this.deleter.bind(this)}>Delete Post</button><br />
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
        fetchPost,
        deletePost
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);
