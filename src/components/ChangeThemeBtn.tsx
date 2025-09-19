import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  extraStyles?: any;
  mode: string;
  setMode: (mode: string) => void;
};

const ChangeThemeBtn = ({ extraStyles, mode, setMode }: Props) => {
  return (
    <TouchableOpacity
      style={{
        ...extraStyles,
        ...styles.themeButton,
        backgroundColor: "#f0f0f0",
      }}
      onPress={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      <MaterialIcons
        name="dark-mode"
        size={32}
        color="black"
        style={{ display: mode !== "dark" ? "none" : "flex" }}
      />
      <Entypo
        name="light-up"
        size={24}
        color="black"
        style={{ display: mode === "dark" ? "none" : "flex" }}
      />
    </TouchableOpacity>
  );
};

export default ChangeThemeBtn;

const styles = StyleSheet.create({
  themeButton: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#4e4e4e",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderRadius: "50%",
  },
});
