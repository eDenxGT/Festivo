import EventForm from "@/components/organizer/event/EventForm";
import { useCreateEventForm } from "@/hooks/events/forms/useCreateEventForm";
import React from "react";

const OrganizerCreateEventPage = React.memo(() => {
	const { formik, isLoading, addPerson } = useCreateEventForm();

	return (
		<EventForm
			formik={formik}
			isForEdit={false}
			isLoading={isLoading}
			addPerson={addPerson}
		/>
	);
});

export default OrganizerCreateEventPage;
