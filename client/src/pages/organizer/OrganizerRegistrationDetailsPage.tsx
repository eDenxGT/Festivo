import RegistrationPage from "@/components/organizer/event/RegistrationDetails";
import { useGetRegistrationQuery } from "@/hooks/events/queries/useGetRegistrationQuery";
import { useToaster } from "@/hooks/ui/useToaster";
import { updateRegistrationStatus } from "@/services/event.service";
import type {
	FoodStatus,
	IRegistrationWithEvent,
	TicketStatus,
} from "@/types/RegistrationTypes";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const OrganizerRegistrationDetailsPage = () => {
	const { registration_id } = useParams<{ registration_id: string }>();
	if (!registration_id) return <h1>Missing Parameters</h1>;

	const { data } = useGetRegistrationQuery(registration_id);

	const regData: IRegistrationWithEvent = data?.data!;
	const { successToast } = useToaster();

	const [registrationData, setRegistrationData] =
		useState<IRegistrationWithEvent>({
			id: registration_id,
			participant_details: regData?.participant_details,
			event_id: regData?.event_id,
			role: regData?.role,
			entry_ticket_status: regData?.entry_ticket_status,
			food_coupons: {
				morning: regData?.food_coupons?.morning,
				noon: regData?.food_coupons?.noon,
				evening: regData?.food_coupons?.evening,
			},
			created_at: regData?.created_at,
			updated_at: regData?.updated_at,
			eventDetails: regData?.eventDetails!,
		});

	useEffect(() => {
		setRegistrationData(data?.data!);
	}, [data]);

	const handleTicketStatusChange = (status: TicketStatus) => {
		updateRegistrationStatus({ registration_id, type: "entry_ticket" });
		setRegistrationData((prev) => ({
			...prev,
			entry_ticket_status: status,
			updated_at: new Date(),
		}));
		successToast("Ticket Status Updated");
	};

	const handleFoodStatusChange = (
		meal: "morning" | "noon" | "evening",
		status: FoodStatus
	) => {
		updateRegistrationStatus({
			registration_id,
			type: "food_coupon",
			food_field: meal,
		});
		setRegistrationData((prev) => ({
			...prev,
			food_coupons: {
				...prev.food_coupons,
				[meal]: status,
			},
			updated_at: new Date(),
		}));
		successToast("Food coupon marked as claimed!");
	};
	return (
		<RegistrationPage
			handleFoodStatusChange={handleFoodStatusChange}
			handleTicketStatusChange={handleTicketStatusChange}
			registrationData={registrationData}
		/>
	);
};

export default OrganizerRegistrationDetailsPage;
