import React from "react";

const EventDescription = ({ description }) => {
  return (
    <div>
      <p style={{ textAlign: "center", fontWeight: 100 }}>{description}</p>
    </div>
  );
};

export default EventDescription;
