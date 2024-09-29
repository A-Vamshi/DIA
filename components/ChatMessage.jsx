import { View, Text, Image } from 'react-native'
import React from 'react'

const ChatMessage = ({ item }) => {
  return (
    <View className="m-2">
        <Text>{item.imageUrl}</Text>
        {console.log(item)}
    </View>
  )
}

export default ChatMessage