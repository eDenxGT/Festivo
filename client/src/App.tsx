import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import UnauthorizedPage from "./pages/common/UnauthorizedPage";
import OrganizerRoutes from "./routes/OrganizerRoutes";
import UserRoutes from "./routes/UserRoutes";
import LandingPage from "./pages/common/LandingPage";
import { NoAuthRoute } from "./utils/protected/PublicRoute";

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route
					path="/"
					element={<NoAuthRoute element={<LandingPage />} />}
				/>

				<Route path="/user/*" element={<UserRoutes />} />

				<Route path="/org/*" element={<OrganizerRoutes />} />

				<Route path="/unauthorized" element={<UnauthorizedPage />} />
			</Routes>
		</Router>
	);
}

export default App;
