import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { useAuth } from "@clerk/clerk-expo";
import { SafeAreaView } from 'react-native-safe-area-context';



const Index = () => {
     const { signOut } = useAuth();
  return (
    <SafeAreaView>
      <TouchableOpacity
        className="p-2"
        onPress={signOut}
      >
          <View className="justify-center items-center">
               <Text className="text-blue-900 font-bold text-base underline">Sign Out</Text>
          </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Index;