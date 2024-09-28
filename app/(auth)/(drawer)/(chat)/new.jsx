import { View, Text, TouchableOpacity, Button, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react';
import { useAuth } from "@clerk/clerk-expo";
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/Header';
import { Stack } from 'expo-router';
import MessageInput from "../../../../components/MessageInput";


const New = () => {
     const { signOut } = useAuth();
  return (
    <SafeAreaView className="h-full w-full" >
      <View className="h-full w-full">
        <Button title="Sign out" onPress={() => signOut()} />
        <ScrollView>
          {Array.from({length: 100}).map((_, index) => (
            <Text key={index} className="pb-20">{index}</Text>
          ))}
        </ScrollView>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} 
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        >
          <MessageInput />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  )
} 

export default New;
