import React from "react";
import classes from "../styles/EventTitle.module.css";
const EventTitle = ({ title }) => {
  return (
    <div className={classes.eventTitle}>
      <h1>{title}</h1>
    </div>
  );
};

export default EventTitle;
