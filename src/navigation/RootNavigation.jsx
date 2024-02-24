
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import { useEffect, useState } from "react";
import { getItem } from "../Util/asyncstorage"; 


const Root = createNativeStackNavigator()

const RootNavigation = () => {
const [showOnboarding,setShowOnboarding]=useState(null)
    useEffect(()=>{
checkIfOnboarded()
    },[])


const checkIfOnboarded=async()=>{
    let isBoarded = await getItem('onboarded')
 
    if(isBoarded==1){
        //hide onBoarding
        setShowOnboarding(false)
    }else{
        //show onboarding
        setShowOnboarding(true)
    }
}

if (showOnboarding==null){
    return null
}

if (showOnboarding){

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
}else {
    return(
    <Root.Navigator 
    initialRouteName="Home"
    screenOptions={{
      headerShown:false
    }}
    >
    <Root.Screen name="Onboard" component={OnboardingScreen} />
      <Root.Screen name="Home" component={HomeScreen} />
    </Root.Navigator>)
}

}

export default RootNavigation