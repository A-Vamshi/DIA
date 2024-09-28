import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Image, SafeAreaView, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import images from "../../../constants/images"
import { Link } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-react";


const Layout = () => {
  const dimentions = useWindowDimensions();
  return (
    <Drawer
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: "#000",
        // headerShown: false,
        drawerActiveBackgroundColor: "#2186FF",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#fff",
        drawerItemStyle: {
          borderRadius: 30,
          borderColor: "#2186FF",
          borderWidth: 2,
        },
        drawerContentStyle: {
          backgroundColor: "#000",
        }
      }}
    >
      <Drawer.Screen 
        name="(chat)/new" 
        getId={() => Math.random().toString()}
        options={{
          title: "New Chat",
          // header: () => (
          //   <View className="bg-black h-14">
          //   </View>
          // ), 
          headerShown: true,
          drawerIcon: () => (
            <View>
              <Ionicons name="chatbox-ellipses-outline" size={20} color="#fff"></Ionicons>
            </View>
          ),
          headerRight: () => (
            <Link href="/(auth)/(drawer)/(chat)/new" push asChild>
              <TouchableOpacity>
                <Ionicons 
                  name="add-circle-outline" 
                  size={30} 
                  style={{marginRight: 15}}
                ></Ionicons>
              </TouchableOpacity>
            </Link>
          )
        }} 
      />
      <Drawer.Screen 
        name="image" 
        options={{
          title: "Image",
          drawerIcon: () => (
            <Ionicons name="image-outline" size={20} color="#fff"></Ionicons>
          ),
          headerRight: () => (
            <Link href="/(auth)/(drawer)/(chat)/new" push asChild>
              <TouchableOpacity>
                <Ionicons 
                  name="add-circle-outline" 
                  size={30} 
                  style={{marginRight: 15}}
                ></Ionicons>
              </TouchableOpacity>
            </Link>
          )
        }} 
      />
      <Drawer.Screen 
        name="voice" 
        getId={() => Math.random().toString()}
        options={{
          title: "Voice Assistant",
          drawerIcon: () => (
            <Ionicons name="mic-circle-outline" size={20} color="#fff"></Ionicons>
          ),
          headerRight: () => (
            <Link href="/(auth)/(drawer)/(chat)/new" push asChild>
              <TouchableOpacity>
                <Ionicons 
                  name="add-circle-outline" 
                  size={30} 
                  style={{marginRight: 15}}
                ></Ionicons>
              </TouchableOpacity>
            </Link>
          )
        }} 
      />
      <Drawer.Screen 
        name="translate" 
        getId={() => Math.random().toString()}
        options={{
          title: "Translate",
          drawerIcon: () => (
            <Ionicons name="language" size={20} color="#fff"></Ionicons>
          ),
          headerRight: () => (
            <Link href="/(auth)/(drawer)/(chat)/new" push asChild>
              <TouchableOpacity>
                <Ionicons 
                  name="add-circle-outline" 
                  size={30} 
                  style={{marginRight: 15}}
                ></Ionicons>
              </TouchableOpacity>
            </Link>
          )
        }} 
      />
    </Drawer>
  )
}

export default Layout;
