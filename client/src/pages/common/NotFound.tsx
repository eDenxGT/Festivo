import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export default function NotFoundPage() {
	const navigate = useNavigate();
	return (
		<div className="min-h-screen bg-background flex items-center justify-center px-4">
			<Card className="w-full max-w-md text-center border-0 shadow-2xl">
				<CardHeader className="pb-8">
					<div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
						<div className="text-4xl font-bold text-primary">
							404
						</div>
					</div>
					<CardTitle className="text-2xl font-bold">
						Page Not Found
					</CardTitle>
					<CardDescription className="text-muted-foreground">
						Sorry, we couldn't find the page you're looking for. The
						page might have been moved, deleted, or you entered the
						wrong URL.
					</CardDescription>
				</CardHeader>

				<CardContent className="space-y-6">
					<div className="space-y-3">
						<Button
							onClick={() => navigate(-1)}
							className="w-full h-12 bg-primary cursor-pointer text-primary-foreground hover:bg-primary/90">
							<ArrowLeft className="h-4 w-4 mr-2" />
							Go Back
						</Button>
					</div>

					<div className="pt-6 border-t border-border/50">
						<p className="text-sm text-muted-foreground">
							Need help? Contact Support
						</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
