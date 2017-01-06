import React from 'react'
import { Route, indexRoute } from 'react-router'

import App from './components/app'

const Greet = () => {
    return (<div>Hello world</div>)
}

export default (
<Route path="/" component={App} >
    <Route path="greet" component={Greet} />
    <Route path="greet2" component={Greet} />
    <Route path="greet3" component={Greet} />
</Route>

)