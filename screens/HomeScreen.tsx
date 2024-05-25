import React, {useEffect, useState} from "react";
import { Text } from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import MessageList from "./MessageList";
import FollowScreen from "./FollowScreen";
import ProfileScreen from "./ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Image} from "react-native-elements";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Navigation from "../../Navigation";
import ModalProfile from "./ModalProfile";

const Tab = createBottomTabNavigator();
const HomeScreen = ({route}) => {
  const [user, setUser] = useState(null);
  const handleUser = (newUser: any) => {setUser(newUser)}
  useEffect(()=>{
    const newuser = route.params.user
    console.log (newuser)
    console.log ('---------------USERmoi----------------------')
    setUser(newuser)
    
  },[user])
    return (
        
          // <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Message') {
              iconName = focused
              ? 'message'
              : 'message'; 
            } else if (route.name === 'Follow') {
              iconName = focused
              ? 'supervised-user-circle'
              : 'supervised-user-circle';
            } else if (route.name === 'Profile') {
              iconName = focused
              ? 'perm-identity'
              : 'perm-identity';
            }

            return <Icon name={iconName} size={size} color={'green'} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveBackgroundColor: '#F3F3F3',
        })}
      >
        <Tab.Screen name="Message" component={MessageList} />
        {/* <Tab.Screen name="Follow" component={FollowScreen} /> */}
        <Tab.Screen name="Follow">
          {(props) => <FollowScreen {...props} user = {user.user} handleUser = {handleUser} />}
        </Tab.Screen>
        {/* <Tab.Screen name="Profile" component={ProfileScreen} user = {user} handleUser = {handleUser}/> */}
        <Tab.Screen name="Profile">
          {(props) => <ProfileScreen {...props} user = {user.user} handleUser = {handleUser} />}
        </Tab.Screen>
      </Tab.Navigator>
    // </NavigationContainer>
        
    )
};

export default HomeScreen;