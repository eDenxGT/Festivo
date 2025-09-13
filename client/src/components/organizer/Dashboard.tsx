import { Link, useOutletContext } from "react-router";
import { Card, CardContent } from "../ui/card";
import { Calendar, Ticket } from "lucide-react";
import type { Organizer } from "@/types/OrganizerTypes";

const Dashboard = () => {
	const session: Organizer = useOutletContext();
	return (
		<div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
			<main className="container mx-auto px-4 pt-24 pb-12">
				{/* Welcome Section */}
				<div className="text-center mb-12">
					<div className="flex items-center justify-center gap-3 mb-4">
						<div className="text-left">
							<h1 className="text-2xl font-bold text-foreground">
								Welcome back, {session.name}!
							</h1>
							<p className="text-muted-foreground">
								Let's host more events!
							</p>
						</div>
					</div>
				</div>

				{/* Navigation Cards */}
				<div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
					<Link to="/org/my-events">
						<Card className="hover:shadow-lg transition rounded-2xl">
							<CardContent className="flex flex-col items-center justify-center p-6 text-center">
								<Calendar className="h-10 w-10 text-primary mb-3" />
								<h3 className="text-lg font-semibold text-foreground">
									My Events
								</h3>
								<p className="text-sm text-muted-foreground">
									Manage your events
								</p>
							</CardContent>
						</Card>
					</Link>

					<Link to="/org/create-event">
						<Card className="hover:shadow-lg transition rounded-2xl">
							<CardContent className="flex flex-col items-center justify-center p-6 text-center">
								<Ticket className="h-10 w-10 text-primary mb-3" />
								<h3 className="text-lg font-semibold text-foreground">
									Create New Event
								</h3>
								<p className="text-sm text-muted-foreground">
									Host more events and continue your journey
								</p>
							</CardContent>
						</Card>
					</Link>

					{/* <Link to="/profile">
						<Card className="hover:shadow-lg transition rounded-2xl">
							<CardContent className="flex flex-col items-center justify-center p-6 text-center">
								<User className="h-10 w-10 text-primary mb-3" />
								<h3 className="text-lg font-semibold text-foreground">
									Profile
								</h3>
								<p className="text-sm text-muted-foreground">
									Update your personal details
								</p>
							</CardContent>
						</Card>
					</Link> */}
				</div>
			</main>
		</div>
	);
};

export default Dashboard;
