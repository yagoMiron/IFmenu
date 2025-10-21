import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useContext, useState } from "react";
import Header from "../components/Header";
import { UserContext } from "../context/UserContext";
import Colors from "../enums/colors";
import RateBtn from "../components/RateBtn";
import Separator from "../components/Separator";
import { FontAwesome } from "@expo/vector-icons";
const backgroundLight = require("../../assets/backgroundpattern-light.png");
const backgroundDark = require("../../assets/backgroundpattern-dark.png");
const dishe = require("../../assets/strogonof.jpg");

const Plate = () => {
  const { theme } = useContext(UserContext);
  const [avaliacao, setAvaliacao] = useState(0);
  const [fav, setFav] = useState(false);

  const backgroundColor = theme === "dark" ? Colors.BG_DARK : Colors.BG_LIGHT;
  const fontColor = theme === "dark" ? Colors.FONT_DARK : Colors.FONT_LIGHT;
  return (
    <ImageBackground
      source={theme === "dark" ? backgroundDark : backgroundLight}
      resizeMode="repeat"
      style={styles.container}
    >
      <Header />
      <ScrollView style={{width:"100%"}} showsVerticalScrollIndicator={false}>
      <View style={styles.main}>
        <View
          style={{
            ...styles.pratoDoDia,
            backgroundColor: backgroundColor,
          }}
        >
          <Image source={dishe} style={styles.disheImg} resizeMode="cover" />
          <TouchableOpacity
            style={styles.fav_btn}
            onPress={() => {
              setFav(!fav);
            }}
          >
            {avaliacao > 3 &&
              (fav ? (
                <FontAwesome name="star" size={32} color="#ffef15" />
              ) : (
                <FontAwesome name="star-o" size={32} color="#ffef15" />
              ))}
          </TouchableOpacity>
          <Text
            style={{
              ...styles.dishe_title,
              color: theme === "dark" ? Colors.FONT_DARK : Colors.FONT_LIGHT,
            }}
          >
            Strogonof
          </Text>
          <Text
            style={{
              ...styles.dishe_description,
              color: fontColor,
            }}
          >
            Acompanhamentos: Strogonof de frango, batata palha e arroz branco
          </Text>
          <Separator title="Avalie o Prato!" />
          <View style={styles.rating_section}>
            <RateBtn
              emogiValue={1}
              rate={avaliacao}
              setAvaliacao={setAvaliacao}
            />
            <RateBtn
              emogiValue={2}
              rate={avaliacao}
              setAvaliacao={setAvaliacao}
            />
            <RateBtn
              emogiValue={3}
              rate={avaliacao}
              setAvaliacao={setAvaliacao}
            />
            <RateBtn
              emogiValue={4}
              rate={avaliacao}
              setAvaliacao={setAvaliacao}
            />
            <RateBtn
              emogiValue={5}
              rate={avaliacao}
              setAvaliacao={setAvaliacao}
            />
          </View>
        </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Plate;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    height: "100%",
    alignItems: "center",
  },
  main: {
    width: "100%",
    flex: 1,
    paddingVertical: 40,
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
    borderColor: "#00000097",
    width: "90%",
    maxWidth: 600,
    alignItems: "center",
  },
  disheImg: {
    borderTopStartRadius: 38,
    borderTopEndRadius: 38,
    width: "100%",
    height: 400,
  },
  dishe_title: {
    fontSize: 28,
    fontWeight: "bold",
    padding: 20,
    paddingVertical: 10,
    width: "100%",
  },
  dishe_description: {
    fontSize: 20,
    paddingHorizontal: 28,
    paddingBottom: 30,
  },
  rating_section: {
    flexDirection: "row",
    width: "84%",
    paddingBottom: 20,
    alignItems: "center",
  },
  fav_btn: {
    position: "absolute",
    top: 20,
    right: 20,
  },
});
