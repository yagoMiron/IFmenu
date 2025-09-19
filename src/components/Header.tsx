import { Image, StyleSheet, View } from "react-native";
const logo = require("../../assets/menu2.svg");

type Props = {
  mode: string;
};

const Header = ({ mode }: Props) => {
  return (
    <View>
      <View
        style={{
          ...styles.logo,
          backgroundColor: mode === "dark" ? "#616161" : "#ffffff",
        }}
      >
        <Image source={logo} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  logo: {
    borderRadius: "50%",
    backgroundColor: "#616161",
    position: "relative",
    top: -84,
    paddingVertical: 10,
    height: 160,
    alignItems: "center",
    paddingHorizontal: 2,
    width: 160,
  },
});
