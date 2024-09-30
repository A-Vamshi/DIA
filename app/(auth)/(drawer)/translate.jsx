import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import MessageInput from '../../../components/MessageInput'

const translate = () => {
  return (
    <SafeAreaView className="h-full w-full" >
      <View className="h-full w-full">
        <MessageInput />
      </View>
  </SafeAreaView>
  )
}

export default translate 