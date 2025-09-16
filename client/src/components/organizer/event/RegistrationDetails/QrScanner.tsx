import { Scanner, type IDetectedBarcode } from "@yudiel/react-qr-scanner";

const LiveQrScanner = ({
	className = "",
	onScanComplete,
}: {
	className?: string;
	onScanComplete: (parsedQr: string) => void;
}) => {
	return (
		<div className={`flex flex-col pt-24 items-center ${className}`}>
			<h2 className="text-xl font-bold mb-4">Live Ticket QR Scanner</h2>
			<Scanner
				onScan={(detectedCodes: IDetectedBarcode[]) =>
					onScanComplete(detectedCodes[0].rawValue)
				}
				onError={(err) => console.error(err)}
			/>
		</div>
	);
};

export default LiveQrScanner;
