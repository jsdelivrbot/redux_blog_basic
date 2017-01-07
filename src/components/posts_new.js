import React, { Component } from 'react'
import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import { createPost } from '../actions/index'


class PostsNew extends Component {
   
    
    render() {
        const { fields: { title, categories, content } } = this.props

        return (
            <form 
                onSubmit={this.props.handleSubmit(this.props.createPost)} >
                <h3>New Post</h3>
                <label>Title</label><br/>
                <input type="text" {...this.props.fields.title} />
                <div>{ title.error }</div><br/>
                <label>Categories</label><br/>
                <input type="text" {...this.props.fields.categories} /><br/>
                <label>Content</label><br/>
                <textarea {...this.props.fields.content} /><br/>
                <button type="submit">Add Post</button>
            </form>
        )
    }
}

function validate(values){
    const errors = {}

    if(!values.title){
        errors.title = "Enter a title"
    }

    return errors
}

export default reduxForm({
    form: 'PostsNew',
    fields: ['title', 'categories', 'content'],
    validate: validate
    
}, null, {createPost: createPost })(PostsNew)