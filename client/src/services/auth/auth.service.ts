import { authAxiosInstance } from "@/api/auth.axios";
import { pvtAxiosInstance } from "@/api/private.axios";
import type { IAuthResponse, IAxiosResponse } from "@/types/Response";
import type { ILoginData, IRegisterData } from "@/types/UserTypes";

export const signIn = async (data: ILoginData): Promise<IAuthResponse> => {
	const res = await authAxiosInstance.post("/signin", data);
	return res.data;
};

export const signUp = async (data: IRegisterData): Promise<IAxiosResponse> => {
	const res = await authAxiosInstance.post("/signup", data);
	return res.data;
};

export const logoutUser = async (): Promise<IAxiosResponse> => {
	const res = await pvtAxiosInstance.post("/user/logout");
	return res.data;
};

