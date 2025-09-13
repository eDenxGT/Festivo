import { StrictMode } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "./ToastContainer";
import { persistor, store } from "@/store/store";

const queryClient = new QueryClient();

export function AppProvider({ children }: { children: React.ReactNode }) {
	return (
		<StrictMode>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<QueryClientProvider client={queryClient}>
						<ToastContainer>{children}</ToastContainer>
					</QueryClientProvider>
				</PersistGate>
			</Provider>
		</StrictMode>
	);
}
