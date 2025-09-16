import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type {
	FoodStatus,
	IRegistration,
	TicketStatus,
	UserEventRole,
} from "@/types/RegistrationTypes";
import { formatDate } from "@/utils/helpers/date.formatter";
import { CheckCircle, Crown, Mail, User, Utensils } from "lucide-react";

const ParticipantInformation = ({
	registrationData,
	handleTicketStatusChange,
	handleFoodStatusChange,
}: {
	registrationData: IRegistration;
	handleTicketStatusChange: (status: TicketStatus) => void;
	handleFoodStatusChange: (
		meal: "morning" | "noon" | "evening",
		status: FoodStatus
	) => void;
}) => {
	const getStatusVariant = (status: string) => {
		switch (status) {
			case "used":
			case "claimed":
				return "default";
			case "valid":
			case "available":
				return "secondary";
			case "not_applicable":
				return "destructive";
			default:
				return "outline";
		}
	};

	const getRoleColor = (role: UserEventRole) => {
		switch (role) {
			case "judge":
				return "bg-purple-100 text-purple-800 border-purple-200";
			case "guest":
				return "bg-blue-100 text-blue-800 border-blue-200";
			default:
				return "bg-green-100 text-green-800 border-green-200";
		}
	};
	return (
		// {/* Participant Information */}
		<>
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<User className="h-5 w-5" />
						Participant Information
						{registrationData?.participant_details?.is_special && (
							<Crown className="h-4 w-4 text-yellow-500" />
						)}
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label className="text-sm font-medium text-gray-500">
								Name
							</label>
							<p className="text-lg font-semibold">
								{registrationData?.participant_details?.name}
							</p>
							{registrationData?.participant_details
								?.is_special && (
								<Badge
									variant="outline"
									className="text-yellow-600 border-yellow-600 mt-1">
									Special Participant
								</Badge>
							)}
						</div>
						<div>
							<label className="text-sm font-medium text-gray-500">
								Role
							</label>
							<div className="flex items-center gap-2">
								<Badge
									className={getRoleColor(
										registrationData?.role
									)}>
									{registrationData?.role}
								</Badge>
							</div>
						</div>
					</div>

					<div className="flex items-center gap-2">
						<Mail className="h-4 w-4 text-gray-500" />
						<span className="text-sm">
							{registrationData?.participant_details?.email}
						</span>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
						<div>
							<label className="text-sm font-medium text-gray-500">
								Registered
							</label>
							<p>{formatDate(registrationData?.created_at!)}</p>
						</div>
						<div>
							<label className="text-sm font-medium text-gray-500">
								Last Updated
							</label>
							<p>{formatDate(registrationData?.updated_at!)}</p>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<CheckCircle className="h-5 w-5" />
						Entry Ticket Status
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="flex items-center justify-between">
						<div>
							<label className="text-sm font-medium text-gray-500">
								Current Status
							</label>
							<div className="flex items-center gap-2 mt-1">
								<Badge
									variant={getStatusVariant(
										registrationData?.entry_ticket_status
									)}>
									{registrationData?.entry_ticket_status}
								</Badge>
							</div>
						</div>
						<div className="flex gap-2">
							<Button
								size="sm"
								variant={"default"}
								disabled={
									registrationData?.entry_ticket_status ===
									"used"
								}
								onClick={() =>
									handleTicketStatusChange("used")
								}>
								Mark Used
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Utensils className="h-5 w-5" />
						Food Coupons
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					{(["morning", "noon", "evening"] as const).map((meal) => (
						<div
							key={meal}
							className="flex items-center justify-between p-3 border rounded-lg">
							<div>
								<label className="text-sm font-medium capitalize">
									{meal} Meal
								</label>
								<div className="flex items-center gap-2 mt-1">
									<Badge
										variant={getStatusVariant(
											registrationData?.food_coupons[
												meal
											] || "not_applicable"
										)}>
										{registrationData?.food_coupons[meal] ||
											"not_applicable"}
									</Badge>
								</div>
							</div>
							<div className="flex gap-1">
								<Button
									size="sm"
									disabled={
										registrationData?.food_coupons[meal] ===
											"claimed" ||
										registrationData?.food_coupons[meal] ===
											"not_applicable"
									}
									variant={"default"}
									onClick={() =>
										handleFoodStatusChange(meal, "claimed")
									}>
									Claim
								</Button>
							</div>
						</div>
					))}
				</CardContent>
			</Card>
		</>
	);
};

export default ParticipantInformation;
