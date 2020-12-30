import React from 'react';
import {Link} from 'react-router-dom';

function Home(props) {
    return (
            <div>
                <br/>
                <ul>
                    {/* <Link to={{
                     pathname:"/users/john",
                     state : {
                         name : "khushboo"
                     }
                    }}
                    >Users page john</Link> */}
                    <li><Link to="/admin"> See All Apps </Link></li>
                    <li><Link to="/todo">Todo App</Link></li>
                    <li><Link to="/crissCrossNameSign">Criss Cross Game</Link></li>
                    <li><Link to="/notes">Notes for me</Link></li>
                    <li><Link to="/kitchen">Kitchen App</Link></li>
                    <li><Link to="/youTube">You Tube App</Link></li>
                    <li><Link to="/movie">Movie Ticket</Link></li>
                    <li><Link to="/hotelPin">Hotel App</Link></li>
                    {props.location.state.data === "Student" ? <li> <Link to="/QuestionPage"> Question App </Link> </li> : null}
                    {props.location.state.data === "Developer" ? <li> <Link to="/developer"> Defect Tracker </Link> </li> : props.location.state.data === "Tester" ? <li> <Link to="/tester"> Defect Tracker </Link> </li> : null}
                </ul>
            </div>
    )
}

export default Home
