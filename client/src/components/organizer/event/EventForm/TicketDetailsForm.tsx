import type { FormikProps } from "formik";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { DollarSign, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { EventFormValues } from "@/hooks/events/forms/useCreateEventForm";

const TicketDetailsForm = ({
	formik,
}: {
	formik: FormikProps<EventFormValues>;
}) => {
	return (
		<div className="space-y-6">
			<div className="flex items-center gap-2 mb-4">
				<div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
					<span className="text-sm font-bold text-primary">2</span>
				</div>
				<h3 className="text-lg font-semibold">Pricing & Tickets</h3>
			</div>

			{/* Is Paid Event */}
			<div className="flex items-center space-x-2">
				<Checkbox
					id="is_paid"
					checked={formik.values.is_paid}
					onCheckedChange={(checked) =>
						formik.setFieldValue("is_paid", checked)
					}
				/>
				<Label
					htmlFor="is_paid"
					className="text-sm font-medium cursor-pointer">
					<DollarSign className="inline h-4 w-4 mr-1" />
					This is a paid event
				</Label>
			</div>

			{/* Price Field (conditional) */}
			{formik.values.is_paid && (
				<div className="space-y-2">
					<Label htmlFor="price" className="text-sm font-medium">
						Ticket Price *
					</Label>
					<Input
						id="price"
						name="price"
						type="number"
						step="0.01"
						min="0"
						placeholder="0.00"
						className="h-12"
						value={formik.values.price || ""}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.errors.price && formik.touched.price && (
						<p className="text-sm text-destructive">
							{formik.errors.price}
						</p>
					)}
				</div>
			)}

			{/* Maximum Tickets */}
			<div className="space-y-2">
				<Label htmlFor="max_tickets" className="text-sm font-medium">
					<Users className="inline h-4 w-4 mr-1" />
					Maximum Tickets *
				</Label>
				<Input
					id="max_tickets"
					name="max_tickets"
					type="number"
					min="1"
					max="10000"
					placeholder="100"
					className="h-12"
					value={formik.values.max_tickets}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.errors.max_tickets && formik.touched.max_tickets && (
					<p className="text-sm text-destructive">
						{formik.errors.max_tickets}
					</p>
				)}
			</div>
		</div>
	);
};

export default TicketDetailsForm;
