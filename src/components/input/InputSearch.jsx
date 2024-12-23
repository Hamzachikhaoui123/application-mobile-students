import React from "react";
import { TextInput, View } from "react-native";

const InputSearch = ({
	onChangeText,
	InputStyle,
	ViewStyle,
	children,
	cursorColor,
	selectionColor,
	multiline,
	numberOfLines,
	secureTextEntry,
	placeholder,
	placeholderTextColor,
	onSubmitEditing,
	value
}) => {
	return (
		<View style={ViewStyle}>
			<TextInput
				placeholder={placeholder}
				placeholderTextColor={placeholderTextColor}
				style={InputStyle}
				onChangeText={onChangeText}
				selectionColor={selectionColor}
				cursorColor={cursorColor}
				value={value}
				multiline={multiline}
				numberOfLines={numberOfLines}
				secureTextEntry={secureTextEntry}
				returnKeyType={"go"}
				onSubmitEditing={onSubmitEditing}
			/>
			{children}
		</View>
	);
};

export default InputSearch;
