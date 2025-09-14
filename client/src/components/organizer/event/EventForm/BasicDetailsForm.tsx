import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import type { FormikProps } from "formik";
import { CalendarIcon, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { EventFormValues } from "@/hooks/events/forms/useCreateEventForm";

const BasicEventCreationForm = ({
	formik,
}: {
	formik: FormikProps<EventFormValues>;
}) => {
	return (
		<div className="space-y-6">
			<div className="flex items-center gap-2 mb-4">
				<div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
					<span className="text-sm font-bold text-primary">1</span>
				</div>
				<h3 className="text-lg font-semibold">Basic Information</h3>
			</div>

			{/* Event Title */}
			<div className="space-y-2">
				<Label htmlFor="title" className="text-sm font-medium">
					Event Title *
				</Label>
				<Input
					id="title"
					name="title"
					placeholder="Enter your event title"
					className="h-12"
					value={formik.values.title}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.errors.title && formik.touched.title && (
					<p className="text-sm text-destructive">
						{formik.errors.title}
					</p>
				)}
			</div>

			{/* Event Description */}
			<div className="space-y-2">
				<Label htmlFor="description" className="text-sm font-medium">
					Event Description *
				</Label>
				<Textarea
					id="description"
					name="description"
					placeholder="Describe your event in detail"
					className="min-h-24"
					value={formik.values.description}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.errors.description && formik.touched.description && (
					<p className="text-sm text-destructive">
						{formik.errors.description}
					</p>
				)}
			</div>

			{/* Location and Floor Details */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="space-y-2">
					<Label htmlFor="location" className="text-sm font-medium">
						<MapPin className="inline h-4 w-4 mr-1" />
						Location *
					</Label>
					<Input
						id="location"
						name="location"
						placeholder="Event venue address"
						className="h-12"
						value={formik.values.location}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.errors.location && formik.touched.location && (
						<p className="text-sm text-destructive">
							{formik.errors.location}
						</p>
					)}
				</div>

				<div className="space-y-2">
					<Label
						htmlFor="floor_details"
						className="text-sm font-medium">
						Floor Details
					</Label>
					<Input
						id="floor_details"
						name="floor_details"
						placeholder="Floor, room number, etc."
						className="h-12"
						value={formik.values.floor_details}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.errors.floor_details &&
						formik.touched.floor_details && (
							<p className="text-sm text-destructive">
								{formik.errors.floor_details}
							</p>
						)}
				</div>
			</div>

			{/* Date and Time */}
			<div className="space-y-2">
				<Label className="text-sm font-medium">
					<CalendarIcon className="inline h-4 w-4 mr-1" />
					Event Date *
				</Label>
				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							className={cn(
								"w-full h-12 justify-start text-left font-normal",
								!formik.values.date && "text-muted-foreground"
							)}>
							<CalendarIcon className="mr-2 h-4 w-4" />
							{formik.values.date
								? format(formik.values.date, "PPP")
								: "Pick a date"}
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0">
						<Calendar
							mode="single"
							selected={formik.values.date}
							onSelect={(date) =>
								formik.setFieldValue("date", date)
							}
							disabled={(date) => date < new Date()}
							initialFocus
						/>
					</PopoverContent>
				</Popover>
				{formik.errors.date && formik.touched.date && (
					<p className="text-sm text-destructive">
						{formik.errors.date}
					</p>
				)}
			</div>
		</div>
	);
};

export default BasicEventCreationForm;
