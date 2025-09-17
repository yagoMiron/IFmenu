import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  setter: (text: string) => void;
  placeholder: string;
  title: string;
  value: string;
  password?: boolean;
};

const InputText = ({ value, setter, placeholder, title, password }: Props) => {
  return (
    <View>
      <Text style={styles.title}>{title}:</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setter}
        placeholder={placeholder}
        secureTextEntry={password}
        placeholderTextColor={"#00a50080"}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderWidth: 2,
    borderColor: "#1a9e00ff",
    borderRadius: 15,
    fontSize: 24,
    color: "#007219ff",
  },
  title: {
    fontSize: 24,
    paddingHorizontal: 8,
    paddingVertical: 4,
    color: "#00a516ff",
    fontWeight: 600,
  },
});
