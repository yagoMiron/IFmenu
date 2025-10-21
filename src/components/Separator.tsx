import { Text, View } from "react-native";
import Colors from "../enums/colors";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

type Props = {
  title: string;
};

const Separator = ({ title }: Props) => {
  const { theme } = useContext(UserContext);
  const fontColor = theme === "dark" ? Colors.FONT_DARK : Colors.FONT_LIGHT;
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
          backgroundColor: fontColor,
        }}
      />
      <View>
        <Text
          style={{
            marginHorizontal: 5,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: fontColor,
          }}
        >
          {title}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          height: 3,
          backgroundColor: fontColor,
        }}
      />
    </View>
  );
};

export default Separator;
