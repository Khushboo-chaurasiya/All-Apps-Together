import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function BookingDate(props) {
    let item = props.location.state.data;
    let theater = props.location.state.theater;
    const [proceed, setProceed] = useState(0);
    const [showTime, setShowTime] = useState("");
    const [seats, setSeats] = useState("");

    useEffect(() => {
        props.location.state.showTime && setShowTime(props.location.state.showTime)
        props.location.state.seats && setSeats(props.location.state.seats)
    },[])

    const goToSummary = () => {
        setProceed(1);
        if(showTime !== "" && seats !== ""){
            props.history.push('/bookingSummary', {
                data : item,
                theater : theater,
                showTime : showTime,
                seats : seats
            });
        }
    }

    const goToMovieDetails = () => {
        props.history.push("/bookDetails",{
            data: item,
            theater : theater
        });
    }

    const changeShowTime = (e) => {
        setShowTime(e.target.value);
    }
    return (
        <div>
            <p className="paraCSS">
                &nbsp;
                <span className="Left">
                
                <span className="leftArrow" onClick={goToMovieDetails}><i className="fa fa-arrow-circle-left" aria-hidden="true"></i></span> Welcome to <b>Infy movies</b>
                </span>
            </p>
        <div>
        
        <div className="row">
        
            <div className="cardMedium">
            
            <div className="card-body">
                
                <div className="form-group">  
                <div className="col-sm-offset-12 col-sm-10">
                    <h6 className="card-title">Theater : {props.location.state.theater}</h6>
                </div>
                <div className="form-group col-sm-offset-2 col-sm-12">
                    <label>show Timing </label>
                    <select className="form-control" value={showTime} onChange={changeShowTime}>
                        <option value=""></option>
                        <option value="09:00 AM">9:00 AM</option>
                        <option value="12:00 Noon">12:00 Noon</option>
                        <option value="03:00 PM">03:00 PM</option>
                        <option value="06:00 PM">06:00 PM</option>
                        <option value="09:00 PM">09:00 PM</option>
                    </select>
                    {proceed===1 && showTime==="" && <p className="ErrorPara">*Please select show Timing*</p>}
                </div>

                
                <label className="control-label col-sm-12">Number of seats:</label>
                    <div className="col-sm-12">          
                        <input type="text" className="form-control" id="seats" placeholder="Enter number of seats" name="seats" value={seats} onChange={(e) => setSeats(e.target.value)} />
                    </div>
                    {proceed===1 && seats==="" && <p className="control-label col-sm-12 ErrorPara">*Please Enter number of seats*</p>}
                
                </div>
                <div className="Centered App"> 
                <button type="button" className="btn btn-primary" onClick={goToSummary}>Proceed</button>
                
                </div>
            </div>
            </div>
        
        </div>
        </div>
        

        </div>
    
    )
}

export default BookingDate
