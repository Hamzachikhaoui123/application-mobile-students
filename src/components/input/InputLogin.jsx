import React, { forwardRef } from "react";
import { TextInput, StyleSheet, Platform } from "react-native";

const InputLogin = forwardRef(
	
	(
		{
			style,
			placeholder,
			keyboardType,
			secureTextEntry,
			onChangeText,
			returnKeyType,
			onSubmitEditing
		},
		ref
	) => {
		return (
			<TextInput
				ref={ref}
				style={{ ...styles.inputText, ...style }}
				placeholder={placeholder}
				placeholderTextColor={"black"}
				textAlign={"center"}
				keyboardType={keyboardType ? keyboardType : "default"}
				secureTextEntry={secureTextEntry ? secureTextEntry : false}
				onChangeText={onChangeText}
				returnKeyType={returnKeyType}
				onSubmitEditing={onSubmitEditing}
				
				/>
		);
	}
);

const styles = StyleSheet.create({
	inputText: {
		marginTop: 8,
		borderWidth: 1,
		borderRadius: 10,
		fontFamily: "GothamRounded-Light",
		height: Platform.OS === "ios" ? 49 : 51
	}
});

export default InputLogin;
