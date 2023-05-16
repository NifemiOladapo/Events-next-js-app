import EventList from "@/components/EventList";
import events from "@/events";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home = (props) => {
  return (
    <div>
      <Head>
        <title>Events App</title>
        <meta
          name="Events App"
          content="Look and search for different amazing fun events and featured events"
        />
      </Head>
      <EventList items={props.featuredEvents} />
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredEvents = events.filter((e) => e.isFeatured);
  return {
    props: {
      featuredEvents,
    },
  };
};

export default Home;
