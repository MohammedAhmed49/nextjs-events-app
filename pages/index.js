import Head from "next/head";
import EventsList from "../components/events/EventsList";
import NewsletterRegistration from "../components/input/newsletter-registration";
import { getFeaturedEvents } from "../utils/firebase";

const HomePage = (props) => {
  const { featEvents } = props;

  return (
    <div>
      <Head>
        <title>Events app</title>
        <meta name="description" content="Featured events are shown here" />
      </Head>
      <NewsletterRegistration />
      <EventsList items={featEvents} />
    </div>
  );
};

export async function getStaticProps() {
  const featEvents = await getFeaturedEvents();

  return {
    props: {
      featEvents: featEvents,
    },
    revalidate: 100,
  };
}

export default HomePage;
