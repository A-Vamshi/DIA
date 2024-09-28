import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import images from "../constants/images"
const Intro = () => {
  return (
     <View>
          <Image 
               source={images.intro}
               resizeMode="contain"
               className='w-80'
          />
     </View>
  )
}

export default Intro;