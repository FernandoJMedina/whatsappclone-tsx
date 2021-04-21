import { Dimensions, StyleSheet } from "react-native";
const AVATAR_SIZE = 60;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
		padding: 10,
	},
	leftContainer: {
		flexDirection: "row",
		width: "85%",
		alignItems: "center",
	},
	avatar: {
		width: AVATAR_SIZE,
		height: AVATAR_SIZE,
		borderRadius: 30,
	},
	messageInfo: {
		padding: 10,
		width: "100%",
	},
	username: {
		fontWeight: "bold",
		fontSize: 18,
	},
	message: {
		fontSize: 16,
		color: "grey",
		marginTop: 4,
	},
	date: {
		position: "absolute",
		top: 10,
		right: 10,
		fontSize: 15,
		color: "grey",
	},
	dividerContainer: {
		position: "absolute",
		bottom: -10,
		right: 0,
		width: "100%",
		padding: 10,
		alignItems: "flex-end",
	},
	divider: {
		height: 1,
		backgroundColor: "#ededed",
		width: Dimensions.get("window").width - AVATAR_SIZE - 30,
	},
});

export default styles;
