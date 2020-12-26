import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CrissNameSign from './Game/CrissNameSign';
import CrissCross from './Game/CrissCross';

function RouterPage() {
    return (
        <Router>
            <React.Fragment>
                <Route path="/" exact strict component={CrissNameSign} />
                <Route path="/crissCrossNameSign" exact strict component={CrissNameSign} />
                <Route path="/crissCross" exact strict component={CrissCross} />
            </React.Fragment>
        </Router>
    )
}

export default RouterPage
