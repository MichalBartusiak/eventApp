import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeView from "./views/HomeView/HomeView";
import { NavigationContainer } from "@react-navigation/native";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import FormView from "./views/FormView/FormView";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <GluestackUIProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeView} />
          <Stack.Screen name="formView" component={FormView} />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({});
