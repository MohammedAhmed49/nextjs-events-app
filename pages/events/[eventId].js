import { useRouter } from "next/router";
import { Fragment } from "react";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import Button from "../../components/UI/button/Button";
import ErrorAlert from "../../components/UI/error-alert/ErrorAlert";
import { getEventById, getFeaturedEvents } from "../../utils/firebase";

const EventPage = ({ event }) => {
  if (!event) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No event found!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>{event.description}</EventContent>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const event = await getEventById(context.params.eventId);

  return {
    props: {
      event: event,
    },
    revalidate: 100,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((item) => ({ params: { eventId: item.id } }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default EventPage;
