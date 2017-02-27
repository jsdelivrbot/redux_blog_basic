import React from 'react';

const App = (props) => {
    return (
        <div>
            <h2>Redux Blogger</h2>
            { props.children }
        </div>
    );
};

export default App;
