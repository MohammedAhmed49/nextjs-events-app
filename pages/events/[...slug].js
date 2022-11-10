import { useRouter } from "next/router";
import { Fragment } from "react";
import EventsList from "../../components/events/EventsList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/UI/button/Button";
import ErrorAlert from "../../components/UI/error-alert/ErrorAlert";
import { getFilteredEvents } from "../../dummy-data";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filteredDate = router.query.slug;

  if (!filteredDate) {
    return <p>Loading ....</p>;
  }

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
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const events = getFilteredEvents({ year: year, month: month });

  if (!events || events.length === 0) {
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

  const date = new Date(year, month - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventsList items={events} />
    </Fragment>
  );
};

export default FilteredEventsPage;
