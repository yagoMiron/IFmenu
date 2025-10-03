import { Image, StyleSheet, View } from "react-native";
import ChangeThemeBtn from "./ChangeThemeBtn";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Link } from "@react-navigation/native";
const logo = require("../../assets/menu2.svg");

type Props = {
  mode: string;
  setMode: (mode: string) => void;
};

const Header = ({ mode, setMode }: Props) => {
  return (
    <View
      style={{
        ...styles.header,
        backgroundColor: mode === "dark" ? "#616161" : "#ffffff",
      }}
    >
      <Link screen={"Login"} params={{}}>
        <SimpleLineIcons
          name="logout"
          size={28}
          color={mode === "dark" ? "#f0f0f0" : "#0f0f0f"}
        />
      </Link>
      <View
        style={{
          ...styles.logo,
          backgroundColor: mode === "dark" ? "#616161" : "#ffffff",
        }}
      >
        <Image source={logo} />
      </View>
      <ChangeThemeBtn mode={mode} setMode={setMode} />
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
