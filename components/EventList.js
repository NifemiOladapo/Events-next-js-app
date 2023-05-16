import EventItem from "./EventItem";

const EventList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return <EventItem item={item} key={item.id} />;
      })}
    </ul>
  );
};

export default EventList;
