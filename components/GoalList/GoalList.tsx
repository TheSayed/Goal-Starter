import { View, Text, FlatList } from "react-native";
import React from "react";
import GoalItem from "../GoalItem/GoalItem";
import styles from "./GoalListStyles";

type GoalItemType = {
  text: string;
  id: string;
};
type GoalListProps = {
  goalList: Array<GoalItemType>;
  onDelete: (id: string) => void; // Add the onDelete function to props
};

const GoalList: React.FC<GoalListProps> = ({ goalList, onDelete }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={goalList}
        renderItem={({ item }) => (
          <GoalItem text={item.text} id={item.id} onDelete={onDelete} />
        )}
      />
    </View>
  );
};

export default GoalList;
