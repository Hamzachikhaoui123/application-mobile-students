// // import { NativeModules } from 'react-native'
// import React from "react";

// import axios from "axios";
// import { API_URL } from "@env";
// import { store } from "../redux/store";
// // const env = NativeModules.RNConfig.env;
// const axiosInstance = axios.create({
// 	baseURL: "API_URL"

// });

// axiosInstance.interceptors.request.use(
// 	(config) => {
// 		const state = store.getState();
// 		const access_token = state.authReducer.access_token;
		
// 		config.timeout = 5000;
// 		if (access_token && !config.headers.Authorization) {
// 			config.headers.Authorization = `Bearer ${access_token}`;
// 		}

// 		return config;
// 	},
// 	(error) => {
// 		return Promise.reject(error);
// 	}
// );

// export default axiosInstance;
