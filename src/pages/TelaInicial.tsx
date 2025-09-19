import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import InputText from "../components/InputText";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
const logo = require("../../assets/menu2.svg");
const google = require("../../assets/google.png");
const backgroundLight = require("../../assets/backgroundpattern-light.png");
const backgroundDark = require("../../assets/backgroundpattern-dark.png");

const TelaInicial = () => {
  const [mode, setMode] = useState("dark");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [disableMessage, setDiseble] = useState(true);
  const toLogin = () => {
    if (login === "Aderbal" && senha === "123456") {
      navigation.navigate("Home");
    } else {
      setDiseble(false);
    }
  };
  const navigation = useNavigation<any>();
  return (
    <ImageBackground
      source={mode === "dark" ? backgroundDark : backgroundLight}
      resizeMode="repeat"
      style={styles.container}
    >
      <View
        style={{
          ...styles.main,
          backgroundColor: mode === "dark" ? "#616161" : "#ffffff",
        }}
      >
        <View
          style={{
            ...styles.logo,
            backgroundColor: mode === "dark" ? "#616161" : "#ffffff",
          }}
        >
          <Image source={logo} />
        </View>
        <View style={styles.offset}>
          <View style={styles.titlebox}>
            <Entypo
              name="dot-single"
              size={42}
              color={mode === "dark" ? "#f0f0f0" : "#52cc62"}
            />
            <Text
              style={{
                ...styles.title,
                color: mode === "dark" ? "#f0f0f0" : "#52cc62",
              }}
            >
              Bem Vindo ao IFmenu!
            </Text>
          </View>
          <View style={styles.titlebox}>
            <Entypo
              name="dot-single"
              size={42}
              color={mode === "dark" ? "#f0f0f0" : "#52cc62"}
            />
            <Text
              style={{
                ...styles.subtitle,
                color: mode === "dark" ? "#f0f0f0" : "#52cc62",
              }}
            >
              Faça login usando o seu{" "}
              <Text
                style={{
                  color: mode === "dark" ? "#52cc62" : "#C8191E",
                }}
              >
                e-mail Institucional
              </Text>{" "}
              e comece a usar
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btn} onPress={toLogin}>
          <Image source={google} style={styles.btn_img} />
          <Text style={styles.btnText}>Entrar com Google</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
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
    </ImageBackground>
  );
};

export default TelaInicial;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    flexDirection: "row",
    backgroundColor: "#fefefe",
    marginTop: "auto",
    marginBottom: 32,
    borderWidth: 2,
    borderColor: "#afafaf",
    borderRadius: 10,
    padding: 16,
    gap: 16,
    alignItems: "center",
  },
  btn_img: {
    height: 28,
    width: 28,
  },
  btnText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    color: "w0f0f0f",
  },
  main: {
    alignItems: "center",
    width: "80%",
    borderRadius: 20,
    minHeight: "50%",
    shadowColor: "#1f1f1f",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  titlebox: {
    alignItems: "center",
    textAlign: "right",
    flexDirection: "row",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "Schoolbell",
    fontStyle: "italic",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Schoolbell",
    fontStyle: "italic",
  },
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
  invalidLogin: {
    color: "red",
  },
  offset: {
    position: "relative",
    top: -120,
    width: "90%",
    gap: 10,
  },
  themeButton: {
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderWidth: 2,
    borderColor: "#4e4e4e",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderRadius: "50%",
    position: "absolute",
    top: 10,
    right: 10,
  },
});
