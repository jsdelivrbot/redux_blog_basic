import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import { createPost } from '../actions/index'


class PostsNew extends Component {
   static contextTypes = {
       router: PropTypes.object
   }

   onSubmit(props) {
       this.props.createPost(props)
        .then(() => {
            //once promise is fullfilled navigates user to '/'
            this.context.router.push('/')
        })
   }
    
    render() {
        const { fields: { title, categories, content } } = this.props

        return (
            <form 
                onSubmit={ this.props.handleSubmit(this.onSubmit.bind(this)) } >
                <h3>New Post</h3>
                <label>Title</label><br/>
                <input type="text" {...this.props.fields.title} />
                <div style={{color: "red"}}>{ title.touched ? title.error : '' }</div><br/>
                <label>Categories</label><br/>
                <input type="text" {...this.props.fields.categories} /><br/>
                <div style={{color: "red"}}>{ categories.touched ? categories.error: ''}</div><br/>
                <label>Content</label><br/>
                <textarea {...this.props.fields.content} /><br/>
                <div style={{color: "red"}}>{ content.touched ? content.error: ''}</div><br/>
                <button type="submit">Add Post</button><br/>
                <Link to="/">Cancel</Link>
            </form>
        )
    }
}

function validate(values){
    const errors = {}

    if(!values.title){
        errors.title = "Enter a title"
    }
    if(!values.categories){
        errors.categories = "Enter a category"
    }
    if(!values.content) {
        errors.content = "Blog post cannot be empty"
    } 

    return errors
}

export default reduxForm({
    form: 'PostsNew',
    fields: ['title', 'categories', 'content'],
    validate: validate
    
}, null, {createPost: createPost })(PostsNew)