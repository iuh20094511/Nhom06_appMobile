import React, { Keyboard, KeyboardAvoidingView, Modal, Platform, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import LoginScreen from "./screens/Auth/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackView, createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "./screens/Auth/RegisterScreen";
import SingleChat from "./Component/Main/SingleChat";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MessageList from "./screens/MessageList";
import FollowScreen from "./screens/FollowScreen";
import {Image} from "react-native-elements";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Navigation from "../Navigation";
import {NativeScreenNavigationContainer} from "react-native-screens";
import ChatScreen from "./screens/ChatScreen";
import CreateGroupModal from "./screens/CreateGroupModal";
// import Navigation from "../Navigation";

// const Login =({ navigation }:any)=>{
//   return (
//     <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'padding' : 'height'} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <Text>Login Screen</Text>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   )
// }

// const Register =()=>{
//   return (
//     <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'padding' : 'height'} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <Text>Register Screen</Text>
//       </TouchableWithoutFeedback>
      
//     </KeyboardAvoidingView>
//   )
// }

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// function Navigation() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconSource;

//             if (route.name === 'Nhắn tin') {
//               iconSource = require('./screens/image/message'); // Import your message icon
//             } else if (route.name === 'Theo dõi') {
//               iconSource = require('./assets/image/follow_icon.png'); // Import your follow icon
//             } else if (route.name === 'Cá nhân') {
//               iconSource = require('./assets/image/profile_icon.png'); // Import your profile icon
//             }

//             return <Image source={iconSource} style={{ width: 24, height: 24 }} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: 'blue',
//           inactiveTintColor: 'gray',

//         }}
//       >
//         <Tab.Screen name="Nhắn tin" component={MessageList} />
//         <Tab.Screen name="Theo dõi" component={FollowScreen} />
//         <Tab.Screen name="Cá nhân" component={ProfileScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }


const App = ()=>{
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="DangnhapScreen" component={LoginScreen} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="DangkyScreen" component={RegisterScreen} options={{headerShown: false}}></Stack.Screen> */}
        {/* <Stack.Screen name="ProfileScreen" component={ProfileScreen} ></Stack.Screen> */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="MessageList" component={MessageList} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="ChatScreen" component={ChatScreen} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  //   <NavigationContainer>
  //    <Tab.Navigator screenOptions={({ route }) => ({
  //         tabBarIcon: ({ focused, color, size }) => {
  //           let iconName;

  //           if (route.name === 'Message') {
  //             iconName = focused
  //             ? 'message'
  //             : 'message'; 
  //           } else if (route.name === 'Follow') {
  //             iconName = focused
  //             ? 'supervised-user-circle'
  //             : 'supervised-user-circle';
  //           } else if (route.name === 'Profile') {
  //             iconName = focused
  //             ? 'perm-identity'
  //             : 'perm-identity';
  //           }

  //           return <Icon name={iconName} size={size} color={'green'} />;
  //         },
  //         tabBarActiveTintColor: 'blue',
  //         tabBarInactiveBackgroundColor: '#F3F3F3',
  //       })}
  //     >
  //       <Tab.Screen name="Message" component={MessageList} />
  //       <Tab.Screen name="Follow" component={FollowScreen} />
  //       <Tab.Screen name="Profile" component={ProfileScreen} />
  //     </Tab.Navigator>
  //   </NavigationContainer>
  );
} 
export default App;