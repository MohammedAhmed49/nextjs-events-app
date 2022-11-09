import EventItem from "./EventItem";

const EventsList = (props) => {
  const { items } = props;
  return (
    <div>
      <ul>
        {items.map((item) => (
          <EventItem />
        ))}
      </ul>
    </div>
  );
};

export default EventsList;
