import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import ImageInput from '../../../components/ImageInput'

const Image = () => {
  return (
    <SafeAreaView className="h-full w-full" >
      <View className="h-full w-full">
        <ImageInput />
      </View>
  </SafeAreaView>
  )
}

export default Image;