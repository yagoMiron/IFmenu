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
import { Entypo } from "@expo/vector-icons";
import ChangeThemeBtn from "../components/ChangeThemeBtn";
import Colors from "../enums/colors";
const logo = require("../../assets/menu2.svg");
const google = require("../../assets/google.png");
const backgroundLight = require("../../assets/backgroundpattern-light.png");
const backgroundDark = require("../../assets/backgroundpattern-dark.png");

const TelaInicial = () => {
  const [mode, setMode] = useState("dark");
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
          backgroundColor: mode === "dark" ? Colors.BG_DARK : Colors.BG_LIGHT,
        }}
      >
        <View
          style={{
            ...styles.logo,
            backgroundColor: mode === "dark" ? Colors.BG_DARK : Colors.BG_LIGHT,
          }}
        >
          <Image source={logo} />
        </View>
        <View style={styles.offset}>
          <View style={styles.titlebox}>
            <Entypo
              name="dot-single"
              size={42}
              color={mode === "dark" ? Colors.FONT_DARK : Colors.FONT_LIGHT}
            />
            <Text
              style={{
                ...styles.title,
                color: mode === "dark" ? Colors.FONT_DARK : Colors.FONT_LIGHT
              }}
            >
              Bem Vindo ao IFmenu!
            </Text>
          </View>
          <View style={styles.titlebox}>
            <Entypo
              name="dot-single"
              size={42}
              color={mode === "dark" ? Colors.FONT_DARK : Colors.FONT_LIGHT}
            />
            <Text
              style={{
                ...styles.subtitle,
                color: mode === "dark" ? Colors.FONT_DARK : Colors.FONT_LIGHT,
              }}
            >
              Faça login usando o seu{" "}
              <Text
                style={{
                  color: mode === "dark" ? Colors.FONT_EMPHASIS_1 : Colors.FONT_EMPHASIS_2,
                }}
              >
                e-mail Institucional
              </Text>{" "}
              e comece a usar
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "84%",
            marginTop: "auto",
          }}
        >
          <View
            style={{
              flex: 1,
              height: 3,
              backgroundColor: mode === "dark" ? Colors.FONT_DARK : Colors.FONT_LIGHT,
            }}
          />
          <View>
            <Text
              style={{
                width: 70,
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                color: mode === "dark" ? Colors.FONT_DARK : Colors.FONT_LIGHT,
              }}
            >
              Login
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              height: 3,
              backgroundColor: mode === "dark" ? Colors.FONT_DARK : Colors.FONT_LIGHT,
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image source={google} style={styles.btn_img} />
          <Text style={styles.btnText}>Entrar com Google</Text>
        </TouchableOpacity>
      </View>
      <ChangeThemeBtn
        mode={mode}
        setMode={setMode}
        extraStyles={{ position: "absolute", top: 10, right: 10 }}
      />
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
    marginTop: 20,
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
    maxWidth: 420,
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
});
