import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./EventItem.module.css";

const EventItem = ({ item }) => {
  const router = useRouter();
  const formattedDate = new Date(item.date).toLocaleDateString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <li className={classes.li}>
      <div className={classes.name}>
        <h2>{item.name}</h2>
      </div>
      <div className={classes.date}>
        <h3>{formattedDate}</h3>
      </div>
      <div className={classes.location}>
        <h3>{item.location}</h3>
      </div>
      <div
        onClick={() => router.push(`/events/${item.id}`)}
        className={classes.eploreDiv}
      >
        Explore Event
      </div>
    </li>
  );
};

export default EventItem;
