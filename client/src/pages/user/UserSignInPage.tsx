import SignInForm from "@/components/auth/SignInForm";
import { useLoginMutation } from "@/hooks/auth/mutations/useLogin";
import { useToaster } from "@/hooks/ui/useToaster";
import { userLogin } from "@/store/slices/user.slice";
import { useAppDispatch } from "@/store/store";
import type { ILoginData } from "@/types/UserTypes";
import { useNavigate } from "react-router";

const UserSignInPage = () => {
	const { mutate: loginUser } = useLoginMutation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { successToast, errorToast } = useToaster();

	const handleSubmit = (data: Omit<ILoginData, "role">) => {
		loginUser(
			{ ...data, role: "user" },
			{
				onSuccess: (data) => {
					successToast(data.message);
					dispatch(userLogin(data.data));
					navigate("/user/home");
				},
				onError: (error: any) => {
					errorToast(error.response.data.message);
				},
			}
		);
	};
	return <SignInForm onSubmit={handleSubmit} role="user" />;
};

export default UserSignInPage;
