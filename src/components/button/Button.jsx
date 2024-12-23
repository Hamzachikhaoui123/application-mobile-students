import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Button = ({ onPress, styleTouchable, styleText, children ,disabled}) => {
	return (
		<TouchableOpacity onPress={onPress} style={styleTouchable} disabled={disabled}>
			<Text style={styleText}>{children}</Text>
		</TouchableOpacity>
	);
};

export default Button;
