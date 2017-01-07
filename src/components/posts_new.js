import React, { Component } from 'react'
import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import { createPost } from '../actions/index'


class PostsNew extends Component {
    render() {
        return (
            <form 
                onSubmit={this.props.handleSubmit(this.props.createPost)} >
                <h3>New Post</h3>
                <label>Title</label><br/>
                <input type="text" {...this.props.fields.title} /><br/>
                <label>Categories</label><br/>
                <input type="text" {...this.props.fields.categories} /><br/>
                <label>Content</label><br/>
                <textarea {...this.props.fields.content} /><br/>
                <button type="submit">Add Post</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'PostsNew',
    fields: ['title', 'categories', 'content']
    
}, null, {createPost: createPost })(PostsNew)