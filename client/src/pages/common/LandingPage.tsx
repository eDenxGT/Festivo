import { Header } from "@/components/common/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Ticket, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingPage() {
	return (
		<div className="min-h-screen bg-background">
			<Header />

			{/* Hero Section */}
			<section className="pt-32 pb-20 px-4">
				<div className="max-w-6xl mx-auto text-center">
					<Badge
						variant="secondary"
						className="mb-6 bg-accent text-accent-foreground">
						🎉 Now Live - Join events and win rewards
					</Badge>
					<h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
						Join{"  "}
						<span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
							Events
						</span>{" "}
						Easily
					</h1>
					<p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
						Festivo is the all-in-one platform for event management
						and ticketing. From intimate gatherings to large
						festivals, we make event planning effortless.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							size="lg"
							className="bg-primary text-primary-foreground hover:bg-primary/90">
							<Link to="/user/signup">
								Start Exploring Events
							</Link>
						</Button>
						<Button size="lg" variant="outline">
							<Link to="/org/signup">
								Wanna be an Organizer ?
							</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 px-4 bg-muted/30">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Everything You Need to Succeed
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Powerful tools designed to make your event planning
							journey smooth and successful.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
							<CardContent className="p-8 text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
									<Ticket className="h-8 w-8 text-primary" />
								</div>
								<h3 className="text-xl font-semibold mb-4">
									Smart Ticketing
								</h3>
								<p className="text-muted-foreground">
									Create custom ticket types, set pricing
									tiers, and manage sales with our intelligent
									ticketing system.
								</p>
							</CardContent>
						</Card>

						<Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
							<CardContent className="p-8 text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
									<Users className="h-8 w-8 text-primary" />
								</div>
								<h3 className="text-xl font-semibold mb-4">
									Attendee Management
								</h3>
								<p className="text-muted-foreground">
									Track registrations, send updates, and
									manage check-ins with our comprehensive
									attendee tools.
								</p>
							</CardContent>
						</Card>

						<Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
							<CardContent className="p-8 text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
									<Zap className="h-8 w-8 text-primary" />
								</div>
								<h3 className="text-xl font-semibold mb-4">
									Real-time Analytics
								</h3>
								<p className="text-muted-foreground">
									Get insights into ticket sales, attendee
									demographics, and event performance in
									real-time.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Trust Section */}
			<section className="py-20 px-4 bg-muted/30">
				<div className="max-w-4xl mx-auto text-center">
					<div className="flex items-center justify-center gap-2 mb-6">
						<Shield className="h-8 w-8 text-primary" />
						<h2 className="text-3xl font-bold">
							Trusted by Event Organizers
						</h2>
					</div>
					<p className="text-xl text-muted-foreground mb-12">
						Join thousands of successful event organizers who trust
						Festivo for their events
					</p>

					<div className="grid md:grid-cols-3 gap-8 text-center">
						<div>
							<div className="text-4xl font-bold text-primary mb-2">
								50K+
							</div>
							<div className="text-muted-foreground">
								Events Created
							</div>
						</div>
						<div>
							<div className="text-4xl font-bold text-primary mb-2">
								2M+
							</div>
							<div className="text-muted-foreground">
								Tickets Sold
							</div>
						</div>
						<div>
							<div className="text-4xl font-bold text-primary mb-2">
								99.9%
							</div>
							<div className="text-muted-foreground">Uptime</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						Ready to Create Your Next Event?
					</h2>
					<p className="text-xl text-muted-foreground mb-8">
						Join Festivo today and start creating memorable
						experiences for your audience.
					</p>
					<Button
						size="lg"
						asChild
						className="bg-primary text-primary-foreground hover:bg-primary/90">
						<Link to="/user/signup">
							Get Started for Free{" "}
							<ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-secondary text-secondary-foreground py-12 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="grid md:grid-cols-4 gap-8">
						<div>
							<div className="text-2xl font-bold mb-4 text-primary">
								Festivo
							</div>
							<p className="text-secondary-foreground/80">
								Making event management effortless for
								organizers worldwide.
							</p>
						</div>
						<div>
							<h4 className="font-semibold mb-4">Product</h4>
							<div className="space-y-2 text-secondary-foreground/80">
								<div>Features</div>
								<div>Pricing</div>
								<div>API</div>
							</div>
						</div>
						<div>
							<h4 className="font-semibold mb-4">Company</h4>
							<div className="space-y-2 text-secondary-foreground/80">
								<div>About</div>
								<div>Blog</div>
								<div>Careers</div>
							</div>
						</div>
						<div>
							<h4 className="font-semibold mb-4">Support</h4>
							<div className="space-y-2 text-secondary-foreground/80">
								<div>Help Center</div>
								<div>Contact</div>
								<div>Status</div>
							</div>
						</div>
					</div>
					<div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/60">
						© 2024 Festivo. All rights reserved.
					</div>
				</div>
			</footer>
		</div>
	);
}
