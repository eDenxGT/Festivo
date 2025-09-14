import { Checkbox } from "@/components/ui/checkbox";
import type { FormikProps } from "formik";
import { Label } from "@/components/ui/label";
import { Utensils } from "lucide-react";
import type { EventFormValues } from "@/hooks/events/forms/useCreateEventForm";

const FoodForm = ({ formik }: { formik: FormikProps<EventFormValues> }) => {
	return (
		<div className="space-y-6">
			<div className="flex items-center gap-2 mb-4">
				<div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
					<span className="text-sm font-bold text-primary">3</span>
				</div>
				<h3 className="text-lg font-semibold">Food & Catering</h3>
			</div>

			{/* Food Available */}
			<div className="flex items-center space-x-2">
				<Checkbox
					id="food_available"
					checked={formik.values.food_available}
					onCheckedChange={(checked) =>
						formik.setFieldValue("food_available", checked)
					}
				/>
				<Label
					htmlFor="food_available"
					className="text-sm font-medium cursor-pointer">
					<Utensils className="inline h-4 w-4 mr-1" />
					Food will be available at this event
				</Label>
			</div>

			{/* Food Time Options (conditional) */}
			{formik.values.food_available && (
				<div className="space-y-4">
					<Label className="text-sm font-medium">
						Select meal times available:
					</Label>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="flex items-center space-x-2">
							<Checkbox
								id="morning"
								checked={formik.values.food_options.morning}
								onCheckedChange={(checked) =>
									formik.setFieldValue(
										"food_options.morning",
										checked
									)
								}
							/>
							<Label
								htmlFor="morning"
								className="text-sm cursor-pointer">
								Morning (Breakfast)
							</Label>
						</div>

						<div className="flex items-center space-x-2">
							<Checkbox
								id="noon"
								checked={formik.values.food_options.noon}
								onCheckedChange={(checked) =>
									formik.setFieldValue(
										"food_options.noon",
										checked
									)
								}
							/>
							<Label
								htmlFor="noon"
								className="text-sm cursor-pointer">
								Noon (Lunch)
							</Label>
						</div>

						<div className="flex items-center space-x-2">
							<Checkbox
								id="evening"
								checked={formik.values.food_options.evening}
								onCheckedChange={(checked) =>
									formik.setFieldValue(
										"food_options.evening",
										checked
									)
								}
							/>
							<Label
								htmlFor="evening"
								className="text-sm cursor-pointer">
								Evening (Dinner)
							</Label>
						</div>
					</div>
					{formik.errors.food_options &&
						formik.touched.food_options && (
							<p className="text-sm text-destructive">
								{formik.errors.food_options as string}
							</p>
						)}
				</div>
			)}
		</div>
	);
};

export default FoodForm;
