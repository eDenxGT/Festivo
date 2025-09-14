import { useAppDispatch, type RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { Header } from "../common/Header";
import { userLogout } from "@/store/slices/user.slice";
import { useToaster } from "@/hooks/ui/useToaster";
import { logoutUser } from "@/services//auth.service";
import { useLogout } from "@/hooks/auth/useLogout";

export const UserLayout = () => {
	const { successToast, errorToast } = useToaster();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const user = useSelector((state: RootState) => state.user.user);
	const { mutate: logoutReq } = useLogout(logoutUser);

	const handleLogout = () => {
		logoutReq(undefined, {
			onSuccess: (data) => {
				dispatch(userLogout());
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
			<Header role="user" isLogged handleLogout={handleLogout} />
			{/* Main content */}
			<Outlet context={user} />
		</div>
	);
};
