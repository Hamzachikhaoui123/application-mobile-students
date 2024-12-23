import React from "react";

import { useSelector } from "react-redux";

import { AuthStackScreen } from "./auth";
import { HomeStackScreen } from "./home";

export const AuthCheck = () => {
	const access_token = useSelector((state) => state.authReducer.access_token);
    console.log("access",access_token);
	return (
		<>{access_token === null ? <AuthStackScreen /> : <HomeStackScreen />}</>
	);
};
