import LiveQrScanner from "@/components/organizer/event/RegistrationDetails/QrScanner";
import { useNavigate } from "react-router";

const OrganizerQrScannerPage = () => {
	const navigate = useNavigate();
	return (
		<div className="flex justify-center items-center max-h-svh">
			<LiveQrScanner
				onScanComplete={(data: string) => {
					const dataObj: {
						registration_id: string;
						role: string;
					} = JSON.parse(data);
					navigate(
						`/org/registrations/${dataObj.registration_id}?role=${dataObj.role}`
					);
				}}
			/>
		</div>
	);
};

export default OrganizerQrScannerPage;
