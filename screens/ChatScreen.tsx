import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import ChatListItem from "../components/ChatListItem";
import { View } from "../components/Themed";
import chatRooms from "../data/ChatRooms";

export default function ChatScreen() {
	return (
		<View style={styles.container}>
			<FlatList
				style={styles.flatList}
				data={chatRooms}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <ChatListItem chatRoom={item} />}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	flatList: {
		width: "100%",
	},
});
