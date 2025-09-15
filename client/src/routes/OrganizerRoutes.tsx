import { Route } from "react-router-dom";
import { Routes } from "react-router";
import { OrganizerLayout } from "@/components/layouts/OrganizerLayout";
import { NoAuthRoute } from "@/utils/protected/PublicRoute";
import { ProtectedRoute } from "@/utils/protected/ProtectedRoute";
import SignInPage from "@/pages/organizer/OrganizerSignInPage";
import SignUpPage from "@/pages/organizer/OrganizerSignUpPage";
import OrganizerDashboard from "@/pages/organizer/OrganizerDashboard";
import NotFoundPage from "@/pages/common/NotFound";
import OrganizerCreateEventPage from "@/pages/organizer/OrganizerCreateEventPage";
import { OrganizerMyEventsPage } from "@/pages/organizer/OrganizerMyEventsPage";
import OrganizerEditEventPage from "@/pages/organizer/OrganizerEditEventPage";

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
				<Route
					path="/create-event"
					element={<OrganizerCreateEventPage />}
				/>
				<Route
					path="/edit-event/:event_id"
					element={<OrganizerEditEventPage />}
				/>
				<Route path="/my-events" element={<OrganizerMyEventsPage />} />
			</Route>
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};

export default OrganizerRoutes;
