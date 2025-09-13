import SignInForm from "@/components/auth/SignInForm";
import { useLoginMutation } from "@/hooks/auth/useLogin";
import { useToaster } from "@/hooks/ui/useToaster";
import { organizerLogin } from "@/store/slices/organizer.slice";
import { useAppDispatch } from "@/store/store";
import type { ILoginData } from "@/types/UserTypes";
import { useNavigate } from "react-router";

const OrganizerSignInPage = () => {
	const { mutate: loginUser } = useLoginMutation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { successToast, errorToast } = useToaster();

	const handleSubmit = (data: Omit<ILoginData, "role">) => {
		loginUser(
			{ ...data, role: "organizer" },
			{
				onSuccess: (data) => {
					successToast(data.message);
					dispatch(organizerLogin(data.data));
					navigate("/org/dash");
				},
				onError: (error: any) => {
					errorToast(error.response.data.message);
				},
			}
		);
	};
	return <SignInForm onSubmit={handleSubmit} role="organizer" />;
};

export default OrganizerSignInPage;
