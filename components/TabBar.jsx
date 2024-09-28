import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react'; 
import { Ionicons } from "@expo/vector-icons";


const TabBar = ({ state, descriptors, navigation }) => {
     
     const greyColor = "#737373"
     const outlineColor = "#2186FF"

     const icons = {
          chat: (props) => <Ionicons name="chatbox" size={20} color={greyColor} {...props} />,
          image: (props) => <Ionicons name="image" size={20} color={greyColor} {...props} />, 
          translate: (props) => <Ionicons name="language" size={20} color={greyColor} {...props} />, 
          voicechat: (props) => <Ionicons name="mic" size={20} color={greyColor} {...props} />,
     }

  return (
     <View style={styles.tabbar}>
     {state.routes.map((route, index) => {
       const { options } = descriptors[route.key];
       const label =
         options.tabBarLabel !== undefined
           ? options.tabBarLabel
           : options.title !== undefined
           ? options.title
           : route.name;

       if (["_sitemap", "+not-found"].includes(route.name)) return null;

       const isFocused = state.index === index;

       const onPress = () => {
         const event = navigation.emit({
           type: 'tabPress',
           target: route.key,
           canPreventDefault: true,
         });

         if (!isFocused && !event.defaultPrevented) {
           navigation.navigate(route.name, route.params);
         }
       };

       const onLongPress = () => {
         navigation.emit({
           type: 'tabLongPress',
           target: route.key,
         });
       };

       return (
         <TouchableOpacity
           key={route.name}
           accessibilityRole="button"
           accessibilityState={isFocused ? { selected: true } : {}}
           accessibilityLabel={options.tabBarAccessibilityLabel}
           testID={options.tabBarTestID}
           onPress={onPress}
           onLongPress={onLongPress}
           style={styles.tabbarItem}
         >
          {
               icons[route.name]({
                    color: isFocused ? outlineColor : greyColor
               })
          }
           <Text style={{ 
               color: isFocused ? outlineColor : greyColor,
               fontSize: 11,
           }}>
             {label}
           </Text>
         </TouchableOpacity>
       );
     })}
   </View>
  )
}

export default TabBar;

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    backgroundColor: "black",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    borderCurve: "continuous",
    shadowColor: "black",
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 30,
    shadowOpacity: 1,
  },
  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});