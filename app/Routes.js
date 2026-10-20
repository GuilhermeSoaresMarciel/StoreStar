import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import defaultStyles from "./utils/defaultStyles";

import App from "./pages/App";
import PageTerms from "./pages/PageTerms";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: defaultStyles.surface },
          headerTintColor: defaultStyles.textPrimary,
        }}
        initialRouteName="StoreStar"
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="StoreStar"
          component={App}
        />
        <Stack.Screen name="Terms" component={PageTerms} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
