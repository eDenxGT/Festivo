import { signIn } from "@/services/auth.service";
import type { IAuthResponse } from "@/types/Response";
import type { ILoginData } from "@/types/UserTypes";
import { useMutation } from "@tanstack/react-query";

export const useLoginMutation = () => {
	return useMutation<IAuthResponse, Error, ILoginData>({
		mutationFn: signIn,
	});
};
