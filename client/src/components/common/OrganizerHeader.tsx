import { SidebarTrigger } from "../ui/sidebar";
import { Button } from "../ui/button";

export function DashboardHeader() {
	return (
		<div className="flex items-center justify-between p-6 border-b border-primary/20">
			<div className="flex items-center gap-4">
				<SidebarTrigger className="lg:hidden" />
				<div>
					<h1 className="text-2xl font-bold text-foreground">
						Dashboard
					</h1>
					<p className="text-sm text-muted-foreground">
						Manage your events and track performance
					</p>
				</div>
			</div>

			<div className="flex items-center gap-3">
				<Button
					className="bg-primary hover:bg-primary/90 text-primary-foreground"
					asChild>
					<a href="/dashboard/create-event">Create Event</a>
				</Button>
			</div>
		</div>
	);
}
