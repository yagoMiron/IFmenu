import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import InputText from "../components/InputText";
import { useState } from "react";
import Header from "../components/Header";
const backgroundLight = require("../../assets/backgroundpattern-light.png");
const backgroundDark = require("../../assets/backgroundpattern-dark.png");

const Home = () => {
  const [mode, setMode] = useState("dark");
  return (
    <ImageBackground
      source={mode === "dark" ? backgroundDark : backgroundLight}
      resizeMode="repeat"
      style={styles.container}
    >
      <Header mode={mode} setMode={setMode} />
      <View style={styles.main}>
        <Text style={styles.text}>Seja bem vindo, Aderbal!</Text>
      </View>
    </ImageBackground>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    height: "100%",
    alignItems: "center",
  },
  main: {
    backgroundColor: "white",
    borderRadius: 20,
    borderBottomWidth: 4,
    borderEndWidth: 4,
    borderColor: "#160033c3",
  },
  text: {
    fontWeight: "bold",
    fontSize: 28,
    padding: 12,
    textAlign: "center",
    color: "#31c51e",
  },
});
