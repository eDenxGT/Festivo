import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Edit, Eye } from "lucide-react";
import { EventDetailsDialog } from "./EventDetailsDialog";
import type { IEvent } from "@/types/EventTypes";
import { formatDate } from "@/utils/helpers/date.formatter";
import { Button } from "@/components/ui/button";
const EventsTable = ({
	events,
	handleEditEvent,
}: {
	events: IEvent[];
	handleEditEvent: (event_id: string) => void;
}) => {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="font-semibold text-black-800">
						Event Title
					</TableHead>
					<TableHead className="font-semibold text-black-800">
						Date
					</TableHead>
					<TableHead className="font-semibold text-black-800">
						Location
					</TableHead>
					<TableHead className="font-semibold text-black-800">
						Type
					</TableHead>
					<TableHead className="font-semibold text-black-800">
						Max Tickets
					</TableHead>
					<TableHead className="font-semibold text-black-800">
						Actions
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{events?.map((event) => (
					<TableRow key={event.id} className="hover:bg-black-50">
						<TableCell>
							<div>
								<p className="font-medium text-gray-900">
									{event.title}
								</p>
								<p className="text-sm text-gray-500 truncate max-w-xs">
									{event.description}
								</p>
							</div>
						</TableCell>
						<TableCell>
							<p className="text-sm font-medium">
								{formatDate(event.date)}
							</p>
						</TableCell>
						<TableCell>
							<div>
								<p className="text-sm font-medium">
									{event.location}
								</p>
								{event.floor_details && (
									<p className="text-xs text-gray-500">
										{event.floor_details}
									</p>
								)}
							</div>
						</TableCell>
						<TableCell>
							<Badge
								variant={
									event.is_paid ? "default" : "secondary"
								}>
								{event.is_paid
									? `Paid - $${event.price}`
									: "Free"}
							</Badge>
						</TableCell>
						<TableCell>
							<span className="text-sm font-medium">
								{event.max_tickets}
							</span>
						</TableCell>
						<TableCell>
							<div className="flex gap-2">
								<Dialog>
									<DialogTrigger asChild>
										<Button
											variant="outline"
											size="sm"
											className="text-orange-400 border-black-200 hover:bg-black-50 bg-transparent">
											<Eye className="h-4 w-4 mr-1" />
											Details
										</Button>
									</DialogTrigger>
									<EventDetailsDialog event={event} />
								</Dialog>

								<Button
									variant="outline"
									size="sm"
									onClick={() => handleEditEvent(event.id)}
									className="text-blue-600 border-blue-200 hover:bg-blue-50">
									<Edit className="h-4 w-4 mr-1" />
									Edit
								</Button>
							</div>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default EventsTable;
