import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from "@expo/vector-icons"
import { router, Redirect } from "expo-router"

const Signs = () => {
  const [visible, setvVisible] = useState(false);

  return (
    <View className='bg-black justify-center items-center bottom-0 absolute p-6'>
      <TouchableOpacity className='h-[50px] min-w-full bg-black border-outline border-2 justify-center items-center rounded-xl p-1 m-1'>
        <Ionicons name="logo-apple" size={14} color={"#FFF"}> <Text className='text-base text-white'> Continue with apple</Text> </Ionicons> 
      </TouchableOpacity>
      <TouchableOpacity className='h-[50px] min-w-full bg-black border-outline border-2 justify-center items-center rounded-xl p-1 m-1'>
        <Ionicons name="logo-google" size={14} color={"#FFF"}> <Text className='text-base text-white'> Continue with google</Text> </Ionicons> 
      </TouchableOpacity>
      <TouchableOpacity className='h-[50px] min-w-full bg-black border-outline border-2 justify-center items-center rounded-xl p-1 m-1'
        onPress={() => router.push("/login")}
      >
        <Ionicons name="mail" size={14} color={"#FFF"}> <Text className='text-base text-white'> Continue with email</Text> </Ionicons> 
      </TouchableOpacity>
      <TouchableOpacity className='h-[50px] min-w-full bg-black border-outline border-2 justify-center items-center rounded-xl p-1 m-1'
        onPress={() => router.push("/chat")}
      >
        <Ionicons name="home" size={14} color={"#FFF"}> <Text className='text-base text-white'> Home </Text> </Ionicons> 
      </TouchableOpacity>
    </View>
  )
}

export default Signs