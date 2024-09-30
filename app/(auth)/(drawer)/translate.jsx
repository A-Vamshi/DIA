import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import MessageInput from '../../../components/MessageInput'
import VoiceInput from '../../../components/VoiceInput'

const translate = () => {
  return (
    <SafeAreaView className="h-full w-full" >
      <View className="h-full w-full">
        <VoiceInput />
      </View>
  </SafeAreaView>
  )
}

export default translate 