import EventList from "@/components/EventList";
import EventsFilterForm from "@/components/EventsFilterForm";
import events from "@/events";
import Head from "next/head";
import React, { Fragment } from "react";

const AllEvents = (props) => {
  console.log(props.events);
  return (
    <Fragment>
      <Head>
        <title>Events App</title>
        <meta
          name="Events App"
          content="Look and search for different amazing fun events and featured events"
        />
      </Head>
      <EventsFilterForm />
      <EventList items={props.events} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      events: events,
    },
  };
};

export default AllEvents;
