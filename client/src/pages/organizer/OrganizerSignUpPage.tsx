import SignUpForm from "@/components/auth/SignUpForm";
import { useRegisterMutation } from "@/hooks/auth/useRegister";
import { useToaster } from "@/hooks/ui/useToaster";
import type { IRegisterData } from "@/types/UserTypes";

const OrganizerSignUpPage = () => {
	const { mutate: registerUser } = useRegisterMutation();
	const { errorToast, successToast } = useToaster();

	const handleSubmit = (data: IRegisterData) => {
		registerUser(data, {
			onSuccess: (data) => successToast(data.message),
			onError: (error: any) => errorToast(error.response.data.message),
		});
	};

	return <SignUpForm onSubmit={handleSubmit} role="organizer" />;
};

export default OrganizerSignUpPage;
