import {
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import type { IEvent } from "@/types/EventTypes";
import {
	CalendarDays,
	DollarSign,
	MapPin,
	Users,
	Utensils,
} from "lucide-react";

export const EventDetailsDialog: React.FC<{ event: IEvent }> = ({ event }) => {
	const getFoodOptionsText = () => {
		if (!event.food_available || !event.food_options)
			return "No food available";

		const options = [];
		if (event.food_options.morning) options.push("Morning");
		if (event.food_options.noon) options.push("Noon");
		if (event.food_options.evening) options.push("Evening");

		return options.length > 0 ? options.join(", ") : "Food available";
	};

	return (
		<DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
			<DialogHeader>
				<DialogTitle className="text-2xl font-bold text-primary">
					{event.title}
				</DialogTitle>
			</DialogHeader>

			<div className="space-y-6">
				<div>
					<h3 className="text-lg font-semibold mb-2 text-gray-800">
						Description
					</h3>
					<p className="text-gray-600">{event.description}</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="space-y-3">
						<div className="flex items-center gap-2">
							<CalendarDays className="h-5 w-5 text-primary" />
							<div>
								<p className="font-medium text-gray-800">
									Date & Time
								</p>
								<p className="text-sm text-gray-600">
									{new Date(event.date).toLocaleString()}
								</p>
							</div>
						</div>

						<div className="flex items-center gap-2">
							<MapPin className="h-5 w-5 text-primary" />
							<div>
								<p className="font-medium text-gray-800">
									Location
								</p>
								<p className="text-sm text-gray-600">
									{event.location}
								</p>
								{event.floor_details && (
									<p className="text-sm text-gray-500">
										{event.floor_details}
									</p>
								)}
							</div>
						</div>

						<div className="flex items-center gap-2">
							<Users className="h-5 w-5 text-primary" />
							<div>
								<p className="font-medium text-gray-800">
									Max Tickets
								</p>
								<p className="text-sm text-gray-600">
									{event.max_tickets}
								</p>
							</div>
						</div>
					</div>

					<div className="space-y-3">
						<div className="flex items-center gap-2">
							<DollarSign className="h-5 w-5 text-primary" />
							<div>
								<p className="font-medium text-gray-800">
									Pricing
								</p>
								<p className="text-sm text-gray-600">
									{event.is_paid ? `$${event.price}` : "Free"}
								</p>
							</div>
						</div>

						<div className="flex items-center gap-2">
							<Utensils className="h-5 w-5 text-primary" />
							<div>
								<p className="font-medium text-gray-800">
									Food
								</p>
								<p className="text-sm text-gray-600">
									{getFoodOptionsText()}
								</p>
							</div>
						</div>
					</div>
				</div>

				{event.guests.length > 0 && (
					<div>
						<h3 className="text-lg font-semibold mb-2 text-gray-800">
							Special Guests
						</h3>
						<div className="space-y-2">
							{event.guests.map((guest, index) => (
								<div
									key={index}
									className="flex items-center justify-between p-2 bg-gray-50 rounded">
									<span className="font-medium">
										{guest.name}
									</span>
									<span className="text-sm text-gray-600">
										{guest.email}
									</span>
								</div>
							))}
						</div>
					</div>
				)}

				{event.judges.length > 0 && (
					<div>
						<h3 className="text-lg font-semibold mb-2 text-gray-800">
							Judges
						</h3>
						<div className="space-y-2">
							{event.judges.map((judge, index) => (
								<div
									key={index}
									className="flex items-center justify-between p-2 bg-gray-50 rounded">
									<span className="font-medium">
										{judge.name}
									</span>
									<span className="text-sm text-gray-600">
										{judge.email}
									</span>
								</div>
							))}
						</div>
					</div>
				)}

				<div className="pt-4 border-t">
					<div className="flex justify-between text-sm text-gray-500">
						<span>
							Created:{" "}
							{new Date(event.created_at).toLocaleString()}
						</span>
						<span>
							Updated:{" "}
							{new Date(event.updated_at).toLocaleString()}
						</span>
					</div>
				</div>
			</div>
		</DialogContent>
	);
};
