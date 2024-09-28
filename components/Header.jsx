import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { Link, router, useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'


const Header = ({title}) => {
     const navigation = useNavigation();
  return (
     <View>
           <View className="bg-black h-14 flex-row justify-between">
               <View className="justify-center items-center m-2">
                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
                         <Ionicons name='menu' color="#fff" size={30} />
                    </TouchableOpacity>
               </View>
               <View className="justify-center">
                    <Text className="text-white text-xl font-bold">{title}</Text> 
               </View>
               <View className="justify-center items-center m-2">
                    <Link href="/(auth)/(drawer)/(chat)/new" push asChild>
                         <TouchableOpacity>
                              <Ionicons 
                              name="add-circle-outline" 
                              size={30} 
                              color="#fff"
                              style={{marginRight: 15}}
                              ></Ionicons>
                         </TouchableOpacity>
                    </Link>
               </View>
          </View>
     </View>
  )
}

export default Header