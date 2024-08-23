import { View, Text, Pressable } from "react-native";
import React from "react";
import { styles } from "./GoalItemStyle";

interface GoalItemProps {
  text: string;
  id: string;
  onDelete: (id: string) => void; // Define the type of the onDelete prop
}

const GoalItem: React.FC<GoalItemProps> = ({ text, onDelete, id }) => {
  return (
    <Pressable
      onPress={() => onDelete(id)}
      style={({ pressed }) => [styles.listItem, pressed && styles.pressedItem]}
    >
      <View>
        <Text style={styles.listText}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;
