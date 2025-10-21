import { FlatList, Text, View } from "react-native";
import React from "react";
const data = [
  {
    dia: new Date("2025-10-19T03:24:00"),
    seraServido: false,
    prato: "",
    descricao: "",
  },
  {
    dia: new Date("2025-10-20T03:24:00"),
    seraServido: true,
    prato: "Strogonof",
    descricao:
      "Acompanhamentos: Strogonof de frango, batata palha e arroz branco",
  },
  {
    dia: new Date("2025-10-21T03:24:00"),
    seraServido: true,
    prato: "Strogonof",
    descricao:
      "Acompanhamentos: Strogonof de frango, batata palha e arroz branco",
  },
  {
    dia: new Date("2025-10-22T03:24:00"),
    seraServido: true,
    prato: "Strogonof",
    descricao:
      "Acompanhamentos: Strogonof de frango, batata palha e arroz branco",
  },
  {
    dia: new Date("2025-10-23T03:24:00"),
    seraServido: true,
    prato: "Strogonof",
    descricao:
      "Acompanhamentos: Strogonof de frango, batata palha e arroz branco",
  },
  {
    dia: new Date("2025-10-24T03:24:00"),
    seraServido: true,
    prato: "Strogonof",
    descricao:
      "Acompanhamentos: Strogonof de frango, batata palha e arroz branco",
  },
  {
    dia: new Date("2025-10-25T03:24:00"),
    seraServido: false,
    prato: "",
    descricao: "",
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
      prato: string;
      descricao: string;
    };
  }) => (
    <View style={{ flexDirection: "row" }}>
      <View style={{ width: 80, backgroundColor: "lightyellow" }}>
        <Text style={{ fontSize: 32, fontWeight: "bold", textAlign: "center" }}>
          {item.dia.getDate()}
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}>
          {getDayName(item.dia.getDay())}
        </Text>
      </View>
      <View style={{ width: 400, backgroundColor: "lightpink" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}>
          {item.prato}
        </Text>
      </View>
      <View style={{ width: 400, backgroundColor: "lavender" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}>
          {item.descricao}
        </Text>
      </View>
    </View>
  );
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ backgroundColor: "lightyellow" }}>
          <Text
            style={{
              width: 80,
              fontSize: 32,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            DIA
          </Text>
        </View>
        <View style={{ width: 400, backgroundColor: "lightpink" }}>
          <Text
            style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}
          >
            Prato
          </Text>
        </View>
        <View style={{ width: 400, backgroundColor: "lavender" }}>
          <Text
            style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}
          >
            Descrição
          </Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={item}
        keyExtractor={(item) => item.dia.getDay().toString()}
      />
    </View>
  );
};

export default WeekCalendar;
