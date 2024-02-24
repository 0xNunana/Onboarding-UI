import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import LottieView from 'lottie-react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

const OnboardingScreen = () => {
  const navigation = useNavigation()

const handleDone =()=>{
  navigation.navigate('Home')
}
const handleSkip =()=>{
  navigation.navigate('Home')
}

//function to handle the done button appearance
// const handleDoneButton=({...props})=>{
// return (
//   <TouchableOpacity {...props} className='bg-red-300'>
//     <Text>Done kraa</Text>
//   </TouchableOpacity>
// )
// }


  return (
    <View className='flex-1 '>
     <Onboarding
onDone={handleDone}
onSkip={handleSkip}
// if you need to change button 
//DoneButtonComponent={handleDoneButton} 
     pages ={[
        {
            backgroundColor:'#C490E4',
            image:<LottieView source={require('../../assets/animations/categories.json')}
            style={{width:hp(50),height:hp(50)}}
            autoPlay loop/>,
            title:'Curated Categories',
            subtitle:'AI generated categories based on user patterns'
        },
        {
          backgroundColor:'#CDF0EA',
          image:<LottieView source={require('../../assets/animations/recipes.json')}
          style={{width:hp(50),height:hp(50)}}
          autoPlay loop/>,
          title:'High rated recipes',
          subtitle:'World class chef recipes for you'
      },
      {
        backgroundColor:'#DADDB1',
        image:<LottieView source={require('../../assets/animations/videos.json')}
        style={{width:hp(50),height:hp(50)}}
        autoPlay loop/>,
        title:'Videos to aid',
        subtitle:'Videos made for visual learners'
    }
     ]}
     />
    </View>
  )
}

export default OnboardingScreen;