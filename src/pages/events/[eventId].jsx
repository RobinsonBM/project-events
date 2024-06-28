import { getEventById } from "../../../dummy-data";
import { useRouter } from "next/router";
import ErrorAlert from "@/components/ui/error-alert";
import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";

const EventDetailPage = () => {
  const { query } = useRouter();
  const eventId = query.eventId;

  const event = getEventById(eventId);

  if (!event) {
    return <ErrorAlert>No event found!</ErrorAlert>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics {...event} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
