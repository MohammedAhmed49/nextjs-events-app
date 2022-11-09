import { userRouter } from "next/router";
import { getEventById } from "../../dummy-data";

const EventPage = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const event = getEventById(eventId);
  return <div>EventPage</div>;
};

export default EventPage;
