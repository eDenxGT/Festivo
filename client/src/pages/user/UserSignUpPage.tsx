import SignUpForm from "@/components/auth/SignUpForm";
import { useRegisterMutation } from "@/hooks/auth/mutations/useRegister";
import { useToaster } from "@/hooks/ui/useToaster";
import type { IRegisterData } from "@/types/UserTypes";

const UserSignUpPage = () => {
	const { mutate: registerClient } = useRegisterMutation();
	const { errorToast, successToast } = useToaster();

	const handleSubmit = (data: IRegisterData) => {
		registerClient(data, {
			onSuccess: (data) => successToast(data.message),
			onError: (error: any) => errorToast(error.response.data.message),
		});
	};

	return <SignUpForm onSubmit={handleSubmit} role="user" />;
};

export default UserSignUpPage;
