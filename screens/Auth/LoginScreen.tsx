import React, {useEffect, useState} from "react";
import { Alert, Button, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
// import ""./LoginScreen.css";
import RegisterScreen from "./RegisterScreen";
import {NavigationContainer} from '@react-navigation/native';
import {color} from "react-native-elements/dist/helpers";
import axios from "axios";
import {Image} from "react-native-elements";
// import {createStackNavigator} from '@react-navigation/stack';


const LoginScreen = (props: any)=> {
    const [isCheck, setIsCheck] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkUsername, setCheckUsername] = useState(true);
    const [errorPassword, setErrorPassword] = useState('');
    const [data, setData] = useState('');

    const formData = {
        username: username,
        password: password,
    }


    //Call API loginUser
    const loginUser = async (formData: any) => {
        try {
            await axios.post('http://192.168.134.1:5000/auth/login', formData).then((response)=> {
                console.log(response.data); // Log the response from the server
            })
            props.navigation.navigate('HomeScreen');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    console.error('Server responded with status code:', error.response.status);
                    console.error('Response data:', error.response.data);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error('No response received from server');
                } else {
                    // Something else happened while setting up the request
                    console.error('Error setting up request:', error.message);
                }
            } else {
                // Handle other types of errors
                console.error('Unknown error occurred:');
            }
            // Handle error - display error message or show an alert
        }
    };

    //validate 
    const onSubmit = () =>{
        let regexUsername = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        if (!regexUsername.test(formData.username)){
            setCheckUsername(false);
        } else{
            setCheckUsername(true);
            console.log('formData', formData);
        }
        
        
        if (formData.password === ''){
            setErrorPassword('*The password field is required.');
        } else{
            setErrorPassword('')
        }
        loginUser(formData)  
    }

    //navigation
    const onPress = () => {
        props.navigation.navigate('DangkyScreen');
      };
    

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'padding' : 'height'} style={styles.container}>
            <SafeAreaView>
                <StatusBar backgroundColor={'#FFFFFF'} barStyle={"dark-content"}></StatusBar>
                <View style={styles.title}>
                    <Text style={{fontWeight: 'bold', fontSize: 100, color:'#38BA2F'}}>Zolo</Text>
                </View>
                {/* <View>
                    <Image source={require('logo.png')}></Image>
                </View> */}
            <View style={styles.from}>
            <View style={styles.login}>
            <Text style={{fontWeight: 'bold', fontSize: 30, color:'#38BA2F'}}>Login</Text>
            </View>
                <View style={styles.group}>
                <Icon name="email" style={styles.icon1} />
                    <TextInput placeholder="Email" style={styles.acc} onChangeText={(value) => setUsername(value)}></TextInput>
                    <Text style={{color: 'red'}}>{!checkUsername?'*Email wrong format':''}</Text>
                </View>

                <View style={styles.group}>
                <Icon name="lock" style={styles.icon2} />
                    <TextInput placeholder="Password" style={styles.acc} secureTextEntry={true} onChangeText={(value) => setPassword(value)}></TextInput>
                    <Text style={{color: 'red'}}>{errorPassword}</Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => onSubmit()}>
                    <Text style={{color:'white', fontWeight:'bold', fontSize: 20}}>Login</Text>
                </TouchableOpacity>
                {/* <MsgBox type ="MessageType">{message}</MsgBox> */}
                <TouchableOpacity onPress={onPress} style={styles.quet}>
                    <Text style={{fontWeight:'bold'}}>Don't have an account? Sign up</Text>
                </TouchableOpacity>
            </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}



//css
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 30,
        height: 100
    },
    title:{
        marginTop: 50,
        alignItems:'center'
    },
    login: {
        alignItems: 'center',
    },
    from:{
        marginTop:170,
        backgroundColor: '#F3F3F3',
        padding: 20,
        borderRadius: 20
    },
    group:{
        marginTop: 10
    },
    acc:{
        borderBottomWidth: 1,
        backgroundColor: 'white',
        borderColor: 'grey',
        borderRadius: 40,
        paddingLeft: 45
    },
    icon1:{
        fontSize: 30,
        color: 'grey',
        position: 'absolute',
        top: 10,
        zIndex: 1000,
        paddingLeft: 10
    },
    icon2:{
        fontSize: 30,
        color: 'grey',
        position: 'absolute',
        top: 10,
        zIndex: 1000,
        paddingLeft: 10
    },
    btn:{
        marginTop: 30,
        backgroundColor: '#38BA2F',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 30
    },
    quet:{
        alignItems: 'center',
        marginTop:15
    }
})
export default LoginScreen;