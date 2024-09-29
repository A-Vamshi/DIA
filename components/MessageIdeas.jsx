import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const predefinedMessages = [
    { title: "Explain React native", text: "like I'm 5 years old" },
    { title: "Suggest fun activities", text: "for a family visiting Japan" },
    { title: "Recommend me a dish", text: "to impress my friend who's a picky eater" },
]

const MessageIdeas = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {predefinedMessages.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => {}}>
          <View className='p-5 m-2 flex bg-gray-200 rounded-xl'>
            <Text className='font-bold text-gray-700'>{item.title}</Text>
            <Text className='text-gray-500'>{item.text}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default MessageIdeas
