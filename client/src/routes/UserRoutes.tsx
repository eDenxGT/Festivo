import { Route } from "react-router-dom";
import { Routes } from "react-router";
import { NoAuthRoute } from "@/utils/protected/PublicRoute";
import { ProtectedRoute } from "@/utils/protected/ProtectedRoute";
import { UserLayout } from "@/components/layouts/UserLayout";
import UserSignInPage from "@/pages/user/UserSignInPage";
import UserSignUpPage from "@/pages/user/UserSignUpPage";
import UserHomePage from "@/pages/user/UserHomePage";
import NotFoundPage from "@/pages/common/NotFound";

const UserRoutes = () => {
	return (
		<Routes>
			{/* Public (no auth required) */}
			<Route
				path="/signin"
				element={<NoAuthRoute element={<UserSignInPage />} />}
			/>
			<Route
				path="/signup"
				element={<NoAuthRoute element={<UserSignUpPage />} />}
			/>

			{/* Protected (requires client role) */}
			<Route
				path="/"
				element={
					<ProtectedRoute
						allowedRoles={["user"]}
						element={<UserLayout />}
					/>
				}>
				<Route path="/home" element={<UserHomePage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
};

export default UserRoutes;
