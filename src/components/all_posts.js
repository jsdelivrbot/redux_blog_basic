import React, { Component } from 'react';
import { connect } from 'react-redux';

class AllPosts extends Component {
    render() {
        return (
            <div>All Posts</div>
        );
    }

}

export default connect()(AllPosts);
