import { Text, View } from "react-native";
import Colors from "../enums/colors";

type Props = {
  title: string;
  mode: string;
};

const Separator = ({ mode, title }: Props) => {
  return (
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
          backgroundColor:
            mode === "dark" ? Colors.FONT_DARK : Colors.FONT_LIGHT,
        }}
      />
      <View>
        <Text
          style={{
            marginHorizontal: 5,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: mode === "dark" ? Colors.FONT_DARK : Colors.FONT_LIGHT,
          }}
        >
          {title}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          height: 3,
          backgroundColor:
            mode === "dark" ? Colors.FONT_DARK : Colors.FONT_LIGHT,
        }}
      />
    </View>
  );
};

export default Separator;
