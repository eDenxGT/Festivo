import { organizerLogout } from "@/store/slices/organizer.slice";
import { userLogout } from "@/store/slices/user.slice";
import { store } from "@/store/store";
import axios from "axios";
import toast from "react-hot-toast";

export const pvtAxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_PRIVATE_API_URL,
	withCredentials: true,
});

let isRefreshing = false;

pvtAxiosInstance.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			if (!isRefreshing) {
				isRefreshing = true;
				try {
					await pvtAxiosInstance.post("/refresh-token");
					isRefreshing = false;
					return pvtAxiosInstance(originalRequest);
				} catch (refreshErr) {
					isRefreshing = false;
					store.dispatch(userLogout());
					store.dispatch(organizerLogout());
					window.location.href = "/";
					toast("Please login again");
					return Promise.reject(refreshErr);
				}
			}
		}

		return Promise.reject(error);
	}
);
