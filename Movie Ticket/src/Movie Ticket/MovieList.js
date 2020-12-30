import React from "react";
import post from "./movies.json";
import "bootstrap/dist/css/bootstrap.css";

function MovieList(props) {
  const ratingGiven = (item) => {
    let menuItems = [];
    for (let j = 0; j < item; j++) {
      menuItems.push(<span className="fa fa-star checked"></span>);
    }
    return menuItems;
  };

  const goToDetails = (item) => {
    props.history.push("/MovieDetails", {
      data: item
    });
  };

  return (
    <div>
        
      <div>
      <p className="paraCSS">
        &nbsp;
        <span className="Left">
          
          Welcome to <b>Infy movies</b>
        </span>
      </p>
         
        {/* <h5>Movie in Theater</h5>
            <label>Sort by </label> &nbsp;
            <select> 
                <option value="">Popularity</option>
                <option value="New">Location</option>
                <option value="Progress">Rating</option>
                <option value="Close">Price</option>
            </select>

            &nbsp;

            <label>Language </label> &nbsp;
            <select> 
                <option value="">All</option>
                <option value="New">Hindi</option>
                <option value="Progress">English</option>
                <option value="Close">Others</option>
            </select> */}

        <div className="row">
          {post.map((item) => (
            
              <div className="card" onClick={() => {goToDetails(item)}}>
                  
                <img
                  className="card-img-top"
                  src={require(`../Images/${item.name}.jpg`)}
                  alt="missing photos"
                />

                <div className="card-body">
                    <span><b className="card-title">{item.name}</b></span>  <span style={{float:"right"}}>{ratingGiven(`${item.rating}`)}</span>
                </div>

                
              </div>
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
