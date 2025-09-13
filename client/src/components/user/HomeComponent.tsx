import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Ticket, User } from "lucide-react";

export default function HomeComponent() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
			<main className="container mx-auto px-4 pt-24 pb-12">
				{/* Welcome Section */}
				<div className="text-center mb-12">
					<div className="flex items-center justify-center gap-3 mb-4">
						<div className="text-left">
							<h1 className="text-2xl font-bold text-foreground">
								Welcome back, John!
							</h1>
							<p className="text-muted-foreground">
								Discover amazing events happening around you
							</p>
						</div>
					</div>
				</div>

				{/* Navigation Cards */}
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<Link to="/user/events">
						<Card className="hover:shadow-lg transition rounded-2xl">
							<CardContent className="flex flex-col items-center justify-center p-6 text-center">
								<Calendar className="h-10 w-10 text-primary mb-3" />
								<h3 className="text-lg font-semibold text-foreground">
									Browse Events
								</h3>
								<p className="text-sm text-muted-foreground">
									Find upcoming events near you
								</p>
							</CardContent>
						</Card>
					</Link>

					<Link to="/user/registered-events">
						<Card className="hover:shadow-lg transition rounded-2xl">
							<CardContent className="flex flex-col items-center justify-center p-6 text-center">
								<Ticket className="h-10 w-10 text-primary mb-3" />
								<h3 className="text-lg font-semibold text-foreground">
									My Tickets
								</h3>
								<p className="text-sm text-muted-foreground">
									View and manage your booked tickets
								</p>
							</CardContent>
						</Card>
					</Link>

					<Link to="/profile">
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
					</Link>
				</div>
			</main>
		</div>
	);
}
