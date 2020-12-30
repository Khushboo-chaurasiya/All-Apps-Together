import React from "react";
import { Link } from "react-router-dom";

function BookingSummary(props) {
  let item = props.location.state.data;
  let theater = props.location.state.theater;
  let seats = props.location.state.seats;
  let showTime = props.location.state.showTime;

  const goToBookingDate = () => {
    props.history.push("/bookingDate", {
      data: item,
      theater: theater,
      showTime: showTime,
      seats: seats,
    });
  };

  return (
    <div>
      <p className="paraCSS">
                &nbsp;
                <span className="Left">
                
                <span className="leftArrow" onClick={goToBookingDate}><i className="fa fa-arrow-circle-left" aria-hidden="true"></i></span> Welcome to <b>Infy movies</b>
                </span>
            </p>
      <div>
        
        <div className="row">
          
            <div className="cardMedium">
              <div className="card-body">
                <h6 className="card-name">Theater name : {theater}</h6>
                <h6 className="card-location">Location : {item.location}</h6>
                <h6 className="card-seats">Seats Booked : {seats}</h6>
                <h6 className="card-movie">Movie name : {item.name}</h6>
                <h6 className="card-price">
                  Amount per ticket : {item.price} $
                </h6>
                <h6 className="card-time">Show Timing : {showTime}</h6>
                <div className="Centered App">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={goToBookingDate}
                  >
                    Want to Modify
                  </button>
                  </div>
                  <div className="Centered App">
                  <Link to={{ pathname: "/bookingDone", data: item,
                  theater : theater,
                  showTime : showTime,
                  seats : seats}}>
                    <button type="button" className="btn btn-primary">
                      Want to Proceed
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default BookingSummary;
