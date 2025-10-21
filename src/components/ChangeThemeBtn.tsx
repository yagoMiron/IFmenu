import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { UserContext } from "../context/UserContext";

type Props = {
  extraStyles?: any;
};

const ChangeThemeBtn = ({ extraStyles }: Props) => {
  const { setTheme, theme } = useContext(UserContext);
  const toChangeTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <TouchableOpacity
      style={{
        ...extraStyles,
        ...styles.themeButton,
        backgroundColor: "#f0f0f0",
      }}
      onPress={toChangeTheme}
    >
      <MaterialIcons
        name="dark-mode"
        size={32}
        color="black"
        style={{ display: theme !== "dark" ? "none" : "flex" }}
      />
      <Entypo
        name="light-up"
        size={24}
        color="black"
        style={{ display: theme === "dark" ? "none" : "flex" }}
      />
    </TouchableOpacity>
  );
};

export default ChangeThemeBtn;

const styles = StyleSheet.create({
  themeButton: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#4e4e4e",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderRadius: "50%",
  },
});
