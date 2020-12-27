import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import TodoApp from './Todo/TodoApp';

function RouterPage() {
    return (
        <Router>
            <React.Fragment>
                <Route path="/" exact strict component={TodoApp} />
            </React.Fragment>
        </Router>
    )
}

export default RouterPage
