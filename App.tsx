import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TelaInicial from "./src/pages/TelaInicial";
import Home from "./src/pages/Home";
import HomeScreen from "./src/router/TabsRouter";
import { UserContextProvider } from "./src/context/UserContext";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ animation: "fade" }}
        >
          <Stack.Screen
            name="Login"
            component={TelaInicial}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContextProvider>
  );
}
