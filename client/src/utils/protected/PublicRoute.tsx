import type { JSX } from "react";
import { useSelector } from "react-redux";
import { getActiveSession } from "../helpers/getActiveSession";
import { Navigate } from "react-router";

interface NoAuthRouteProps {
	element: JSX.Element;
}

export const NoAuthRoute = ({ element }: NoAuthRouteProps) => {
	const session = useSelector(getActiveSession);

	if (session) {
		const roleRedirects: Record<string, string> = {
			user: "/user/home",
			organizer: "/org/dashboard",
		};
		return <Navigate to={roleRedirects[session.role] || "/unauthorized"} />;
	}

	return element;
};
