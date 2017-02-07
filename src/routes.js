import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import AllPosts from './components/all_posts';
import ShowPost from './components/show_post';
import NewPost from './components/new_post';
import NotFound from './components/not_found';


export default (
    <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="all" component={AllPosts} />
        <Route path="post" component={ShowPost} />
        <Route path="new" component={NewPost} />
        <Route path="*" component={NotFound} />
    </Route>
);
