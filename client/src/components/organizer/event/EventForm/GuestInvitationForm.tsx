import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { FormikProps } from "formik";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type {
	EventFormValues,
	MailTypes,
} from "@/hooks/events/forms/useCreateEventForm";

const GuestInvitationForm = ({
	formik,
	addPerson,
	disabled,
}: {
	formik: FormikProps<EventFormValues>;
	addPerson: (
		data: { email: string; name: string },
		field: MailTypes
	) => void;
	disabled: boolean;
}) => {
	const [newGuest, setNewGuest] = useState({ name: "", email: "" });

	const addGuest = () => {
		addPerson(newGuest, "guests");
		setNewGuest({ name: "", email: "" });
	};

	const removeGuest = (emailToRemove: string) => {
		formik.setFieldValue(
			"guests",
			formik.values.guests.filter((g) => g.email !== emailToRemove)
		);
	};

	return (
		<div className="space-y-6">
			<div className="flex items-center gap-2 mb-4">
				<div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
					<span className="text-sm font-bold text-primary">4</span>
				</div>
				<h3 className="text-lg font-semibold">Guest Invitations</h3>
			</div>

			{/* Add Guest Name + Email */}
			<div className="space-y-4">
				{!disabled && (
					<>
						<Label className="text-sm font-medium">
							Invite Guests
						</Label>

						<div className="flex gap-2">
							<Input
								type="text"
								disabled={disabled}
								placeholder="Guest name"
								value={newGuest.name}
								onChange={(e) =>
									setNewGuest({
										...newGuest,
										name: e.target.value,
									})
								}
								className="h-12 w-1/3"
							/>
							<Input
								type="email"
								placeholder="Guest email"
								disabled={disabled}
								value={newGuest.email}
								onChange={(e) =>
									setNewGuest({
										...newGuest,
										email: e.target.value,
									})
								}
								className="h-12 w-2/3"
							/>
							<Button
								type="button"
								onClick={addGuest}
								className="h-12 px-6">
								<Plus className="h-4 w-4 mr-2" />
								Add
							</Button>
						</div>
					</>
				)}
				{/* Guest List */}
				{formik.values.guests.length > 0 && (
					<div className="space-y-2">
						<Label className="text-sm font-medium">
							Invited Guests ({formik.values.guests.length})
						</Label>
						<div className="flex flex-wrap gap-2">
							{formik.values.guests.map((guest, index) => (
								<Badge
									key={index}
									variant="secondary"
									className="pr-1">
									{guest.name} ({guest.email})
									{!disabled && (
										<Button
											type="button"
											disabled={disabled}
											variant="ghost"
											size="sm"
											className="h-4 w-4 p-0 ml-2 hover:bg-destructive hover:text-destructive-foreground"
											onClick={() =>
												removeGuest(guest.email)
											}>
											<X className="h-3 w-3" />
										</Button>
									)}
								</Badge>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default GuestInvitationForm;
