import { getAllEventsForUser } from "@/services/event.service";
import type { IEventsResponse } from "@/types/Response";
import { useQuery } from "@tanstack/react-query";

export const useGetAllEventsQuery = ({ search }: { search: string }) => {
	return useQuery<IEventsResponse, Error>({
		queryKey: ["user-events", search],
		queryFn: () => getAllEventsForUser({ search }),
	});
};
