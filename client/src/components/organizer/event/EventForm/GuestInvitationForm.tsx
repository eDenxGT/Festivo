import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { FormikProps } from "formik";
import { Mail, Plus, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type {
	EventFormValues,
	MailTypes,
} from "@/hooks/events/forms/useCreateEventForm";

const GuestInvitationForm = ({
	formik,
	addEmail,
}: {
	formik: FormikProps<EventFormValues>;
	addEmail: (email: string, field: MailTypes) => void;
}) => {
	const [newGuestEmail, setNewGuestEmail] = useState("");
	const [suggestedEmails] = useState(["aadilmk@gmail.com"]);

	const addGuestEmail = (email: string) => {
		addEmail(email, "guest_emails");
		setNewGuestEmail("");
	};

	const removeGuestEmail = (emailToRemove: string) => {
		formik.setFieldValue(
			"guest_emails",
			formik.values.guest_emails.filter(
				(email) => email !== emailToRemove
			)
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

			{/* Add Guest Email */}
			<div className="space-y-4">
				<Label className="text-sm font-medium">
					<Mail className="inline h-4 w-4 mr-1" />
					Invite guests via email
				</Label>

				<div className="flex gap-2">
					<Input
						type="email"
						placeholder="Enter guest email address"
						value={newGuestEmail}
						onChange={(e) => setNewGuestEmail(e.target.value)}
						className="h-12"
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								e.preventDefault();
								addGuestEmail(newGuestEmail);
							}
						}}
					/>
					<Button
						type="button"
						onClick={() => addGuestEmail(newGuestEmail)}
						className="h-12 px-6">
						<Plus className="h-4 w-4 mr-2" />
						Add
					</Button>
				</div>

				{/* Suggested Emails */}
				{suggestedEmails.length > 0 && (
					<div className="space-y-2">
						<Label className="text-xs text-muted-foreground">
							Quick add:
						</Label>
						<div className="flex flex-wrap gap-2">
							{suggestedEmails.map((email) => (
								<Button
									key={email}
									type="button"
									variant="outline"
									size="sm"
									onClick={() => addGuestEmail(email)}
									disabled={formik.values.guest_emails.includes(
										email
									)}>
									{email}
								</Button>
							))}
						</div>
					</div>
				)}

				{/* Guest Email List */}
				{formik.values.guest_emails.length > 0 && (
					<div className="space-y-2">
						<Label className="text-sm font-medium">
							Invited Guests ({formik.values.guest_emails.length})
						</Label>
						<div className="flex flex-wrap gap-2">
							{formik.values.guest_emails.map((email, index) => (
								<Badge
									key={index}
									variant="secondary"
									className="pr-1">
									{email}
									<Button
										type="button"
										variant="ghost"
										size="sm"
										className="h-4 w-4 p-0 ml-2 hover:bg-destructive hover:text-destructive-foreground"
										onClick={() => removeGuestEmail(email)}>
										<X className="h-3 w-3" />
									</Button>
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
