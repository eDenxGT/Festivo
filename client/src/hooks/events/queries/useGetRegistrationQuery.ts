import { getRegistrationDetails } from "@/services/event.service";
import type { IRegistrationDetailsResponse } from "@/types/Response";
import { useQuery } from "@tanstack/react-query";

export const useGetRegistrationQuery = (registration_id: string) => {
	return useQuery<IRegistrationDetailsResponse, Error>({
		queryKey: ["registration", registration_id],
		queryFn: () => getRegistrationDetails(registration_id),
	});
};
