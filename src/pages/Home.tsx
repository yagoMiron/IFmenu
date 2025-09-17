import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import InputText from "../components/InputText";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.text}>Seja bem vindo, Aderbal!</Text>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#a3a3ff",
    alignItems: "center",
    padding: 20,
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
    color: "#591ec5",
  },
});
