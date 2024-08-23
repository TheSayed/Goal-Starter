import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    marginTop: "15%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#4D3A6A",
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    height: "6%",
    width: "100%",
    marginBottom: 24,
    paddingLeft: 8,
    backgroundColor: "#e4d0ff",
    borderBlockColor: "#e4d0ff",
    borderRadius: 20,
    color: "#120438",
  },
  button: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    borderRadius: 20,
  },
  cancelButton: {
    backgroundColor: "#f31282",
  },
  addButton: {
    backgroundColor: "#b180f0",
  },
  buttonText: {
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 15,
  },
  icon: {
    marginBottom: 24,
  },
  image: {
    height: 100,
    width: 100,
  },
});
