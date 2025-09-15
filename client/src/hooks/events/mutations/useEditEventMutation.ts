import { editEvent } from "@/services/event.service";
import { useMutation } from "@tanstack/react-query";

export const useEditEventMutation = () => {
	return useMutation({
		mutationFn: editEvent,
	});
};
