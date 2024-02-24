import { View, Text,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native'
import { heightPercentageToDP  as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'
import { removeItem } from '../Util/asyncstorage'
import { useNavigation } from '@react-navigation/native'

const {width,height}=Dimensions.get('screen')




const HomeScreen = () => {
  const navigation = useNavigation()
   const handleReset=async()=>{
    await removeItem('onboarded')
    navigation.navigate('Onboard')
   }
  



  return (
    <SafeAreaView className='flex-1 items-center'>
    
    <LottieView 
    source={require('../../assets/animations/videos.json')}
    style={{width:width,height:width}}
    />
    <View>
        <Text style={{fontSize:hp(5.5),marginBottom:20}}>Welcome</Text>
    </View>
    <TouchableOpacity 
    onPress={handleReset}
    style={{backgroundColor:'gray',padding:10,borderRadius:8}}>
        <Text className='text-white'>Reset</Text>
    </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomeScreen