import React from "react";
import { forwardRef } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";

const Input = forwardRef(({
	onChangeText,
	InputStyle,
	LabelStyle,
	ViewStyle,
	children,
	cursorColor,
	selectionColor,
	multiline,
	numberOfLines,
	secureTextEntry,
	placeholder,
	placeholderTextColor,
	maxLength,
	keyboardType,
	onSubmitEditing,
	returnKeyType,
	editable,
	value
}, ref) => (
	<View style={ViewStyle}>
		<Text style={LabelStyle}>{children}</Text>
		<TextInput
			ref={ref}
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
			maxLength={maxLength}
			keyboardType={keyboardType}
			onSubmitEditing={onSubmitEditing}
			returnKeyType={returnKeyType}
			editable={editable}
		/>
	</View>
));

export default Input;
