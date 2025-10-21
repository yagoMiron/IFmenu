import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
const dishe = require("../../assets/strogonof.jpg");
const data = [
  {
    dia: new Date("2025-10-19T03:24:00"),
    seraServido: false,
    nome: "-",
  },
  {
    dia: new Date("2025-10-20T03:24:00"),
    seraServido: true,
    nome: "Strogonof",
  },
  {
    dia: new Date("2025-10-21T03:24:00"),
    seraServido: true,
    nome: "Strogonof",
  },
  {
    dia: new Date("2025-10-22T03:24:00"),
    seraServido: true,
    nome: "Strogonof",
  },
  {
    dia: new Date("2025-10-23T03:24:00"),
    seraServido: true,
    nome: "Strogonof",
  },
  {
    dia: new Date("2025-10-24T03:24:00"),
    seraServido: true,
    nome: "Strogonof",
  },
  {
    dia: new Date("2025-10-25T03:24:00"),
    seraServido: false,
    nome: "-",
  },
];

const WeekCalendar = () => {
  const getDayName = (day: number) => {
    switch (day) {
      case 0:
        return "DOM.";
      case 1:
        return "SEG.";
      case 2:
        return "TER.";
      case 3:
        return "QUA.";
      case 4:
        return "QUI.";
      case 5:
        return "SEX.";
      case 6:
        return "SAB.";
      default:
        return "";
    }
  };
  const item = ({
    item,
  }: {
    item: {
      dia: Date;
      seraServido: boolean;
      nome: string;
    };
  }) => (
    <View style={styles.weekRow}>
      <View style={styles.dayCollum}>
        <Text style={{ fontSize: 32, fontWeight: "bold", textAlign: "center" }}>
          {item.dia.getDate()}
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}>
          {getDayName(item.dia.getDay())}
        </Text>
      </View>
      <View style={styles.titleCollum}>
        <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}>
          {item.nome}
        </Text>
      </View>
      <View style={styles.disheCollum}>
        {item.seraServido ? (
          <Image source={dishe} style={styles.disheImg} resizeMode="cover" />
        ) : (
          <Text
            style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}
          >
            -
          </Text>
        )}
      </View>
    </View>
  );
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <View style={styles.dayCollum}>
          <Text
            style={{
              width: 80,
              fontSize: 32,
              fontWeight: "bold",
              textAlign: "center",
              color: "#f0f0f0",
            }}
          >
            DIA
          </Text>
        </View>

        <View style={styles.titleCollum}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
              color: "#f0f0f0",
            }}
          >
            NOME
          </Text>
        </View>
        <View style={styles.disheCollum}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
              color: "#f0f0f0",
            }}
          >
            PRATO
          </Text>
        </View>
      </View>
      <FlatList
        style={{ width: "100%", backgroundColor: "#ccc" }}
        data={data}
        renderItem={item}
        keyExtractor={(item) => item.dia.getDay().toString()}
      />
    </View>
  );
};

export default WeekCalendar;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 10,
  },
  dayCollum: {
    width: 80,
  },
  disheCollum: {
    flex: 1,
  },
  disheImg: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  titleCollum: {
    flex: 1,
  },
  weekRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    padding: 10,
  },
});
