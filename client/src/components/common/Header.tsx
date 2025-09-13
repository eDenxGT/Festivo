import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Header({
	role = "user",
	isLogged,
	handleLogout,
}: {
	role?: string;
	isLogged?: boolean;
	handleLogout?: () => void;
}) {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
				isScrolled
					? "w-[95%] max-w-6xl backdrop-blur-xl bg-background/80 border border-border/50 rounded-2xl shadow-lg"
					: "w-[90%] max-w-5xl backdrop-blur-md bg-background/60 border border-border/30 rounded-3xl"
			}`}>
			<div className="flex items-center justify-between px-6 py-4">
				{/* Logo */}
				<Link to="/" className="flex items-center space-x-2">
					<div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
						Festivo
					</div>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center space-x-8">
					<Link
						to="/"
						className="text-foreground/80 hover:text-primary transition-colors font-medium">
						Home
					</Link>
					<Link
						to="/"
						className="text-foreground/80 hover:text-primary transition-colors font-medium">
						Events
					</Link>
					<Link
						to="/"
						className="text-foreground/80 hover:text-primary transition-colors font-medium">
						About
					</Link>
					<Link
						to="/"
						className="text-foreground/80 hover:text-primary transition-colors font-medium">
						Contact
					</Link>
				</nav>

				{/* Desktop Auth Buttons */}
				<div className="hidden md:flex items-center space-x-3">
					{isLogged ? (
						<Button
							onClick={handleLogout}
							className="bg-primary text-primary-foreground hover:bg-primary/90">
							Logout
						</Button>
					) : (
						<>
							<Button
								variant="ghost"
								asChild
								className="text-foreground/80 hover:text-primary">
								<Link to={`/${role === "organizer" ? "org" : role}/signin`}>Sign In</Link>
							</Button>
							<Button
								asChild
								className="bg-primary text-primary-foreground hover:bg-primary/90">
								<Link to={`/${role === "organizer" ? "org" : role}/signup`}>Sign Up</Link>
							</Button>
						</>
					)}
				</div>

				{/* Mobile Menu Button */}
				<Button
					variant="ghost"
					size="icon"
					className="md:hidden"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
					{isMobileMenuOpen ? (
						<X className="h-5 w-5" />
					) : (
						<Menu className="h-5 w-5" />
					)}
				</Button>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl rounded-b-2xl">
					<nav className="flex flex-col space-y-4 px-6 py-4">
						<Link
							to="/"
							className="text-foreground/80 hover:text-primary transition-colors font-medium">
							Home
						</Link>
						<Link
							to="/"
							className="text-foreground/80 hover:text-primary transition-colors font-medium">
							Events
						</Link>
						<Link
							to="/"
							className="text-foreground/80 hover:text-primary transition-colors font-medium">
							About
						</Link>
						<Link
							to="/"
							className="text-foreground/80 hover:text-primary transition-colors font-medium">
							Contact
						</Link>
						<div className="flex flex-col space-y-2 pt-4 border-t border-border/50">
							{isLogged ? (
								<Button
									onClick={handleLogout}
									className="bg-primary text-primary-foreground hover:bg-primary/90">
									Logout
								</Button>
							) : (
								<>
									<Button
										variant="ghost"
										asChild
										className="justify-start text-foreground/80 hover:text-primary">
										<Link to={`/${role === "organizer" ? "org" : role}/signin`}>
											Sign In
										</Link>
									</Button>
									<Button
										asChild
										className="bg-primary text-primary-foreground hover:bg-primary/90">
										<Link to={`/${role === "organizer" ? "org" : role}/signup`}>
											Sign Up
										</Link>
									</Button>
								</>
							)}
						</div>
					</nav>
				</div>
			)}
		</header>
	);
}
