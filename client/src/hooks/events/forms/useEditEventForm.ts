import { eventValidationSchema } from "@/utils/validations/events/create-event.validator";
import { useFormik } from "formik";
import { useToaster } from "@/hooks/ui/useToaster";
import { useNavigate } from "react-router";
import { PATH } from "@/utils/constants/paths";
import type { IEvent } from "@/types/EventTypes";
import { useEditEventMutation } from "../mutations/useEditEventMutation";
import type { EventFormValues } from "./useCreateEventForm";

export type MailTypes = "guests" | "judges";

export interface EditEventFormValues extends EventFormValues {
	id?: string;
}

export const useEditEventForm = (event: IEvent) => {
	const { mutate, isPending, isError } = useEditEventMutation();
	const { successToast, errorToast } = useToaster();
	const navigate = useNavigate();
	const formik = useFormik<EditEventFormValues>({
		initialValues: {
			id: event?.id,
			title: event?.title,
			description: event?.description,
			location: event?.location,
			floor_details: event?.floor_details!,
			date: event?.date,
			is_paid: event?.is_paid,
			price: event?.price,
			food_available: event?.food_available,
			food_options: {
				morning: event?.food_options?.morning!,
				noon: event?.food_options?.noon!,
				evening: event?.food_options?.evening!,
			},
			max_tickets: event?.max_tickets,
			guests: event?.guests || [],
			judges: event?.guests || [],
		},
		enableReinitialize: true,
		validationSchema: eventValidationSchema,

		onSubmit: (values) => {
			mutate(values, {
				onSuccess: (data) => {
					successToast(data.message);
					navigate(PATH.ORG.MY_EVENTS);
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

		if (formik.values[field].some((p) => p.email === person.email)) {
			errorToast(
				`This email is already added as a ${field.slice(0, -1)}`
			);
			return;
		}

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
