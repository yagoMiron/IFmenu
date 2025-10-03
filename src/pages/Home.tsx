import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useContext, useState } from "react";
import Header from "../components/Header";
import { UserContext } from "../context/UserContext";
import Colors from "../enums/colors";
const backgroundLight = require("../../assets/backgroundpattern-light.png");
const backgroundDark = require("../../assets/backgroundpattern-dark.png");
const dishe = require("../../assets/strogonof.jpg");
const cryEmogi = require("../../assets/cry.svg");
const cryGif = require("../../assets/cry.webp");
const sadEmogi = require("../../assets/sad.svg");
const sadGif = require("../../assets/sad.webp");
const neutralEmogi = require("../../assets/neutral.svg");
const neutralGif = require("../../assets/neutral.webp");
const smileEmogi = require("../../assets/smile.svg");
const smileGif = require("../../assets/smile.webp");
const happyEmogi = require("../../assets/happy.svg");
const happyGif = require("../../assets/happy.webp");

const Home = () => {
  const {
    theme,
    setAuthTime,
    setExp,
    setName,
    setEmail,
    setPhotoURL,
    isSessionValid,
    setTheme,
  } = useContext(UserContext);

  const [mode, setMode] = useState(theme);
  const [avaliacao, setAvaliacao] = useState(0);
  return (
    <ImageBackground
      source={mode === "dark" ? backgroundDark : backgroundLight}
      resizeMode="repeat"
      style={styles.container}
    >
      <Header mode={mode} setMode={setMode} />
      <View style={styles.main}>
        <View
          style={{
            ...styles.pratoDoDia,
            backgroundColor: mode === "dark" ? Colors.BG_DARK : Colors.BG_LIGHT,
          }}
        >
          <Image
            source={dishe}
            style={styles.disheImg}
            resizeMode="cover"
          ></Image>
          <Text
            style={{
              ...styles.dishe_title,
              color: mode === "dark" ? Colors.FONT_DARK : Colors.FONT_LIGHT,
            }}
          >
            Strogonof
          </Text>
          <Text
            style={{
              ...styles.dishe_description,
              color: mode === "dark" ? Colors.FONT_DARK : Colors.FONT_LIGHT,
            }}
          >
            Acompanhamentos: Strogonof de frango, batata palha e arroz branco
          </Text>
          <View style={styles.rating_section}>
            <TouchableOpacity
              style={styles.ratingBtn}
              onPress={() => {
                setAvaliacao(1);
              }}
            >
              <Image
                style={styles.rating_img}
                resizeMode="contain"
                source={avaliacao === 1 ? cryGif : cryEmogi}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ratingBtn}
              onPress={() => {
                setAvaliacao(2);
              }}
            >
              <Image
                style={styles.rating_img}
                resizeMode="contain"
                source={avaliacao === 2 ? sadGif : sadEmogi}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ratingBtn}
              onPress={() => {
                setAvaliacao(3);
              }}
            >
              <Image
                style={styles.rating_img}
                resizeMode="contain"
                source={avaliacao === 3 ? neutralGif : neutralEmogi}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ratingBtn}
              onPress={() => {
                setAvaliacao(4);
              }}
            >
              <Image
                style={styles.rating_img}
                resizeMode="contain"
                source={avaliacao === 4 ? smileGif : smileEmogi}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ratingBtn}
              onPress={() => {
                setAvaliacao(5);
              }}
            >
              <Image
                style={styles.rating_img}
                resizeMode="contain"
                source={avaliacao === 5 ? happyGif : happyEmogi}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
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
    width: "100%",
    paddingVertical: 40,
    height: "100%",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 28,
    padding: 12,
    textAlign: "center",
    color: "#31c51e",
  },
  pratoDoDia: {
    borderRadius: 40,
    borderBottomWidth: 4,
    borderEndWidth: 4,
    width: "100%",
    maxHeight: 700,
    maxWidth: 600,
  },
  disheImg: {
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    width: "100%",
    height: 400,
  },
  dishe_title: {
    fontSize: 28,
    fontWeight: "bold",
    padding: 20,
    paddingVertical: 10,
  },
  dishe_description: {
    fontSize: 20,
    paddingHorizontal: 28,
    paddingBottom: 30,
  },
  rating_section: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },
  ratingBtn: {
    flex: 1,
  },
  rating_img: {
    width: 90,
    height: 90,
  },
});
