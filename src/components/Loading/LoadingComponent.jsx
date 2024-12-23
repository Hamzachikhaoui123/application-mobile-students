import { useTheme } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Modal, ActivityIndicator } from "react-native";

export const LoadingComponent = ({ loading }) => {
  const { colors } = useTheme();
  

	return (
		<Modal animationType={"fade"} transparent={true} visible={loading}>
			<View
				style={{
					flex: 1,
					backgroundColor: colors.transparent_gray,
					alignItems: "center",
					justifyContent: "center"
				}}
			>
				<View
					style={{
						alignItems: "center",
						justifyContent: "center"
					}}
				>
					<ActivityIndicator size="large" color={colors.button} />
				</View>
			</View>
		</Modal>
	);
};

/* export default class LoadingComponent extends Component {
    render() {
        const { loading } = this.props;


        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={loading}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: color.transparent_gray,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <ActivityIndicator size="large" color={color.red} />
                    </View>
                </View>

            </Modal>
        )
    }
} */
