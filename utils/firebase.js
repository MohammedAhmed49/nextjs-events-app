export async function getAllEvents() {
  const res = await fetch(
    "https://instagram-a41ff-default-rtdb.firebaseio.com/events.json"
  );
  const data = await res.json();
  const events = Object.entries(data).map((item) => item[1]);

  return events;
}

export async function getFeaturedEvents() {
  const events = await getAllEvents();
  const featEvents = events.filter((item) => item.isFeatured);

  return featEvents;
}

export async function getEventById(id) {
  const events = await getAllEvents();
  const event = events.find((item) => item.id === id);

  return event;
}
