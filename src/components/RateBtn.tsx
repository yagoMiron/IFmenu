import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Reactions from "../enums/reactions";
import Colors from "../enums/colors";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

type Props = {
  emogiValue: number;
  rate: number;
  setAvaliacao: (value: React.SetStateAction<number>) => void;
};

const RateBtn = ({ emogiValue, rate, setAvaliacao }: Props) => {
  const { theme } = useContext(UserContext);
  const retornaImg = (value: number) => {
    switch (value) {
      case 1:
        return Reactions.CRY_EMOGI;
      case 2:
        return Reactions.SAD_EMOGI;
      case 3:
        return Reactions.NEUTRAL_EMOGI;
      case 4:
        return Reactions.SMILE_EMOGI;
      default:
        return Reactions.HAPPY_EMOGI;
    }
  };
  const retornaGIF = (value: number) => {
    switch (value) {
      case 1:
        return Reactions.CRY_GIF;
      case 2:
        return Reactions.SAD_GIF;
      case 3:
        return Reactions.NEUTRAL_GIF;
      case 4:
        return Reactions.SMILE_GIF;
      default:
        return Reactions.HAPPY_GIF;
    }
  };
  const retornaTitle = (value: number) => {
    switch (value) {
      case 1:
        return "Horrivel";
      case 2:
        return "Ruim";
      case 3:
        return "OK";
      case 4:
        return "Bom";
      default:
        return "Perfeito!";
    }
  };
  return (
    <View
      style={{
        alignItems: "center",
        height: "100%",
        flex: 1,
      }}
    >
      <TouchableOpacity
        style={{
          ...styles.ratingBtn,
          flex: rate === emogiValue ? 1.5 : 1,
          minHeight: 80,
        }}
        onPress={() => {
          setAvaliacao(emogiValue);
        }}
      >
        <Image
          source={
            rate === emogiValue
              ? retornaGIF(emogiValue)
              : retornaImg(emogiValue)
          }
          resizeMode="contain"
          style={{
            ...styles.rating_img,
            opacity: rate !== emogiValue ? 0.3 : 1,
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          ...styles.title,
          color: theme === "dark" ? Colors.FONT_DARK : Colors.FONT_LIGHT,
        }}
      >
        {retornaTitle(emogiValue)}
      </Text>
    </View>
  );
};
export default RateBtn;

const styles = StyleSheet.create({
  ratingBtn: {
    width: "100%",
    alignItems: "center",
    height: "100%",
  },
  rating_img: {
    maxWidth: 200,
    minHeight: 90,
    maxHeight: 200,
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: "bold",
  },
});
