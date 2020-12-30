import React from 'react';
import {Link} from 'react-router-dom';

function MovieDetails(props) {
    let item = props.location.state.data;
    const goToHome = () => {
        props.history.push("/");
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
        
        <div className="cardDetails">
        
            <div className="floatLeft">
            <img className="detailsImg" src={require(`../Images/${item.name}.jpg`)} alt="Card cap"  />
            </div>

            <div className="floatRight">
            
                <div className=""><b>{item.name}</b></div>
                <div className="">Language : {item.language} movie</div>
                <div className="">Format : {item.format} movie</div>
                
                
                <div>
                    <ul>
                        <li>Movie for all </li>
                        <li>Enjoyment at one place</li>
                        <li>Come with your family</li>
                        
                    </ul>
                </div>
                <div>
                <b>We are always happy to serve!</b>
                </div>
                <div className=""> 
                <Link to=
                {{pathname:"/bookDetails",
                    data: item
                }}><button type="button" className="btn btn-primary">Book Now</button></Link>
                
                </div>
        </div>
        
        </div>
        </div>
        

        </div>
    
    )
}

export default MovieDetails
