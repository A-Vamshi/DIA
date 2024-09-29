import { View, Text, TouchableOpacity, Button, ScrollView, KeyboardAvoidingView, Platform, FlatList } from 'react-native'
import React, { useState } from 'react';
import { useAuth } from "@clerk/clerk-expo";
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/Header';
import { Redirect, Stack } from 'expo-router';
import MessageInput from "../../../../components/MessageInput";
import MessageIdeas from "../../../../components/MessageIdeas";
import ChatMessage from '../../../../components/ChatMessage';

const New = () => {
     const { signOut } = useAuth();
     const [messages, setMessages] = useState("asdfghjkl");
     const [key, setKey] = useState("");
    //  if (!key || key == "") {
    //   return <Redirect href={'/(auth)/(modal)/settings'} />
    //  }
     const dummyMessages = [
      {
        id: 1,
        content: "Hello, how can I help you today?",
        role: "bot",
        prompt: "GPT-3",
      },
      {
        id: 2,
        content: "I need help with react native I need help with react native I need help with react native I need help with react native I need help with react native I need help with react native I need help with react native I need help with react native ",
        role: "user",
        imageUrl: "https://i.pinimg.com/originals/c9/a3/df/c9a3df52577d1cee60fbc22c681d6f86.jpg",
        prompt: "GPT-3",
      },
      {
        id: 3,
        content: "Hello, how can I help you today?",
        role: "bot",
        prompt: "GPT-3",
      },
      {
        id: 4,
        content: "I need help with react native I need help with react native I need help with react native I need help with react native I need help with react native I need help with react native I need help with react native I need help with react native ",
        role: "user",
        imageUrl: "https://i.pinimg.com/originals/c9/a3/df/c9a3df52577d1cee60fbc22c681d6f86.jpg",
        prompt: "GPT-3",
      },
      {
        id: 5,
        content: "Hello, how can I help you today?",
        role: "bot",
        prompt: "GPT-3",
      },
      {
        id: 6,
        content: "I need help with react native I need help with react native I need help with react native I need help with react native I need help with react native I need help with react native I need help with react native I need help with react native ",
        role: "user",
        imageUrl: "https://i.pinimg.com/originals/c9/a3/df/c9a3df52577d1cee60fbc22c681d6f86.jpg",
        prompt: "GPT-3",
      },
      {
        id: 7,
        content: "Hello, how can I help you today?",
        role: "bot",
        prompt: "GPT-3",
      },
      {
        id: 8,
        content: "I need help with react native I need help with react native I need help with react native I need help with react native I need help with react native I need help with react native I need help with react native I need help with react native ",
        role: "user",
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
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 50,
              marginTop: 0,
            }}
            keyboardDismissMode='on-drag'
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
