import React from 'react';
import { Modal, View, Text, Image, StyleSheet } from 'react-native';

const ModalProfile = ({ isVisible, user, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image source={user.avatar} style={styles.avatar} />
          <Text style={styles.username}>{user.name}</Text>
          <Text style={styles.userInfo}>{user.info}</Text>
          <Text style={styles.closeButton} onPress={onClose}>Close</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userInfo: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default ModalProfile;
