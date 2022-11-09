import EventsList from "../components/events/EventsList";
import { getFeaturedEvents } from "../dummy-data";

const HomePage = () => {
  const getEvents = getFeaturedEvents();
  return (
    <div>
      <EventsList items={getEvents} />
    </div>
  );
};

export default HomePage;
