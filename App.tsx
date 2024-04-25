import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import HomeScreen from "./screens/HomeScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CVFormScreen from "./screens/CVFormScreen"

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CVFormScreen" component={CVFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
