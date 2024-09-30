import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSharedValue } from 'react-native-reanimated';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const VoiceInput = () => {
  const [message, setMessage] = useState("");
  const { bottom } = useSafeAreaInsets();
  const expansion = useSharedValue(0);
  const [value, setValue] = useState("");

  return (
    <BlurView intensity={90} style={{bottom: 0, paddingTop: 0}} tint="extraLight" className="w-full absolute">
      <View className='rounded-2xl flex-row justify-center items-center'>
        <View className="bg-slate-500 h-1 w-full" />
            <TouchableOpacity className='p-2'>
              <Ionicons name="mic-circle" size={50} />
            </TouchableOpacity>
        <View className="bg-slate-500 h-1 w-full" />
      </View>
    </BlurView>
  )
}

export default VoiceInput;