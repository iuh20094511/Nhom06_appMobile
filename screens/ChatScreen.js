import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, TouchableOpacity, Image, Modal } from 'react-native';
import ModalProfile from './ModalProfile';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isProfileVisible, setProfileVisible] = useState(false);

  const user = {
    name: 'Huu Nha',
    info: 'User Info',
    avatar: require('./image/avatar.jpg'),
  };

  useEffect(() => {
    // Giả lập việc nhận tin nhắn từ người khác
    const fakeReceivedMessage = "Đây là tin nhắn giả!";
    handleReceiveMessage(fakeReceivedMessage);
  }, []); 

  const handleMessageSend = () => {
    if (inputText.trim() !== '') {
      const newMessage = { text: inputText, isUser: true }; // Tin nhắn mới từ người dùng
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  const handleMenuPress = () => {
    setProfileVisible(true);
  };

  const handleCloseProfileModal = () => {
    setProfileVisible(false);
  };

  const handleReceiveMessage = (receivedMessage) => {
    const newMessage = { text: receivedMessage, isUser: false }; // Tin nhắn từ người khác
    setMessages([...messages, newMessage]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          {/* <TouchableOpacity onPress={() => {}}>
            <Image source={require('./image/back_icon.png')} style={[styles.icon, styles.backIcon]} />
          </TouchableOpacity> */}
          <Text style={styles.headerTitle}>Huu Nha</Text>
        </View>
        <TouchableOpacity onPress={handleMenuPress}>
          <Image source={require('./image/menu_icon.png')} style={[styles.icon, styles.menuIcon]} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.messagesContainer} contentContainerStyle={styles.messagesContentContainer}>
        {messages.map((message, index) => (
          <View key={index} style={[styles.messageContainer, message.isUser ? styles.userMessageContainer : styles.partnerMessageContainer]}>
            <Text style={[styles.messageText, message.isUser ? styles.userMessageText : styles.partnerMessageText]}>
              {message.text}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.cameraButton} onPress={() => {}}>
          <Image source={require('./image/camera_icon.png')} style={styles.cameraIcon} />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          onChangeText={setInputText}
          value={inputText}
          placeholder="Type your message..."
        />
        <TouchableOpacity onPress={handleMessageSend}>
          <Image source={require('./image/send_icon.png')} style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
      <ModalProfile isVisible={isProfileVisible} user={user} onClose={handleCloseProfileModal} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#38ba2f',
    paddingVertical: 32, // Kéo rộng phần header xuống 1 tí
    paddingHorizontal: 20,
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  icon: {
    tintColor: '#fff',
  },
  backIcon: {
    width: 30, // Tăng kích thước của back icon
    height: 30, // Tăng kích thước của back icon
  },
  menuIcon: {
    width: 30, // Tăng kích thước của menu icon
    height: 30, // Tăng kích thước của menu icon
  },
  messagesContainer: {
    flex: 1,
    marginBottom: 10,
  },
  messagesContentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  messageContainer: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 5,
    borderRadius: 5,
    alignSelf: 'flex-start', 
    maxWidth: '90%',
  },
  userMessageContainer: {
    alignSelf: 'flex-end', 
    backgroundColor: '#007bff',
  },
  partnerMessageContainer: {
    alignSelf: 'flex-start', 
    backgroundColor: '#C0C0C0',
  },
  messageText: {
    fontSize: 16,
  },
  userMessageText: {
    color: '#fff',
  },
  partnerMessageText: {
    color: '#000', 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#38ba2f',
  },
  textInput: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
  },
  sendIcon: {
    width: 24,
    height: 24,
    tintColor: '#38ba2f',
  },
  cameraButton: {
    padding: 10,
  },
  cameraIcon: {
    width: 24,
    height: 24,
    tintColor: '#38ba2f',
  },
});
