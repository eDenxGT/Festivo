import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import type {
	FoodStatus,
	IRegistrationWithEvent,
	TicketStatus,
} from "@/types/RegistrationTypes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ParticipantInformation from "./ParticipantInformation";
import EventInformation from "./EventInformation";

export default function RegistrationPage({
	registrationData,
	handleTicketStatusChange,
	handleFoodStatusChange,
}: {
	registrationData: IRegistrationWithEvent;
	handleTicketStatusChange: (status: TicketStatus) => void;
	handleFoodStatusChange: (
		meal: "morning" | "noon" | "evening",
		status: FoodStatus
	) => void;
}) {
	const navigate = useNavigate();

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
			<div className="max-w-2xl mx-auto pt-8">
				<div className="mb-6">
					<Button
						variant="ghost"
						onClick={() => navigate("/qr-scanner")}
						className="mb-4">
						<ArrowLeft className="h-4 w-4 mr-2" />
						Back to Scanner
					</Button>
					<h1 className="text-3xl font-bold text-gray-900 mb-2">
						Registration Details
					</h1>
					<p className="text-gray-600">
						Registration ID: {registrationData?.id}
					</p>
				</div>

				<div className="space-y-6">
					<ParticipantInformation
						registrationData={registrationData}
						handleFoodStatusChange={handleFoodStatusChange}
						handleTicketStatusChange={handleTicketStatusChange}
					/>
					{/* Event Information */}
					<EventInformation
						eventData={registrationData?.eventDetails}
					/>
					{/* Special Requests */}
					{registrationData?.participant_details?.is_special && (
						<Card>
							<CardHeader>
								<CardTitle className="text-lg">
									Special Requests
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-gray-600">
									Vegetarian meal, wheelchair access
								</p>
							</CardContent>
						</Card>
					)}

					{/* Check-in Button */}
					<div className="flex items-center justify-end gap-4">
						<Button
							variant="default"
							onClick={() => navigate("/org/qr-scanner")}
							size="lg">
							Scan Next
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
