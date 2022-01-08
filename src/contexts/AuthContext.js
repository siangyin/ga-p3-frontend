import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();

const AuthContextProvider = (props) => {
	const [userSession, setUserSession] = useState();

	const getUserSession = async () => {
		try {
			await axios
				.get("http://localhost:5000/getlogin", { withCredentials: true })
				.then((res) => {
					setUserSession(res.data);
					localStorage.setItem("userId", res.data._id);
				});
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUserSession();
	}, []);

	return (
		<AuthContext.Provider value={userSession}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
