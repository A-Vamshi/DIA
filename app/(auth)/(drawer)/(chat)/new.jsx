import { View, Text, TouchableOpacity, Button, ScrollView, KeyboardAvoidingView, Platform, FlatList } from 'react-native'
import React, { useState } from 'react';
import { useAuth } from "@clerk/clerk-expo";
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/Header';
import { Stack } from 'expo-router';
import MessageInput from "../../../../components/MessageInput";
import MessageIdeas from "../../../../components/MessageIdeas";
import ChatMessage from '../../../../components/ChatMessage';


const New = () => {
     const { signOut } = useAuth();
     const [messages, setMessages] = useState("");
     const dummyMessages = [
      {
        id: 1,
        content: "Hello, how can I help you today?",
        role: "user",
        imageUrl: "https://img.freepik.com/premium-vector/ai-logo-template-vector-with-white-background_1023984-15069.jpg?w=1380",
        prompt: "GPT-3",
      },
      {
        id: 2,
        content: "I need help with react native",
        role: "bot",
        imageUrl: "https://i.pinimg.com/originals/c9/a3/df/c9a3df52577d1cee60fbc22c681d6f86.jpg",
        prompt: "GPT-3",
      }
     ]
  return (
    <SafeAreaView className="h-full w-full" >
      <View className="h-full w-full">
        {/* <Button title="Sign out" onPress={() => signOut()} /> */}
          <FlatList 
            data={dummyMessages}
            renderItem={(item) => (
              <ChatMessage item={item.item} />
            )}
            keyExtractor={item => item.id}
          />
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} 
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        >
          {messages.length === 0 && <MessageIdeas />}
          <MessageInput />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  )
} 

export default New;
