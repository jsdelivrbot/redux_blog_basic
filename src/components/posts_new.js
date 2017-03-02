import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
    render() {
        return <div>create a new posts</div>;
    }
    
}

export default reduxForm({
    form: 'PostsNew',
    fields: ['title']
})(PostsNew);
