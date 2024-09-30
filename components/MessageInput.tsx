import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSharedValue } from 'react-native-reanimated';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { bottom } = useSafeAreaInsets();
  const expansion = useSharedValue(0);
  const [value, setValue] = useState("");

  return (
    <BlurView intensity={90} style={{bottom: 0, paddingTop: 0}} tint="extraLight" className="w-full absolute">
      <View className='m-2 rounded-2xl flex-row justify-center items-center'>
        <TextInput
          autoFocus
          placeholder='Message'
          multiline
          className='bg-white font-bold mb-1 rounded-2xl p-1 pl-3 border-[1px] border-gray-200 flex-1'
          value={value}
          onChangeText={(e) => setValue(e)}
        />
        { value.length > 0 ? (
            <TouchableOpacity className='p-2'>
              <Ionicons name="arrow-up-circle" size={25} />
            </TouchableOpacity>
        ) : (
          <TouchableOpacity className='p-2'>
            <Ionicons name="headset" size={25} />
          </TouchableOpacity>
        ) } 
      </View>
    </BlurView>
  )
}

export default MessageInput;