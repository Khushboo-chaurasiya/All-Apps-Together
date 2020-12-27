import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Results from './QuestionApp/Results';
import QuestionPage from './QuestionApp/QuestionPage';

function RouterPage() {
    return (
        <Router>
            <React.Fragment>
                <Route path="/" exact strict component={QuestionPage} />
                <Route path="/results" exact strict component={Results} />
                <Route path="/questionPage" exact strict component={QuestionPage} />
            </React.Fragment>
        </Router>
    )
}

export default RouterPage
