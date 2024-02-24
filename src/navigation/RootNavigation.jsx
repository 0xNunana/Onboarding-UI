
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
const Root = createNativeStackNavigator()

const RootNavigation = () => {
  return (
  <Root.Navigator 
  initialRouteName="Onboard"
  screenOptions={{
    headerShown:false
  }}
  >
  <Root.Screen name="Onboard" component={OnboardingScreen} />
    <Root.Screen name="Home" component={HomeScreen} />
  </Root.Navigator>
  )
}

export default RootNavigation