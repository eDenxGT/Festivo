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

const JudgesInvitationForm = ({
	formik,
	addPerson,
}: {
	formik: FormikProps<EventFormValues>;
	addPerson: (
		data: { email: string; name: string },
		field: MailTypes
	) => void;
}) => {
	const [newJudge, setNewJudge] = useState({ name: "", email: "" });

	const addJudges = () => {
		addPerson(newJudge, "judges");
		setNewJudge({ name: "", email: "" });
	};

	const removeJudges = (emailToRemove: string) => {
		formik.setFieldValue(
			"judges",
			formik.values.judges.filter((g) => g.email !== emailToRemove)
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

			{/* Add Judge Name + Email */}
			<div className="space-y-4">
				<Label className="text-sm font-medium">Invite Judges</Label>

				<div className="flex gap-2">
					<Input
						type="text"
						placeholder="Judge name"
						value={newJudge.name}
						onChange={(e) =>
							setNewJudge({ ...newJudge, name: e.target.value })
						}
						className="h-12 w-1/3"
					/>
					<Input
						type="email"
						placeholder="Judge email"
						value={newJudge.email}
						onChange={(e) =>
							setNewJudge({ ...newJudge, email: e.target.value })
						}
						className="h-12 w-2/3"
					/>
					<Button
						type="button"
						onClick={addJudges}
						className="h-12 px-6">
						<Plus className="h-4 w-4 mr-2" />
						Add
					</Button>
				</div>

				{/* Judge List */}
				{formik.values.judges.length > 0 && (
					<div className="space-y-2">
						<Label className="text-sm font-medium">
							Invited Judges ({formik.values.judges.length})
						</Label>
						<div className="flex flex-wrap gap-2">
							{formik.values.judges.map((judge, index) => (
								<Badge
									key={index}
									variant="secondary"
									className="pr-1">
									{judge.name} ({judge.email})
									<Button
										type="button"
										variant="ghost"
										size="sm"
										className="h-4 w-4 p-0 ml-2 hover:bg-destructive hover:text-destructive-foreground"
										onClick={() =>
											removeJudges(judge.email)
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
