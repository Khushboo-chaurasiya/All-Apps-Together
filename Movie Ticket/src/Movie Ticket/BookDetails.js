import React, { useState, useEffect } from 'react';

function BookDetails(props) {
    let item = props.location.data? props.location.data : props.location.state.data;;
    const [theater, setTheater] = useState("");
    const [goToBookingDate, setGoToBookingDate] = useState(0);
    const theaterChange = (e) => {
        setTheater(e.target.value);
    }

    useEffect(() => {
        if(props.location.theater){
            setTheater(props.location.theater)
        }
    }, [])

    const goToBooking = () => {
        setGoToBookingDate(1);
        if(theater !== ""){
            props.history.push('/bookingDate', {
                data : item,
                theater : theater
            });
        }
    }
    const goToHome = () => {
        props.history.push('/movieDetails', {
            data: item
        });
    }
    return (
        <div>
            <p className="paraCSS">
                &nbsp;
                <span className="Left">
                
                <span className="leftArrow" onClick={goToHome}><i className="fa fa-arrow-circle-left" aria-hidden="true"></i></span> Welcome to <b>Infy movies</b>
                </span>
            </p>
        <div>
        
        <div className="cardChota">
        
            <div>
            
            <div>
                
                <div>
                     
                <div>
                <h6>Select your Theater</h6>
                <div className="radio1">
                    {
                    item.address1 && <div> <label><input type="radio" name="address" value={item.address1} onChange={theaterChange} checked={theater === `${item.address1}`} /> {item.address1} </label> <br/> </div>
                    }
                    {
                        item.address2 && <div> <label><input type="radio" name="address" value={item.address2} onChange={theaterChange} checked={theater === `${item.address2}`} /> {item.address2} </label> <br/> </div>
                    }
                    {
                        item.address3 && <div> <label><input type="radio" name="address" value={item.address3} onChange={theaterChange} checked={theater === `${item.address3}`} /> {item.address3} </label> <br/> </div>
                    }
                
                
                </div>
            </div>
            
            {goToBookingDate===1 && theater==="" && <p className="control-label col-sm-12 ErrorPara">*Please select your thather before Proceeding*</p>}
            </div>
                <div className="Centered App"> 
                <button type="button" className="btn btn-primary" onClick={goToBooking}>Book Now</button>
                
                </div>
            </div>
            </div>
        
        </div>
        </div>
        

        </div>
    
    )
}

export default BookDetails
