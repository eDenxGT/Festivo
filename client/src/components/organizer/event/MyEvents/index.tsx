import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { IEvent } from "@/types/EventTypes";
import EventsTable from "./EventsTable";
import { useNavigate } from "react-router";
import { PATH } from "@/utils/constants/paths";

const MyEvents = ({ events }: { events: IEvent[] }) => {
	const navigate = useNavigate();

	const handleEditEvent = (eventId: string) => {
		navigate(`${PATH.ORG.EDIT_EVENT}/${eventId}`);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br pt-32 from-black-50 to-pink-50 p-6">
			<div className="max-w-7xl mx-auto">
				<div className="mb-8">
					<h1 className="text-4xl font-bold text-primary mb-2">
						My Events
					</h1>
					<p className="text-gray-600">
						Manage and view all your organized events
					</p>
				</div>

				<Card className="shadow-lg">
					<CardHeader>
						<CardTitle className="text-2xl text-secondary">
							Events Overview
						</CardTitle>
					</CardHeader>
					<CardContent>
						{!events || events?.length === 0 ? (
							<div className="text-center py-12">
								<p className="text-gray-500 text-lg">
									No events found
								</p>
								<p className="text-gray-400">
									Create your first event to get started
								</p>
							</div>
						) : (
							<div className="overflow-x-auto">
								<EventsTable
									events={events}
									handleEditEvent={handleEditEvent}
								/>
							</div>
						)}
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default MyEvents;
