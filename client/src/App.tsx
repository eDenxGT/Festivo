import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import LandingPage from "./pages/common/LandingPage";
import { NoAuthRoute } from "./utils/protected/PublicRoute";

// Lazy imports
const OrganizerRoutes = React.lazy(() => import("./routes/OrganizerRoutes"));
const UserRoutes = React.lazy(() => import("./routes/UserRoutes"));
const UnauthorizedPage = React.lazy(
	() => import("./pages/common/UnauthorizedPage")
);
const NotFoundPage = React.lazy(() => import("./pages/common/NotFound"));

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route
						path="/"
						element={<NoAuthRoute element={<LandingPage />} />}
					/>

					<Route path="/user/*" element={<UserRoutes />} />

					<Route path="/org/*" element={<OrganizerRoutes />} />
					<Route
						path="/unauthorized"
						element={<UnauthorizedPage />}
					/>
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Suspense>
		</Router>
	);
}

export default App;
