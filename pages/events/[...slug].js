import EventList from "@/components/EventList";
import events from "@/events";
import { useRouter } from "next/router";
import React from "react";

const FilteredEvents = (props) => {
  if (props.filteredEvents === "Invalid parameteres") {
    return (
      <p style={{ color: "red", marginTop: "40vh", marginLeft: "43vw" }}>
        Invalid Filter Parameteres
      </p>
    );
  }

  if (props.filteredEvents.length === 0) {
    return (
      <p style={{ marginTop: "40vh", marginLeft: "43vw" }}>
        No Event Set For This date
      </p>
    );
  }

  return <EventList items={props.filteredEvents} />;
};

export const getServerSideProps = async (context) => {
  const { params } = context;

  if (
    Number(params.slug[0]) < 1 ||
    Number(params.slug[0]) > 12 ||
    isNaN(params.slug[0]) ||
    isNaN(params.slug[1])
  ) {
    return {
      props: {
        filteredEvents: "Invalid parameteres",
      },
    };
  }

  const filteredEvents = events.filter(
    (e) =>
      e.date.split("/")[1] === params.slug[0] &&
      e.date.split("/")[2] === params.slug[1]
  );

  return {
    props: {
      filteredEvents: filteredEvents,
    },
  };
};

export default FilteredEvents;
