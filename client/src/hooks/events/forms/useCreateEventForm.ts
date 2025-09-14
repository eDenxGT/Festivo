import { eventValidationSchema } from "@/utils/validations/events/create-event.validator";
import { useFormik } from "formik";
import { useCreateEventMutation } from "../mutations/useCreateEventMutation";
import { useToaster } from "@/hooks/ui/useToaster";

export interface EventFormValues {
	title: string;
	description: string;
	location: string;
	floor_details: string;
	date: Date | undefined;
	is_paid: boolean;
	price: number | undefined;
	food_available: boolean;
	food_options: {
		morning: boolean;
		noon: boolean;
		evening: boolean;
	};
	max_tickets: number;
	guests: { name: string; email: string }[];
	judges: { name: string; email: string }[];
}

const initialValues: EventFormValues = {
	title: "",
	description: "",
	location: "",
	floor_details: "",
	date: undefined,
	is_paid: false,
	price: undefined,
	food_available: false,
	food_options: {
		morning: false,
		noon: false,
		evening: false,
	},
	max_tickets: 100,
	guests: [],
	judges: [],
};

export type MailTypes = "guests" | "judges";

export const useCreateEventForm = () => {
	const { mutate, isPending, isError } = useCreateEventMutation();
	const { successToast, errorToast } = useToaster();

	const formik = useFormik({
		initialValues,
		validationSchema: eventValidationSchema,

		onSubmit: (values) => {
			mutate(values, {
				onSuccess: (data) => {
					successToast(data.message);
				},
				onError: (err) => {
					errorToast(err.message ?? "Unknown Error! Report now.");
				},
			});
		},
	});

	const addPerson = (
		person: { name: string; email: string },
		field: "guests" | "judges"
	) => {
		if (!person.name) {
			errorToast("Please enter a name");
			return;
		}

		if (!person.email) {
			errorToast("Please enter an email");
			return;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(person.email)) {
			errorToast("Invalid email format");
			return;
		}

		// check duplicates inside same field
		if (formik.values[field].some((p) => p.email === person.email)) {
			errorToast(
				`This email is already added as a ${field.slice(0, -1)}`
			);
			return;
		}

		// check if exists in the other field
		const otherField = field === "guests" ? "judges" : "guests";
		if (formik.values[otherField].some((p) => p.email === person.email)) {
			errorToast(
				`This email is already added as a ${otherField.slice(0, -1)}`
			);
			return;
		}

		formik.setFieldValue(field, [...formik.values[field], person]);
	};

	return {
		formik,
		isLoading: isPending && !isError,
		addPerson,
	};
};
