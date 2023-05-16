import React from "react";
import classes from "../styles/EventDetails.module.css";
const EventDetails = ({ date, location }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    day: "numeric",
    month: "long",
  });
  return (
    <div className={classes.eventDetails}>
      <h3>{formattedDate}</h3>
      <h4>{location}</h4>
    </div>
  );
};

export default EventDetails;
