/* eslint-disable linebreak-style */
import React, { useEffect } from "react";
import { NativeModules, Platform, StatusBar } from "react-native";
import {
	NavigationContainer,
	DefaultTheme,
	useTheme
} from "@react-navigation/native";

// Redux
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider, useSelector } from "react-redux";

import { AuthCheck } from "./src/routers";
import { persistor, store } from "./src/reudx/store";

const MyTheme = {
	dark: false,
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: "#FFFFFF",
		background: "#ededed",
		button: "#007481",
		buttonText: "#FFFFFF",
		link: "blue",
		text: "#000000",
		green:"#48b9b2",
		inputBorder: "#adacac",
		red: "red",
		transparent_gray: "#000000AA",
		ed_gray: "#d9d9d9",
		opal: "#9ec1c9",
		opal_dark: "#008d93",
		opal_light: "#badfdc",
		pink : "#b1005a",
		colorLogo:"#820040"
	}
};

const App = () => {
	const { colors } = useTheme();

	// useEffect(() => {
	// 	if (Platform.OS === "ios") {
	// 		SplashScreen.hide();
	// 	} else if (Platform.OS === "android") {
	// 		NativeModules.SplashScreen.hide();
	// 	}
	// }, []);

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NavigationContainer theme={MyTheme}>
					<StatusBar
						animated={true}
						backgroundColor={colors.background}
						barStyle={"dark-content"}
						hidden={false}
					/>
					<AuthCheck />
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
};

export default App;
