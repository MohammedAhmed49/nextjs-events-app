import { useRouter } from "next/router";
import { Fragment } from "react";
import EventsList from "../../components/events/EventsList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/UI/button/Button";
import ErrorAlert from "../../components/UI/error-alert/ErrorAlert";
import { getFilteredEvents } from "../../utils/firebase";

const FilteredEventsPage = (props) => {

  if (!props.filteredEvents || props.filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventsList items={props.filteredEvents} />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const filteredDate = context.params.slug;
  const year = +filteredDate[0];
  const month = +filteredDate[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const events = await getFilteredEvents({ year: year, month: month });

  return {
    props: {
      filteredEvents: events,
      date: {
        year: year,
        month: month,
      },
    },
  };
}

export default FilteredEventsPage;
