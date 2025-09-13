import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	LayoutDashboard,
	Calendar,
	Plus,
	Users,
	User,
	DollarSign,
	Ticket,
	TrendingUp,
	MoreHorizontal,
	Edit,
	Eye,
	Trash2,
} from "lucide-react";

// Mock data
const stats = {
	totalEvents: 15,
	ticketsSold: 2847,
	revenue: 45230,
};

const recentEvents = [
	{
		id: 1,
		title: "Summer Music Festival 2024",
		date: "2024-07-15",
		ticketsSold: 1250,
		totalTickets: 1500,
		status: "Active",
	},
	{
		id: 2,
		title: "Tech Innovation Summit",
		date: "2024-08-22",
		ticketsSold: 850,
		totalTickets: 1000,
		status: "Active",
	},
	{
		id: 3,
		title: "Food & Wine Expo",
		date: "2024-09-10",
		ticketsSold: 600,
		totalTickets: 800,
		status: "Draft",
	},
	{
		id: 4,
		title: "Art Gallery Opening",
		date: "2024-07-28",
		ticketsSold: 147,
		totalTickets: 200,
		status: "Ended",
	},
];

const sidebarItems = [
	{ icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
	{ icon: Calendar, label: "My Events", href: "/dashboard/events" },
	{ icon: Plus, label: "Create Event", href: "/dashboard/create" },
	{ icon: Users, label: "Attendees", href: "/dashboard/attendees" },
	{ icon: User, label: "Profile", href: "/dashboard/profile" },
];

function DashboardSidebar() {
	return (
		<Sidebar className="border-r border-primary/20">
			<SidebarHeader className="border-b border-primary/20 p-6">
				<div className="flex items-center gap-3">
					<div className="text-2xl font-bold text-primary">
						Festivo
					</div>
					<Badge variant="secondary">Organizer</Badge>
				</div>
			</SidebarHeader>
			<SidebarContent>
				<SidebarMenu className="p-4">
					{sidebarItems.map((item) => (
						<SidebarMenuItem key={item.label}>
							<SidebarMenuButton
								asChild
								className="w-full justify-start gap-3 p-3 hover:bg-primary/10">
								<a href={item.href}>
									<item.icon className="h-5 w-5" />
									{item.label}
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarContent>
		</Sidebar>
	);
}

export default function Dashboard() {
	return (
		<SidebarProvider>
			<div className="flex min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
				<DashboardSidebar />

				<main className="flex-1 p-6">
					{/* Header */}
					<div className="flex items-center justify-between mb-8">
						<div className="flex items-center gap-4">
							<SidebarTrigger className="lg:hidden" />
							<div>
								<h1 className="text-3xl font-bold text-foreground">
									Dashboard
								</h1>
								<p className="text-muted-foreground">
									Manage your events and track performance
								</p>
							</div>
						</div>

						<div className="flex items-center gap-3">
							<Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
								<Plus className="h-4 w-4 mr-2" />
								Create Event
							</Button>
							<Avatar>
								<AvatarImage src="/organizer-profile.jpg" />
								<AvatarFallback>JD</AvatarFallback>
							</Avatar>
						</div>
					</div>

					{/* Quick Stats */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
						<Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
							<CardContent className="p-6">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Total Events
										</p>
										<p className="text-3xl font-bold text-foreground">
											{stats.totalEvents}
										</p>
									</div>
									<div className="p-3 bg-primary/10 rounded-lg">
										<Calendar className="h-6 w-6 text-primary" />
									</div>
								</div>
								<div className="flex items-center gap-1 mt-2">
									<TrendingUp className="h-4 w-4 text-green-500" />
									<span className="text-sm text-green-500">
										+12% from last month
									</span>
								</div>
							</CardContent>
						</Card>

						<Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
							<CardContent className="p-6">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Tickets Sold
										</p>
										<p className="text-3xl font-bold text-foreground">
											{stats.ticketsSold.toLocaleString()}
										</p>
									</div>
									<div className="p-3 bg-primary/10 rounded-lg">
										<Ticket className="h-6 w-6 text-primary" />
									</div>
								</div>
								<div className="flex items-center gap-1 mt-2">
									<TrendingUp className="h-4 w-4 text-green-500" />
									<span className="text-sm text-green-500">
										+8% from last month
									</span>
								</div>
							</CardContent>
						</Card>

						<Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
							<CardContent className="p-6">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Revenue
										</p>
										<p className="text-3xl font-bold text-foreground">
											${stats.revenue.toLocaleString()}
										</p>
									</div>
									<div className="p-3 bg-primary/10 rounded-lg">
										<DollarSign className="h-6 w-6 text-primary" />
									</div>
								</div>
								<div className="flex items-center gap-1 mt-2">
									<TrendingUp className="h-4 w-4 text-green-500" />
									<span className="text-sm text-green-500">
										+15% from last month
									</span>
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Recent Events */}
					<Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
						<CardHeader>
							<CardTitle className="flex items-center justify-between">
								Recent Events
								<Button variant="outline" size="sm">
									View All
								</Button>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Event</TableHead>
										<TableHead>Date</TableHead>
										<TableHead>Tickets Sold</TableHead>
										<TableHead>Status</TableHead>
										<TableHead className="text-right">
											Actions
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{recentEvents.map((event) => (
										<TableRow key={event.id}>
											<TableCell className="font-medium">
												{event.title}
											</TableCell>
											<TableCell>
												{new Date(
													event.date
												).toLocaleDateString("en-US", {
													month: "short",
													day: "numeric",
													year: "numeric",
												})}
											</TableCell>
											<TableCell>
												<div className="flex items-center gap-2">
													<span>
														{event.ticketsSold}/
														{event.totalTickets}
													</span>
													<div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
														<div
															className="h-full bg-primary rounded-full"
															style={{
																width: `${
																	(event.ticketsSold /
																		event.totalTickets) *
																	100
																}%`,
															}}
														/>
													</div>
												</div>
											</TableCell>
											<TableCell>
												<Badge
													variant={
														event.status ===
														"Active"
															? "default"
															: event.status ===
															  "Draft"
															? "secondary"
															: "outline"
													}
													className={
														event.status ===
														"Active"
															? "bg-primary text-primary-foreground"
															: ""
													}>
													{event.status}
												</Badge>
											</TableCell>
											<TableCell className="text-right">
												<DropdownMenu>
													<DropdownMenuTrigger
														asChild>
														<Button
															variant="ghost"
															size="sm">
															<MoreHorizontal className="h-4 w-4" />
														</Button>
													</DropdownMenuTrigger>
													<DropdownMenuContent align="end">
														<DropdownMenuItem>
															<Eye className="h-4 w-4 mr-2" />
															View
														</DropdownMenuItem>
														<DropdownMenuItem>
															<Edit className="h-4 w-4 mr-2" />
															Edit
														</DropdownMenuItem>
														<DropdownMenuItem className="text-destructive">
															<Trash2 className="h-4 w-4 mr-2" />
															Delete
														</DropdownMenuItem>
													</DropdownMenuContent>
												</DropdownMenu>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				</main>
			</div>
		</SidebarProvider>
	);
}
