import React from 'react';
import {Link} from 'react-router-dom';

function BookingDone(props) {
    let item = props.location.data;
    let theater = props.location.theater;
  let seats = props.location.seats;
  let showTime = props.location.showTime;
    const goToHome = () => {
        props.history.push("/");
    }
    return (
        
        <div>
            <p className="paraCSS">
                &nbsp;
                <span className="Left">
                
                <span className="leftArrow" onClick={goToHome}><i className="fa fa-home" aria-hidden="true"></i></span> Welcome to <b>Infy movies</b>
                </span>
            </p>

        
        <div>
        
        <div className="cardDetails">
        
            <div className="floatLeft">
            <img className="detailsImg" src={require("../Images/done.jpg")} alt="Card cap"  />
            </div>

            <div className="floatRight">
                <u><b>booking done</b></u>
                <h6 className="card-name">Theater name : {theater}</h6>
                <h6 className="card-location">Location : {item.location}</h6>
                <h6 className="card-seats">Seats Booked : {seats}</h6>
                <h6 className="card-movie">Movie name : {item.name}</h6>
                <h6 className="card-price">
                  Amount per ticket : {item.price} $
                </h6>
                <h6 className="card-time">Show Timing : {showTime}</h6>
                
        </div>
        
        </div>
        </div>
        

        </div>
    
    )
}

export default BookingDone
