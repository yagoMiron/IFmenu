import { StyleSheet, Text, View } from "react-native";

type Props = {
  message: string;
  severity: string;
};

const Advice = ({ message, severity }: Props) => {
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  );
};

export default Advice;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f85c5c",
    borderRadius: 20,
    padding: 20,
    margin: 28,
  },
});
