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
        const { fields: { title, content, categories } } = this.props;
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}
            >
                <h3>New Post</h3>
                <label htmlFor="title" >Title</label><br />
                <div style={{ color: 'red' }}>{ title.touched ? title.error : '' }</div>
                <input id="title" type="text" {...this.props.fields.title} /><br />
                <label htmlFor="content">Content</label><br />
                <div style={{ color: 'red' }}>{content.touched ? content.error : ''}</div>
                <textarea id="content" type="text" {...this.props.fields.content} /><br />
                <label htmlFor="categories">Categories</label><br />
                <div style={{color: 'red'}}>{categories.touched ? categories.error : ''}</div>
                <input id="categories" type="text" {...this.props.fields.categories} /><br />
                <button type="submit">Submit Post</button><br />
                <Link to="/">to cancel</Link>
            </form>);
    }
    
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a title';
    }

    if (!values.content) {
        errors.content = 'Post cannot be blank';
    }

    if (!values.categories) {
        errors.categories = 'Post must have at least one category';
    }


    return errors;
}

export default reduxForm({
    form: 'PostsNew',
    fields: ['title', 'categories', 'content'],
    validate
}, null, { createPost })(PostsNew);
