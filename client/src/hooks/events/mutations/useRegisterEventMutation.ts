import { registerEvent } from "@/services/event.service";
import { useMutation } from "@tanstack/react-query";

export const useRegisterEventMutation = () => {
	return useMutation({
		mutationFn: registerEvent,
	});
};
