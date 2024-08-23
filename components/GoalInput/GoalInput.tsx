import { View, Text, TouchableOpacity, TextInput, Modal } from "react-native";
import React, { useState } from "react";
import { styles } from "./GoalInputStyles";
import Foundation from "@expo/vector-icons/Foundation";

interface InputProps {
  onAddGoal: (goal: string) => void;
  onCancel: () => void;
  visible: boolean;
}

const GoalInput: React.FC<InputProps> = ({ onAddGoal, onCancel, visible }) => {
  const [goal, setGoal] = useState<string>("");
  const goalInputHandler = (enteredText: string) => {
    setGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(goal);
    setGoal("");
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.inputContainer}>
        <View style={styles.icon}>
          <Foundation name="target-two" size={100} color="white" />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Type your goal"
          onChangeText={goalInputHandler}
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.addButton, styles.button]}
            onPress={addGoalHandler}
          >
            <Text style={styles.buttonText}>Add Goal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.cancelButton, styles.button]}
            onPress={onCancel}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
