import EventsTable from "@/components/organizer/event/MyEvents/EventsTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { IEvent } from "@/types/EventTypes";
import { debounce } from "lodash";
import { useEffect, useState } from "react";

const AllEvents = ({
	events,
	setDebouncedSearch,
	handleEventRegister,
}: {
	setDebouncedSearch: (search: string) => void;
	events: IEvent[];
	handleEventRegister: (event_id: string) => void;
}) => {
	const [search, setSearch] = useState("");

	useEffect(() => {
		const handleSearch = debounce(() => {
			setDebouncedSearch(search);
		}, 1000);

		handleSearch();
	}, [search]);

	return (
		<div className="min-h-screen bg-gradient-to-br pt-32 from-black-50 to-pink-50 p-6">
			<div className="max-w-7xl mx-auto">
				<div className="mb-8">
					<h1 className="text-4xl font-bold text-primary mb-2">
						Events
					</h1>
					<p className="text-gray-600">
						Checkout exciting events and make connections
					</p>
				</div>

				<Card className="shadow-lg">
					<CardHeader>
						<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
							<CardTitle className="text-2xl text-secondary">
								Events Overview
							</CardTitle>
							<Input
								type="text"
								placeholder="Search events..."
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
							/>
						</div>
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
									handleAction={handleEventRegister}
									isForOrganizer={false}
								/>
							</div>
						)}
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default AllEvents;
