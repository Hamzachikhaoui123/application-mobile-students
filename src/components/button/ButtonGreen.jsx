import { useTheme } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ButtonGreen = ({ onPress, children }) => {
	const { colors } = useTheme();

	return (
		<TouchableOpacity
			style={{
        ...styles.touchableOpacityButton,
				backgroundColor: colors.button,
			}}
			onPress={onPress}
		>
			<Text
				style={{
					...styles.touchableOpacityText,
					color: colors.buttonText
				}}
			>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	touchableOpacityButton: {
		width: "80%",
		borderRadius: 10,
		marginTop: Platform.OS === "ios" ? 42 : 16
	},
	touchableOpacityText: {
		paddingVertical: 10,
		paddingHorizontal: 30,
		fontSize: 23,
		fontFamily: "GothamRounded-Bold",
		textAlign: "center"
	}
});

export default ButtonGreen;
