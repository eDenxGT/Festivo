import { Route } from "react-router-dom";
import { Routes } from "react-router";
import { OrganizerLayout } from "@/components/layouts/OrganizerLayout";
import { NoAuthRoute } from "@/utils/protected/PublicRoute";
import { ProtectedRoute } from "@/utils/protected/ProtectedRoute";
import SignInPage from "@/pages/organizer/OrganizerSignInPage";
import SignUpPage from "@/pages/organizer/OrganizerSignUpPage";
import OrganizerDashboard from "@/pages/organizer/OrganizerDashboard";

const OrganizerRoutes = () => {
	return (
		<Routes>
			{/* Public (no auth required) */}
			<Route
				path="/signin"
				element={<NoAuthRoute element={<SignInPage />} />}
			/>
			<Route
				path="/signup"
				element={<NoAuthRoute element={<SignUpPage />} />}
			/>
			{/* Protected (requires client role) */}
			<Route
				path="/"
				element={
					<ProtectedRoute
						allowedRoles={["organizer"]}
						element={<OrganizerLayout />}
					/>
				}>
				<Route path="/dashboard" element={<OrganizerDashboard />} />
				{/* <Route path="*" element={<NotFoundPage />} /> */}
			</Route>
		</Routes>
	);
};

export default OrganizerRoutes;
