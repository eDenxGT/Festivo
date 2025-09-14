import * as Yup from "yup";

export const eventValidationSchema = Yup.object({
	title: Yup.string()
		.required("Event title is required")
		.min(3, "Title must be at least 3 characters")
		.max(100, "Title must be less than 100 characters"),
	description: Yup.string()
		.required("Event description is required")
		.min(10, "Description must be at least 10 characters")
		.max(1000, "Description must be less than 1000 characters"),
	location: Yup.string()
		.required("Event location is required")
		.min(5, "Location must be at least 5 characters"),
	floor_details: Yup.string().max(
		200,
		"Floor details must be less than 200 characters"
	),
	date: Yup.date()
		.required("Event date is required")
		.min(new Date(), "Event date must be in the future"),
	is_paid: Yup.boolean().required(),
	price: Yup.number().when("is_paid", {
		is: true,
		then: (schema) =>
			schema
				.required("Price is required for paid events")
				.min(0.01, "Price must be greater than 0"),
		otherwise: (schema) => schema.notRequired(),
	}),
	food_available: Yup.boolean().required(),
	food_options: Yup.object({
		morning: Yup.boolean(),
		noon: Yup.boolean(),
		evening: Yup.boolean(),
	}).when("food_available", {
		is: true,
		then: (schema) =>
			schema.test(
				"at-least-one-meal",
				"Please select at least one meal time",
				(value) => value?.morning || value?.noon || value?.evening
			),
		otherwise: (schema) => schema.notRequired(),
	}),
	max_tickets: Yup.number()
		.required("Maximum tickets is required")
		.min(1, "Must allow at least 1 ticket")
		.max(10000, "Maximum tickets cannot exceed 10,000"),
});
