import AllEvents from "@/components/user/events/AllEvents";
import { useRegisterEventMutation } from "@/hooks/events/mutations/useRegisterEventMutation";
import { useGetAllEventsQuery } from "@/hooks/events/queries/useGetAllEventsQuery";
import { useToaster } from "@/hooks/ui/useToaster";

import { useState } from "react";

export const UserAllEventsPage = () => {
	const [debouncedSearch, setDebouncedSearch] = useState("");

	const { successToast, errorToast } = useToaster();
	const { data } = useGetAllEventsQuery({ search: debouncedSearch });
	const { mutate } = useRegisterEventMutation();

	const handleEventRegister = async (event_id: string) => {
		mutate(event_id, {
			onSuccess: (data) => successToast(data.message),
			onError: (error: any) => {
				errorToast(
					error.response?.data?.message || "Already Registered"
				);
			},
		});
	};

	return (
		<AllEvents
			handleEventRegister={handleEventRegister}
			setDebouncedSearch={setDebouncedSearch}
			events={data?.data!}
		/>
	);
};
