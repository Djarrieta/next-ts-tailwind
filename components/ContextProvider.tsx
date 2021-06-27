import React, { createContext, ReactElement, useEffect, useState } from "react";
import Cookies from "universal-cookie";


export const Context = createContext<{
	currentUser: any | undefined;
	setCurrentUser: (user: {} | undefined) => void;
	loading: boolean;
	setLoading: (value: boolean) => void;
	alert: {} | undefined;
	setAlert: (value: {}) => void;
}>({
	currentUser: undefined,
	setCurrentUser: (user: {} | undefined) => {},
	loading: true,
	setLoading: (value: boolean) => {},
	alert: undefined,
	setAlert: (value: {}) => {},
});

const ContextProvider = ({ children }: { children: ReactElement }) => {
	const [currentUser, setCurrentUser] =
		useState<{} | undefined>(undefined);
	const [loading, setLoading] = useState<boolean>(true);
	const [alert, setAlert] = useState<{} | undefined>(undefined);

	useEffect(() => {
		const cookies = new Cookies();
		const user: {} = cookies.get("currentUser");
		if (user) {
			setCurrentUser(user);
		} else {
			setCurrentUser(undefined);
		}
		setLoading(false);
	}, []);

	useEffect(() => {
		alert && setTimeout(() => setAlert(undefined), 2000);
	}, [alert]);

	return (
		<Context.Provider
			value={{
				currentUser,
				setCurrentUser,
				loading,
				setLoading,
				alert,
				setAlert,
			}}
		>
			{children}
		</Context.Provider>
	);
};
export default ContextProvider;