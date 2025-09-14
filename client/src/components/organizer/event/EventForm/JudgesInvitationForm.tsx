import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { FormikProps } from "formik";
import { Mail, Plus, X } from "lucide-react";
import { useState } from "react";
import { useToaster } from "@/hooks/ui/useToaster";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type {
	EventFormValues,
	MailTypes,
} from "@/hooks/events/forms/useCreateEventForm";

const JudgesInvitationForm = ({
	formik,
	addEmail,
}: {
	formik: FormikProps<EventFormValues>;
	addEmail: (email: string, field: MailTypes) => void;
}) => {
	const [newJudgesEmail, setNewJudgesEmail] = useState("");
	const [suggestedEmails] = useState(["aadilmk@gmail.com"]);

	const addJudgesEmail = (email: string) => {
		addEmail(email, "judges_emails");
		setNewJudgesEmail("");
	};

	const removeJudgesEmail = (emailToRemove: string) => {
		formik.setFieldValue(
			"judges_emails",
			formik.values.judges_emails.filter(
				(email) => email !== emailToRemove
			)
		);
	};

	return (
		<div className="space-y-6">
			<div className="flex items-center gap-2 mb-4">
				<div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
					<span className="text-sm font-bold text-primary">5</span>
				</div>
				<h3 className="text-lg font-semibold">Judges Invitations</h3>
			</div>

			{/* Add Judges Email */}
			<div className="space-y-4">
				<Label className="text-sm font-medium">
					<Mail className="inline h-4 w-4 mr-1" />
					Invite Judges via email
				</Label>

				<div className="flex gap-2">
					<Input
						type="email"
						placeholder="Enter Judges email address"
						value={newJudgesEmail}
						onChange={(e) => setNewJudgesEmail(e.target.value)}
						className="h-12"
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								e.preventDefault();
								addJudgesEmail(newJudgesEmail);
							}
						}}
					/>
					<Button
						type="button"
						onClick={() => addJudgesEmail(newJudgesEmail)}
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
									onClick={() => addJudgesEmail(email)}
									disabled={formik.values.judges_emails.includes(
										email
									)}>
									{email}
								</Button>
							))}
						</div>
					</div>
				)}

				{/* Judges Email List */}
				{formik.values.judges_emails.length > 0 && (
					<div className="space-y-2">
						<Label className="text-sm font-medium">
							Invited Judges ({formik.values.judges_emails.length}
							)
						</Label>
						<div className="flex flex-wrap gap-2">
							{formik.values.judges_emails.map((email, index) => (
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
										onClick={() =>
											removeJudgesEmail(email)
										}>
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

export default JudgesInvitationForm;
