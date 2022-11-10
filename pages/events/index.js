import { useRouter } from "next/router";
import EventSearch from "../../components/events/EventSearch";
import EventsList from "../../components/events/EventsList";
import { getAllEvents } from "../../dummy-data";

const EventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();
  const searchHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <div>
      <EventSearch onSearch={searchHandler} />
      <EventsList items={events} />
    </div>
  );
};

export default EventsPage;
