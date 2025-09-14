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
	guest_emails: string[];
	judges_emails: string[];
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
	guest_emails: [],
	judges_emails: [],
};

export type MailTypes = "guest_emails" | "judges_emails";

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

	const addEmail = (email: string, field: MailTypes) => {
		if (!email) {
			errorToast("Please enter an email");
			return;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			errorToast("Invalid email format");
			return;
		}

		if (formik.values.guest_emails.includes(email)) {
			errorToast("This email is already added as a guest");
			return;
		}

		if (formik.values.judges_emails.includes(email)) {
			errorToast("This email is already added as a judge");
			return;
		}

		formik.setFieldValue(field, [...formik.values[field], email]);
	};

	return {
		formik,
		isLoading: isPending && !isError,
		addEmail,
	};
};
