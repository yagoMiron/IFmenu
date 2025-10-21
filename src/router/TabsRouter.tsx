import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../pages/Home";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Colors from "../enums/colors";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import Plate from "../pages/Plate";
import Calendar from "../pages/Calendar";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const { theme } = useContext(UserContext);
  const fontColor = theme === "dark" ? Colors.FONT_DARK : Colors.FONT_LIGHT;

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: "shift",
        tabBarStyle: {
          backgroundColor: theme === "dark" ? Colors.BG_DARK : Colors.BG_LIGHT,
          height: 80,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 600,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5
              name="home"
              size={size * 1.2}
              color={color}
              style={{ padding: 10 }}
            />
          ),
          tabBarActiveTintColor: Colors.FONT_EMPHASIS_1,
          tabBarInactiveTintColor: fontColor,
          tabBarItemStyle: { margin: "auto" },
        }}
      />
      <Tab.Screen
        name="Plate"
        component={Plate}
        options={{
          title: "Prato",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="silverware-fork-knife"
              size={size * 1.2}
              color={color}
            />
          ),
          tabBarActiveTintColor: Colors.FONT_EMPHASIS_1,
          tabBarInactiveTintColor: fontColor,
          tabBarItemStyle: { margin: "auto" },
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          title: "Calendário",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="calendar" size={size * 1.2} color={color} />
          ),
          tabBarActiveTintColor: Colors.FONT_EMPHASIS_1,
          tabBarInactiveTintColor: fontColor,
          tabBarItemStyle: { margin: "auto" },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Home}
        options={{
          title: "Favoritos",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="star" size={size * 1.2} color={color} />
          ),
          tabBarActiveTintColor: Colors.FONT_EMPHASIS_1,
          tabBarInactiveTintColor: fontColor,
          tabBarItemStyle: { margin: "auto" },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
