import { Button } from "@/components/ui/button";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Plus } from "lucide-react";
import { Link } from "react-router";

import BasicEventCreationForm from "./BasicDetailsForm";
import TicketDetailsForm from "./TicketDetailsForm";
import FoodForm from "./FoodForm";
import GuestInvitationForm from "./GuestInvitationForm";
import JudgesInvitationForm from "./JudgesInvitationForm";
import { useToaster } from "@/hooks/ui/useToaster";
import type { FormikProps } from "formik";
import type {
	EventFormValues,
	MailTypes,
} from "@/hooks/events/forms/useCreateEventForm";
import type { EditEventFormValues } from "@/hooks/events/forms/useEditEventForm";

export default function EventForm({
	formik,
	isLoading,
	addPerson,
	isForEdit,
}: {
	formik: FormikProps<EventFormValues | EditEventFormValues>;
	isLoading: boolean;
	addPerson: (
		data: { email: string; name: string },
		field: MailTypes
	) => void;
	isForEdit: boolean;
}) {
	const { errorToast } = useToaster();

	return (
		<div className="min-h-screen bg-background">
			<div className="pt-32 pb-20 px-4">
				<div className="max-w-4xl mx-auto">
					{/* Back Navigation */}
					<Link
						to="/org/dashboard"
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
						<ArrowLeft className="h-4 w-4" />
						Back to Dashboard
					</Link>

					<Card className="border-0 shadow-2xl">
						<CardHeader className="text-center pb-8">
							<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
								<Plus className="h-8 w-8 text-primary" />
							</div>
							<CardTitle className="text-3xl font-bold">
								{isForEdit ? "Edit Event" : "Create New Event"}
							</CardTitle>
							<CardDescription className="text-muted-foreground">
								Make changes below and Submit
							</CardDescription>
						</CardHeader>

						<CardContent>
							<form
								// onSubmit={formik.handleSubmit}
								className="space-y-8">
								{/* Basic Event Information */}
								<BasicEventCreationForm formik={formik} />

								<Separator />

								{/* Pricing Information */}
								<TicketDetailsForm formik={formik} />

								<Separator />

								{/* Food Options */}
								<FoodForm formik={formik} />

								<Separator />

								{/* Guest Invitations */}
								<GuestInvitationForm
									disabled={isForEdit}
									addPerson={addPerson}
									formik={formik}
								/>

								<Separator />

								<JudgesInvitationForm
									disabled={isForEdit}
									addPerson={addPerson}
									formik={formik}
								/>

								<Separator />

								{/* Submit Button */}
								<div className="flex justify-end space-x-4">
									<Link to="/org/dashboard">
										<Button
											type="button"
											variant="outline"
											className="h-12 px-8 bg-transparent">
											<ArrowLeft className="h-4 w-4" />
											Back to Dashboard
										</Button>
									</Link>
									<Button
										onClick={(e) => {
											e.preventDefault();
											console.log(formik.errors);
											if (
												Object.keys(formik.errors)
													.length
											) {
												errorToast(
													"Fix all errors first"
												);
												return;
											}
											formik.handleSubmit();
										}}
										type="button"
										className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
										disabled={isLoading}>
										{isLoading
											? isForEdit
												? "Saving.."
												: "Creating Event..."
											: isForEdit
											? "Save"
											: "Create Event"}
									</Button>
								</div>
							</form>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
