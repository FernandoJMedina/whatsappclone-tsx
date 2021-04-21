import React from "react";
import { View, Text, Image } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";
import moment from "moment";

interface ChatListProps {
	chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListProps) => {
	const { chatRoom } = props;

	const mySelf = chatRoom.users[0];
	const user = chatRoom.users[1];

	console.log(chatRoom.lastMessage.createdAt);

	return (
		<View style={styles.container}>
			<View style={styles.leftContainer}>
				<Image source={{ uri: user.imageUri }} style={styles.avatar} />
				<View style={styles.messageInfo}>
					<Text style={styles.username}>{user.name}</Text>
					{/* <Text style={styles.username}>VAMOO LO PIBEEEEE</Text> */}
					<Text style={styles.message} numberOfLines={1}>
						{chatRoom.lastMessage.content}
					</Text>
					{/* <Text style={styles.message} numberOfLines={1}>
							A que te hago un clon de whatsapp
						</Text> */}
				</View>
			</View>
			<Text style={styles.date}>
				{moment(chatRoom.lastMessage.createdAt)
					.calendar({
						sameDay: "[hoy]",
						nextDay: "[mañana]",
						nextWeek: "dddd",
						lastDay: "[ayer]",
						lastWeek: "dddd [pasado]",
						sameElse: "DD/MM/YYYY",
					})[0]
					.toUpperCase() +
					moment(chatRoom.lastMessage.createdAt)
						.calendar({
							sameDay: "[hoy]",
							nextDay: "[mañana]",
							nextWeek: "dddd",
							lastDay: "[ayer]",
							lastWeek: "dddd [pasado]",
							sameElse: "DD/MM/YYYY",
						})
						.slice(1)}
			</Text>
			{/* <Text style={styles.date}>Ayer</Text> */}
			<View style={styles.dividerContainer}>
				<View style={styles.divider} />
			</View>
		</View>
	);
};

export default ChatListItem;
