import { queryClient } from "@/lib/queryClient";
import { registerEvent } from "@/services/event.service";
import { useMutation } from "@tanstack/react-query";

export const useRegisterEventMutation = () => {
	return useMutation({
		mutationFn: registerEvent,
		onSettled: () => {
			queryClient.invalidateQueries({
				queryKey: ["user-events"],
				exact: false,
			});
		},
	});
};
