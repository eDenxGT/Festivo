import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
	name: Yup.string()
		.matches(/^[a-zA-Z\s]+$/, "Name should only contain letters and spaces")
		.min(1, "Name must be at least 1 character")
		.max(50, "Name must not exceed 50 characters")
		.required("Name is required"),
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
	password: Yup.string()
		.min(6, "Password must be at least 6 characters")
		.required("Password is required"),
});
