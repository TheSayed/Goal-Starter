import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import GoalList from "./components/GoalList/GoalList";
import GoalInput from "./components/GoalInput/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState<Array<{ text: string; id: string }>>(
    []
  );
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  const addGoalHandler = (goal: string) => {
    setGoalList((currentGoalList) => [
      ...currentGoalList,
      { text: goal, id: Math.random().toString() },
    ]);
    onCancelModalHandler();
  };

  const onDeleteHandler = (id: string) => {
    setGoalList((currentGoalList) => {
      return currentGoalList.filter((goal) => goal.id !== id);
    });
  };

  const onAddNewGoalHandler = () => {
    setModalIsVisible(true);
  };

  const onCancelModalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addGoalButton}
        onPress={onAddNewGoalHandler}
      >
        <Text style={styles.addGoalButtonText}>Add new goal</Text>
      </TouchableOpacity>
      {modalIsVisible && (
        <GoalInput
          visible={modalIsVisible}
          onCancel={onCancelModalHandler}
          onAddGoal={addGoalHandler}
        />
      )}
      <GoalList goalList={goalList} onDelete={onDeleteHandler} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  addGoalButton: {
    marginVertical: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  addGoalButtonText: {
    color: "#BB7EF5",
    fontWeight: "bold",
    fontSize: 16,
  },
});
