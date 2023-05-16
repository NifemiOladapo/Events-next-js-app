import React, { useEffect, useLayoutEffect, useState } from "react";
import events from "@/events";
import EventTitle from "@/components/EventTitle";
import EventDetails from "@/components/EventDetails";
import EventDescription from "@/components/EventDescription";
import Head from "next/head";

const SelectedEvent = (props) => {
  if (props.event === "Event Not FOund") {
    return (
      <p
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%)",
          position: "absolute",
        }}
      >
        Event not found
      </p>
    );
  }

  return (
    <>
      <Head>
        <title>{props.event.name} Events</title>
        <meta
          name={`${props.event.name} Events`}
          content={`Events for ${props.event.name}`}
        />
      </Head>
      <EventTitle title={props.event.name} />
      <div
        style={{
          left: "50%",
          top: "32%",
          transform: "translate(-50%)",
          position: "absolute",
        }}
      >
        <EventDetails location={props.event.location} date={props.event.date} />
        <EventDescription description={props.event.description} />
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const event = events.find((e) => e.id === Number(context.params.eventId));

  if (!event) {
    return {
      props: {
        event: "Event Not FOund",
      },
    };
  }
  return {
    props: {
      event,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = events.map((e) => {
    return {
      params: {
        eventId: String(e.id),
      },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};
export default SelectedEvent;
