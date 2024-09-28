import { Text, View, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';
import { Ionicons } from "@expo/vector-icons"
import TabBar from '../../components/TabBar';

const TabIcon = ({ name, text, color }) => {
     return (
          <View className="items-center justify-conter">
               <Ionicons
                    name={name}
                    size={16}
                    color={color}
               />
               <Text>{text}</Text>
          </View>
     )
}

const TabLayout = () => {
  return (
    <Tabs
     tabBar={(props) => <TabBar  {...props} />}
    >
     <Tabs.Screen 
          name="chat"
          options={{
               title: "Chat",
               headerShown: false,
          }}
     />
     <Tabs.Screen 
          name="image"
          options={{
               title: "Image",
               headerShown: false,
          }}
     />
     <Tabs.Screen 
          name="translate"
          options={{
               title: "Translate",
               headerShown: false,
          }}
     />
     <Tabs.Screen 
          name="voicechat"
          options={{
               title: "Voice Chat",
               headerShown: false,
          }}
     />
    </Tabs>
  );
}

export default TabLayout;