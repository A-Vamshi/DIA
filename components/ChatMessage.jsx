import { View, Text, Image } from 'react-native'
import React from 'react'

const ChatMessage = ({ item }) => {
  const botImg = "https://img.freepik.com/premium-vector/ai-logo-template-vector-with-white-background_1023984-15069.jpg?w=1380"
  return (
    <View className="flex flex-start mx-10 gap-3 my-2">
      {item.role === "bot" ? (
        <View className="flex-row justify-start items-center px-2">
          <Image source={{uri: botImg}} className="h-10 w-10 rounded-full" />
          <Text className="p-1 font-semibold">{item.content}</Text>
        </View>
      ) : (
        <View className="flex-row justify-start items-center px-2">
          <Image source={{uri: item.imageUrl}} className="h-10 w-10 rounded-full" />
          <Text className="p-1 font-semibold">{item.content}</Text>
      </View>
      )}
    </View>
  )
}

export default ChatMessage