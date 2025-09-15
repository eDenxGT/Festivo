import EventForm from "@/components/organizer/event/EventForm";
import { useEditEventForm } from "@/hooks/events/forms/useEditEventForm";
import { useGetEventByIdQuery } from "@/hooks/events/queries/useGetEventByIdQuery";
import { useParams } from "react-router";

const OrganizerEditEventPage = () => {
	const { event_id } = useParams();

	if (!event_id) {
		return <div>INVALID ID</div>;
	}

	const { data } = useGetEventByIdQuery(event_id);

  const { formik, isLoading, addPerson } = useEditEventForm(data?.data!);

	return (
		<EventForm
			isForEdit={true}
			formik={formik}
			isLoading={isLoading}
			addPerson={addPerson}
		/>
	);
};

export default OrganizerEditEventPage;
