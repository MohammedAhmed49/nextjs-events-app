import Head from "next/head";
import { useRouter } from "next/router";
import EventSearch from "../../components/events/EventSearch";
import EventsList from "../../components/events/EventsList";
import { getAllEvents } from "../../utils/firebase";

const EventsPage = ({ events }) => {
  const router = useRouter();
  const searchHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <div>
      <Head>
        <title>All events</title>
        <meta name="description" content="All events are shown here" />
      </Head>
      <EventSearch onSearch={searchHandler} />
      <EventsList items={events} />
    </div>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 100,
  };
}

export default EventsPage;
