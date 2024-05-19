import React from "react";
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
const HomeScreen = () => {
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
        <Tab.Screen name="Follow" component={FollowScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    // </NavigationContainer>
        
    )
};

export default HomeScreen;