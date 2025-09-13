import { useAppDispatch, type RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { Header } from "../common/Header";
import { Outlet, useNavigate } from "react-router";
import { useToaster } from "@/hooks/ui/useToaster";
import { useLogout } from "@/hooks/auth/useLogout";
import { organizerLogout } from "@/store/slices/organizer.slice";
import { logoutUser } from "@/services/auth/auth.service";

export const OrganizerLayout = () => {
	const { successToast, errorToast } = useToaster();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const organizer = useSelector(
		(state: RootState) => state.organizer.organizer
	);
	const { mutate: logoutReq } = useLogout(logoutUser);

	const handleLogout = () => {
		logoutReq(undefined, {
			onSuccess: (data) => {
				dispatch(organizerLogout());
				navigate("/");
				successToast(data.message);
			},
			onError: (err: any) => {
				errorToast(err.response.data.message);
			},
		});
	};

	return (
		<div className="flex flex-col min-h-screen">
			{/* Header */}
			<Header role="organizer" isLogged handleLogout={handleLogout} />
			{/* Main content */}
			<Outlet context={organizer} />
		</div>
	);
};
