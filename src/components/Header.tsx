import { Image, StyleSheet, View } from "react-native";
import ChangeThemeBtn from "./ChangeThemeBtn";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Link } from "@react-navigation/native";
import Colors from "../enums/colors";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
const logo = require("../../assets/menu2.svg");

const Header = () => {
  const { theme } = useContext(UserContext);

  return (
    <View
      style={{
        ...styles.header,
        backgroundColor: theme === "dark" ? Colors.BG_DARK : Colors.BG_LIGHT,
      }}
    >
      <Link screen={"Login"} params={{}}>
        <SimpleLineIcons
          name="logout"
          size={28}
          color={theme === "dark" ? Colors.FONT_DARK : Colors.FONT_LIGHT}
        />
      </Link>
      <View
        style={{
          ...styles.logo,
          backgroundColor: theme === "dark" ? Colors.BG_DARK : Colors.BG_LIGHT,
        }}
      >
        <Image source={logo} />
      </View>
      <ChangeThemeBtn />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 73,
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 2,
    borderColor: "#666",
    zIndex: 2,
  },
  logo: {
    borderRadius: "50%",
    backgroundColor: "#616161",
    borderColor: "#666",
    position: "relative",
    borderBottomWidth: 2,
    top: 30,
    paddingVertical: 10,
    paddingTop: 14,
    height: 140,
    alignItems: "center",
    paddingHorizontal: 2,
    width: 160,
    zIndex: 3,
  },
});
