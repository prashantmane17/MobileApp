import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Dashboard from "./screens/Dashboard";
import EcomDash from "./screens/EcomDash";
import MobileSection from "./screens/MobileSection";
import CustomDesign from "./screens/CustomDesign";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EcomDash"
          component={EcomDash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MobileSection"
          component={MobileSection}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CustomeScreen"
          component={CustomDesign}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
