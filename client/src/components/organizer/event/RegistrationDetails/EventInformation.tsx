import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { IEvent } from "@/types/EventTypes";
import { Calendar, MapPin } from "lucide-react";
import { formatDate } from "@/utils/helpers/date.formatter";

const EventInformation = ({ eventData }: { eventData: IEvent }) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<Calendar className="h-5 w-5" />
					Event Information
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div>
					<label className="text-sm font-medium text-gray-500">
						Event
					</label>
					<p className="text-lg font-semibold">{eventData?.title}</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-1 gap-4">
					<div>
						<label className="text-sm font-medium text-gray-500">
							Date
						</label>
						<p className="text-sm">{formatDate(eventData?.date)}</p>
					</div>
					<div></div>
				</div>

				<div className="flex items-start gap-2">
					<MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
					<div>
						<label className="text-sm font-medium text-gray-500">
							{eventData?.location}
						</label>
						<p className="text-sm">{eventData?.floor_details}</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default EventInformation;
