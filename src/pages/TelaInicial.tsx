import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import InputText from "../components/InputText";
import { Ionicons } from "@expo/vector-icons";


const TelaInicial = () => {
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
    <View style={styles.container}>
      <View style={styles.main}>
        <Image src="../../assets/"  />
        <Text style={styles.logo}>IFmenu</Text>
        <View style={styles.inputArea}>
          <InputText
            setter={setLogin}
            value={login}
            title="Login"
            placeholder="Digite seu login"
          />
          <InputText
            setter={setSenha}
            value={senha}
            title="Senha"
            placeholder="Digite sua senha"
            password
          />
          <Text
            style={{
              ...styles.invalidLogin,
              display: disableMessage ? "none" : undefined,
            }}
          >
            *Login ou Senha incorretos, tente novamente
          </Text>
          <TouchableOpacity style={styles.btn} onPress={toLogin}>
            <Text style={styles.btnText}>Logar</Text>
            <Ionicons name="arrow-forward" size={32} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TelaInicial;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#b6ffa8ff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#32A041",
    borderRadius: 15,
    marginTop: 16,
    gap: 8,
  },
  btnText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
  },
  main: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    minHeight: "50%",
    borderBottomWidth: 4,
    borderEndWidth: 4,
    borderColor: "#003303c3",
  },
  inputArea: {
    flex: 1,
    justifyContent: "space-evenly",
    padding: 16,
    gap: 8,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 32,
    padding: 12,
    textAlign: "center",
    color: "#0a8f10ff",
  },
  invalidLogin: {
    color: "red",
  },
});
