import React, {useEffect, useState} from "react";
import { Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import axios from "axios";
const RegisterScreen = (props: any)=> {
    const [isCheck, setIsCheck] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [checkUsername, setCheckUsername] = useState(true);
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [confirmpass, setConfirmPass] = useState('');
    const [otp, setOtp] = useState('');
    const [data, setData] = useState('');

    const formData = {
        firstname: firstName,
        lastname: lastName,
        username: username,
        password: password,
        confirmpass: confirmpass,
        otp: otp,
    }

    //call API refisterUserWithOtp
    const registerUserWithOtp = async (formData : any) => {
        try {
            await axios.post('http://192.168.134.1:5000/api/auth/register', formData).then((response)=> {
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
        }
    };

    //call API sendOtpByEmail
    const sendOtpByEmail = async (username: any) => {
        try {
            await axios.post('http://192.168.134.1:5000/api/auth/send-otp', {username}).then((response)=> {
                console.log(response.data); // Log the response from the server

            })
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
        
        if (formData.firstname === ''){
            setFirstName('*Firstname wrong format.');
        } else{
            setFirstName('')
        }

        if (formData.lastname === ''){
            setLastName('*Firstname wrong format.');
        } else{
            setLastName('')
        }

        if (formData.confirmpass === ''){
            setConfirmPass('*The password field is require.');
        } else{
            setConfirmPass('')
        }

        if (formData.password === ''){
            setErrorPassword('*The password field is require.');
        } else{
            setErrorPassword('')
        }
        registerUserWithOtp(formData)
    }
    
    //navigation
    const onPress = () => {
        props.navigation.navigate('DangnhapScreen');
        // sendOtpByEmail(username)
        // registerUserWithOtp(formData)  
      };  
    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'#FFFFFF'} barStyle={"dark-content"}></StatusBar>
            <View style={styles.title}>
                    <Text style={{fontWeight: 'bold', fontSize: 100, color:'#38BA2F'}}>Zolo</Text>
                </View>
                {/* <View style={styles.title}>
                    <Text style={{fontWeight: 'bold', fontSize: 30, color:'black'}}>Đăng ký</Text>
                </View> */}

            <View style={styles.from}>
            <View style={styles.register}>
            <Text style={{fontWeight: 'bold', fontSize: 25, color:'#38BA2F'}}>Sign up</Text>
            </View>
                <View style={styles.group}>
                    <TextInput placeholder="First name" style={styles.name} onChangeText={(value) => setFirstName(value)}></TextInput>
                </View>
                <View style={styles.group}>
                    <TextInput placeholder="Last name" style={styles.name} onChangeText={(value) => setLastName(value)}></TextInput>
                </View>
                <View style={styles.group}>
                {/* <Icon name="account-circle" style={styles.icon1} /> */}
                    <TextInput placeholder="Email" style={styles.acc} onChangeText={(value) => setUsername(value)}></TextInput>
                    <Text style={{color: 'red'}}>{!checkUsername?'*Email wrong format':''}</Text>
                </View>

                <View style={styles.group}>
                {/* <Icon name="lock" style={styles.icon2} /> */}
                    <TextInput placeholder="Password" style={styles.acc} secureTextEntry={true} onChangeText={(value) => setPassword(value)}></TextInput>
                    <Text style={{color: 'red'}}>{errorPassword}</Text>
                </View>
                <View style={styles.group}>
                    <TextInput placeholder="Confirm password" style={styles.acc} secureTextEntry={true} onChangeText={(value) => setConfirmPass(value)}></TextInput>
                </View>
                <View style={styles.group}>
                    <TextInput placeholder="OTP" style={styles.acc} onChangeText={(value) => setOtp(value)}></TextInput>
                    <TouchableOpacity style={styles.btnOtp} onPress={() => sendOtpByEmail(username)}>
                        <Text style={{color:'white', fontWeight:'bold'}} >Send OTP</Text>
                    </TouchableOpacity>             
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => onSubmit()}>
                    <Text style={{color:'white', fontWeight:'bold', fontSize: 20}}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress} style={styles.quet}>
                    <Text style={{fontWeight:'bold'}}>Already have an account? Login</Text>
                </TouchableOpacity>
            </View>       
        </SafeAreaView>
        </ScrollView>
    )
}


//css
const styles = StyleSheet.create({
    container:{
        marginTop: 1,
        flex:1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 30
    },
    title:{
        marginTop: 60,
        alignItems:'center'
    },
    from:{
        marginTop:10,
        backgroundColor: '#F3F3F3',
        padding: 20,
        borderRadius: 20
    },
    group:{
        marginTop: 5
    },
    acc:{
        borderBottomWidth: 1,
        backgroundColor: 'white',
        borderColor: 'grey',
        borderRadius: 40,
        paddingLeft: 30
    },
    name:{
        borderBottomWidth: 1,
        backgroundColor: 'white',
        borderColor: 'grey',
        borderRadius: 40,
        paddingLeft: 30
    },
    // icon1:{
    //     fontSize: 30,
    //     color: 'grey',
    //     position: 'absolute',
    //     top: 10,
    //     zIndex: 1000,
    //     paddingLeft: 10
    // },
    // icon2:{
    //     fontSize: 30,
    //     color: 'grey',
    //     position: 'absolute',
    //     top: 10,
    //     zIndex: 1000,
    //     paddingLeft: 10
    // },
    btn:{
        marginTop: 20,
        backgroundColor: '#38BA2F',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 30
    },
    btnOtp:{
        marginTop: 25,
        backgroundColor: '#38BA2F',
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderRadius: 30
    },
    register:{
        marginTop: 1,
        alignItems: 'center'
    },
    quet:{
        alignItems: 'center',
        marginTop:10
    }
})
export default RegisterScreen;