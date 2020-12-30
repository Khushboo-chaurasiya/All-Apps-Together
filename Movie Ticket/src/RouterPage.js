import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MovieList from "./Movie Ticket/MovieList";
import MovieDetails from "./Movie Ticket/MovieDetails";
import BookDetails from "./Movie Ticket/BookDetails";
import BookingDate from "./Movie Ticket/BookingDate";
import BookingSummary from "./Movie Ticket/BookingSummary";
import BookingDone from "./Movie Ticket/BookingDone";

function RouterPage() {
  return (
    <Router>
      <React.Fragment>
        <Route path="/" exact strict component={MovieList} />
        <Route path="/Movie" exact strict component={MovieList} />
        <Route path="/MovieDetails" exact strict component={MovieDetails} />
        <Route path="/bookDetails" exact strict component={BookDetails} />
        <Route path="/bookingDate" exact strict component={BookingDate} />
        <Route path="/bookingSummary" exact strict component={BookingSummary} />
        <Route path="/bookingDone" exact strict component={BookingDone} />
      </React.Fragment>
    </Router>
  );
}

export default RouterPage;
