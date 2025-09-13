import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./slices/user.slice";
import organizerReducer from "./slices/organizer.slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import { useDispatch } from "react-redux";

const rootPersistConfig = {
	key: "session",
	storage,
};

const rootReducer = combineReducers({
	user: userReducer,
	organizer: organizerReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
			},
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
