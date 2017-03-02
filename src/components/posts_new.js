import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    onSubmit(props) {
        this.props.createPost(props)
            .then(() => {
                this.context.router.push('/');
            });
    }

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}
            >
                <h3>New Post</h3>
                <label htmlFor="title" >Title</label><br />
                <input id="title" type="text" {...this.props.fields.title} /><br />
                <label htmlFor="content">Content</label><br />
                <textarea id="content" type="text" {...this.props.fields.content} /><br />
                <label htmlFor="categories">Categories</label><br />
                <input id="categories" type="text" {...this.props.fields.categories} /><br />
                <button type="submit">Submit Post</button><br />
                <Link to="/">to cancel</Link>
            </form>);
    }
    
}

export default reduxForm({
    form: 'PostsNew',
    fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);
