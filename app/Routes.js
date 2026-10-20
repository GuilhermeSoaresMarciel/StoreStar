import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import App from "./pages/App";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen
          options={{ headerShown: false }}
          name="App"
          component={App}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
