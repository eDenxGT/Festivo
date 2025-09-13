import { signUp } from "@/services/auth/auth.service";
import type { IAxiosResponse } from "@/types/Response";
import type { IRegisterData } from "@/types/UserTypes";
import { useMutation } from "@tanstack/react-query";

export const useRegisterMutation = () => {
	return useMutation<IAxiosResponse, Error, IRegisterData>({
		mutationFn: signUp,
	});
};
