import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TesterDefect from './Defect Tracker/Tester';
import AddDefects from './Defect Tracker/AddDefects';

function RouterPage() {
    return (
        <Router>
            <React.Fragment>
                <Route path="/" exact strict component={TesterDefect} />
                <Route path="/tester" exact strict component={TesterDefect} />
                <Route path="/addDefects" exact strict component={AddDefects} />
            </React.Fragment>
        </Router>
    )
}

export default RouterPage
