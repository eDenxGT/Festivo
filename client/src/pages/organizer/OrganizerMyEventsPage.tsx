import MyEvents from "@/components/organizer/event/MyEvents";
import { useGetEventsQuery } from "@/hooks/events/queries/useGetMyEventsQuery";

export const OrganizerMyEventsPage = () => {
	const { data } = useGetEventsQuery();
	return <MyEvents events={data?.data!} />;
};
