import React, { useState, useEffect, useRef } from "react";
import {
	SafeAreaView,
	Text,
	Image,
	StyleSheet,
	TextInput,
	View,
	TouchableOpacity,
	Alert,
	Platform
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../hooks/usePrevious";
import InputLogin from "../../components/input/InputLogin";
import ButtonGreen from "../../components/button/ButtonGreen";
import { LoginAction } from "../../reudx/auth/action";

const Login = ({ navigation }) => {
	const dispatch = useDispatch();
	const { colors } = useTheme();

	const passwordRef = useRef();

	const loading = useSelector((state) => state.authReducer.loading);
	const success = useSelector((state) => state.authReducer.success);

	const [data, setData] = useState({});
	const [isValid, setisValid] = useState({
		email: true,
		password: true
	});

	const prevLoading = usePrevious(loading);

	useEffect(() => {
		if (loading === true) {
		}
	}, []);

	useEffect(() => {
		if (prevLoading === true && loading === false && success === false) {
			Alert.alert("Attention !", "Identifiant ou mot de passe incorrect");
		}
	}, [loading]);

	const onSubmit = () => {
		if (data.email && data.password && isValid.email) {
			dispatch(LoginAction(data));
		} else {
			Alert.alert(
				"Attention !",
				"Veuillez saisir un email ou mot de passe valide"
			);
		}
	};

	return (
		<SafeAreaView
			style={{ ...styles.container, backgroundColor: colors.background }}
		>
			<View style={{ flexGrow: 0.3, justifyContent: "center" }}>
				<Image
					source={require("../../assets/images/altabib-512x180.png")}
					style={{ width: 512 * 0.5, height: 180 * 0.5 }}
				/>
			</View>
			<View
				style={{
					flexGrow: 0.7,
					alignItems: "center",
					width: "100%"
				}}
			>
				<InputLogin
					style={{
						backgroundColor: colors.primary,
						color: colors.text,
						borderColor: isValid.email ? colors.inputBorder : colors.red,
						width: "80%"
					}}
					placeholder={"Indentifiant"}
					placeholderTextColor={"black"}
					textAlign={"center"}
					keyboardType={"email-address"}
					onChangeText={(val) => {
						var reg = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

						if (val.match(reg)) {
							setData((data) => ({ ...data, email: val }));
							setisValid((isValid) => ({ ...isValid, email: true }));
						} else {
							setisValid((isValid) => ({ ...isValid, email: false }));
							setData((data) => {
								// remove cost key from object
								const { email, ...rest } = data;
								return rest;
							});
						}
					}}
					returnKeyType={"next"}
					onSubmitEditing={() => {
						passwordRef.current.focus();
					}}
				/>

				<InputLogin
					ref={passwordRef}
					style={{
						...styles.inputText,
						backgroundColor: colors.primary,
						color: colors.text,
						borderColor: colors.inputBorder,
						width: "80%"
					}}
					placeholder={"Mot de passe"}
					secureTextEntry={true}
					placeholderTextColor={"black"}
					textAlign={"center"}
					onChangeText={(val) => {
						setData((data) => ({ ...data, password: val }));
						/* var reg = /^[a-zA-Z]{8,70}$/;

					if (val.match(reg)) {
						setData((data) => ({ ...data, password: val }));
						setisValid((isValid) => ({ ...isValid, password: true }));
					} else {
						setisValid((isValid) => ({ ...isValid, password: false }));
						setData((data) => {
							// remove cost key from object
							const { password, ...rest } = data;
							return rest;
						});
					} */
					}}
					onSubmitEditing={onSubmit}
					returnKeyType={"go"}
				/>

				<ButtonGreen onPress={onSubmit}>Se Connecter</ButtonGreen>

				<TouchableOpacity
					style={{
						width: "70%",
						marginTop: 16
					}}
					onPress={() => Alert.alert("here", "oublié")}
				>
					<Text
						style={{
							textAlign: "center",
							color: colors.link,
							fontSize: 18,
							fontFamily: "GothamRounded-Book"
						}}
					>
						Mot de passe oublier
					</Text>
				</TouchableOpacity>
			</View>

		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	text: {
		fontSize: 23,
		fontFamily: "GothamRounded-Bold"
	},
	inputText: {
		marginTop: 8,
		borderWidth: 1,
		borderRadius: 10,
		fontFamily: "GothamRounded-Light",
		height: Platform.OS === "ios" ? 49 : 51
	}
});

export default Login;
