import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity, Modal, Button } from 'react-native';
import axios from 'axios';

// const messages = [
//   { id: 1, sender: 'Alice', text: 'Đã theo dõi', image: 'https://media.istockphoto.com/id/1387406044/vi/anh/c%C3%B4-h%E1%BA%A7u-b%C3%A0n-tr%E1%BA%BB-ch%C3%A2u-%C3%A1-%C4%91%E1%BB%A9ng-tr%C3%AAn-n%E1%BB%81n-m%C3%A0u-h%E1%BB%93ng.jpg?s=1024x1024&w=is&k=20&c=ALS2mnV2tSt7mLHe6mynjtKrlgxWH8Mx6XvQdqt_9jo= ', isFollowing: true },
//   // Danh sách tin nhắn khác
// ];



const FollowScreen = ({route, user, handleUser, navigation}) => {
  
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [followingStatus, setFollowingStatus] = useState();
  const [persons, setPersons] = useState([]);
  const fetchPersons = async () => {
    const dataa = await getLmao();
    setPersons(dataa.data);
    console.log(persons);
    };
    
  
  const getUser = async (req, res) => {
    const id = req.params.id;
    try {
        await axios.get('http://192.168.134.1:5000/api/user/:id', id).then((response)=> {
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




  const getLmao = async (req, res) => {
    try {
        // await axios.get('http://192.168.134.1:5000/user/').then((response)=> {
        //     console.log(response.data);
        //     console.log("----------------axios------------------");
        //     return response.data; // Log the response from the server
        // })
        return axios.get('http://192.168.134.1:5000/api/user/');
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
fetchPersons();


const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
      await axios.post('http://192.168.134.1:5000/api/user/:id', id).then((response)=> {
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
  
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
      await axios.post('http://192.168.134.1:5000/api/user/:id', id).then((response)=> {
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
  
const followUser = async (req, res) => {
  const id = req.params.id;
  try {
      await axios.post('http://192.168.134.1:5000/api/user/:id/follow', id).then((response)=> {
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

const unfollowUser = async (req, res) => {
  const id = req.params.id;
  try {
      await axios.post('http://192.168.134.1:5000/api/user/:id/unfollow', id).then((response)=> {
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

const getListFriends = async (req, res) => {
  const userId = req.params.user._id;
  try {
      await axios.post('http://192.168.134.1:5000/api/user/:id', userId).then((response)=> {
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


const renderAvatar = (imageUri) => {
  if (!imageUri) {
    return null;
  }
  console.log(imageUri);
  return <Image source={{ uri: imageUri }} style={styles.avatar} />;
};

const toggleFollow = (index) => {
  const updatedStatus = [...followingStatus];
  updatedStatus[index] = !updatedStatus[index];
  setFollowingStatus(updatedStatus);
  // Đoạn này bạn có thể thực hiện logic lưu trạng thái theo dõi vào cơ sở dữ liệu hoặc backend
};  

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <TextInput style={styles.searchInput} placeholder="Tìm kiếm..." />
          <TouchableOpacity onPress={() => {}}>
            <Image source={require('./image/search_icon.png')} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => setIsMenuVisible(true)}>
          <Image source={require('./image/menu_icon.png')} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
      <Modal
        visible={isMenuVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsMenuVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.menu}>
            <Button title="Thêm bạn" onPress={() => {}} />
            <Button title="Tạo nhóm" onPress={() => {}} />
            <Button title="Cài đặt" onPress={() => {}} />
            <Button title="Đóng" onPress={() => setIsMenuVisible(false)} />
          </View>
        </View>
      </Modal>
      <ScrollView>
        {persons.map((item, id) => (
          item._id!= user._id ? (
            <View key= {id}>
              <View style={styles.messageContainer}>
                <View style={styles.senderInfo}>
                  {renderAvatar(item.profilePicture)}
                  <Text style={styles.sender}>{item.sender}</Text>
                </View>
                <Text>{item.firstname} {item.lastname}</Text>
                <TouchableOpacity onPress={() => toggleFollow(item._id)}>
                  <Image source={item.isFollowing ? require('./image/follow_icon.png') : require('./image/unfollow_icon.png')} style={styles.followIcon} />
                </TouchableOpacity>
            </View>
          </View>
          ) : (<></>)
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  messageContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row', // Để có thể sắp xếp theo hàng ngang
    alignItems: 'center', // Để chắc chắn rằng các phần tử cùng hàng ngang với nhau
    justifyContent: 'space-between', // Để nút follow được căn phải
  },
  senderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 15,
    marginRight: 15,
  },
  sender: {
    fontWeight: 'bold',
  },
  followIcon: {
    width: 24,
    height: 24,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menu: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
});

// export default FollowScreen;

// import React, { useState } from 'react';
// import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity, Modal, Button } from 'react-native';

// const messages = [
//   { id: 1, sender: 'Alice', text: 'Đã theo dõi', image: 'https://media.istockphoto.com/id/1387406044/vi/anh/c%C3%B4-h%E1%BA%A7u-b%C3%A0n-tr%E1%BA%BB-ch%C3%A2u-%C3%A1-%C4%91%E1%BB%A9ng-tr%C3%AAn-n%E1%BB%81n-m%C3%A0u-h%E1%BB%93ng.jpg?s=1024x1024&w=is&k=20&c=ALS2mnV2tSt7mLHe6mynjtKrlgxWH8Mx6XvQdqt_9jo= ', isFollowing: true },
//    { id: 12, sender: 'Alice', text: 'Đã theo dõi', image: 'https://media.istockphoto.com/id/1387406044/vi/anh/c%C3%B4-h%E1%BA%A7u-b%C3%A0n-tr%E1%BA%BB-ch%C3%A2u-%C3%A1-%C4%91%E1%BB%A9ng-tr%C3%AAn-n%E1%BB%81n-m%C3%A0u-h%E1%BB%93ng.jpg?s=1024x1024&w=is&k=20&c=ALS2mnV2tSt7mLHe6mynjtKrlgxWH8Mx6XvQdqt_9jo= ', isFollowing: true },
//     { id: 3, sender: 'Alice', text: 'Đã theo dõi', image: 'https://media.istockphoto.com/id/1387406044/vi/anh/c%C3%B4-h%E1%BA%A7u-b%C3%A0n-tr%E1%BA%BB-ch%C3%A2u-%C3%A1-%C4%91%E1%BB%A9ng-tr%C3%AAn-n%E1%BB%81n-m%C3%A0u-h%E1%BB%93ng.jpg?s=1024x1024&w=is&k=20&c=ALS2mnV2tSt7mLHe6mynjtKrlgxWH8Mx6XvQdqt_9jo= ', isFollowing: true },
//      { id: 4, sender: 'Alice', text: 'Đã theo dõi', image: 'https://media.istockphoto.com/id/1387406044/vi/anh/c%C3%B4-h%E1%BA%A7u-b%C3%A0n-tr%E1%BA%BB-ch%C3%A2u-%C3%A1-%C4%91%E1%BB%A9ng-tr%C3%AAn-n%E1%BB%81n-m%C3%A0u-h%E1%BB%93ng.jpg?s=1024x1024&w=is&k=20&c=ALS2mnV2tSt7mLHe6mynjtKrlgxWH8Mx6XvQdqt_9jo= ', isFollowing: true },
//       { id: 5, sender: 'Alice', text: 'Đã theo dõi', image: 'https://media.istockphoto.com/id/1387406044/vi/anh/c%C3%B4-h%E1%BA%A7u-b%C3%A0n-tr%E1%BA%BB-ch%C3%A2u-%C3%A1-%C4%91%E1%BB%A9ng-tr%C3%AAn-n%E1%BB%81n-m%C3%A0u-h%E1%BB%93ng.jpg?s=1024x1024&w=is&k=20&c=ALS2mnV2tSt7mLHe6mynjtKrlgxWH8Mx6XvQdqt_9jo= ', isFollowing: true },
//        { id: 6, sender: 'Alice', text: 'Đã theo dõi', image: 'https://media.istockphoto.com/id/1387406044/vi/anh/c%C3%B4-h%E1%BA%A7u-b%C3%A0n-tr%E1%BA%BB-ch%C3%A2u-%C3%A1-%C4%91%E1%BB%A9ng-tr%C3%AAn-n%E1%BB%81n-m%C3%A0u-h%E1%BB%93ng.jpg?s=1024x1024&w=is&k=20&c=ALS2mnV2tSt7mLHe6mynjtKrlgxWH8Mx6XvQdqt_9jo= ', isFollowing: true },
//         { id: 77, sender: 'Alice', text: 'Đã theo dõi', image: 'https://media.istockphoto.com/id/1387406044/vi/anh/c%C3%B4-h%E1%BA%A7u-b%C3%A0n-tr%E1%BA%BB-ch%C3%A2u-%C3%A1-%C4%91%E1%BB%A9ng-tr%C3%AAn-n%E1%BB%81n-m%C3%A0u-h%E1%BB%93ng.jpg?s=1024x1024&w=is&k=20&c=ALS2mnV2tSt7mLHe6mynjtKrlgxWH8Mx6XvQdqt_9jo= ', isFollowing: true },

//   // Danh sách tin nhắn khác
// ];

// const FollowScreen = () => {
//   const [isMenuVisible, setIsMenuVisible] = useState(false);
//   const [followingStatus, setFollowingStatus] = useState(messages.map(item => item.isFollowing));

//   const renderAvatar = (imageUri) => {
//     if (!imageUri) {
//       return null;
//     }
//     return <Image source={{ uri: imageUri }} style={styles.avatar} />;
//   };

//   const toggleFollow = (index) => {
//     const updatedStatus = [...followingStatus];
//     updatedStatus[index] = !updatedStatus[index];
//     setFollowingStatus(updatedStatus);
//     // Thực hiện logic lưu trạng thái theo dõi vào cơ sở dữ liệu hoặc backend
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <View style={styles.header}>
//         <View style={styles.searchBar}>
//           <TextInput style={styles.searchInput} placeholder="Tìm kiếm..." />
//           <TouchableOpacity onPress={() => {}}>
//             <Image source={require('./image/search_icon.png')} style={styles.searchIcon} />
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity onPress={() => setIsMenuVisible(true)}>
//           <Image source={require('./image/menu_icon.png')} style={styles.menuIcon} />
//         </TouchableOpacity>
//       </View>
//       <Modal
//         visible={isMenuVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => setIsMenuVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.menu}>
//             <Button title="Thêm bạn" onPress={() => {}} />
//             <Button title="Tạo nhóm" onPress={() => {}} />
//             <Button title="Cài đặt" onPress={() => {}} />
//             <Button title="Đóng" onPress={() => setIsMenuVisible(false)} />
//           </View>
//         </View>
//       </Modal>
//       <ScrollView>
//         {messages.map((item, index) => (
//           <View key={item.id} style={styles.messageContainer}>
//             <View style={styles.senderInfo}>
//               {renderAvatar(item.image)}
//               <Text style={styles.sender}>{item.sender}</Text>
//             </View>
//             <Text>{item.text}</Text>
//             <TouchableOpacity onPress={() => toggleFollow(index)}>
//               <Image source={item.isFollowing ? require('./image/follow_icon.png') : require('./image/unfollow_icon.png')} style={styles.followIcon} />
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     marginBottom: 10,
//   },
//   searchBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '80%',
//   },
//   searchInput: {
//     flex: 1,
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginRight: 10,
//   },
//   searchIcon: {
//     width: 24,
//     height: 24,
//   },
//   menuIcon: {
//     width: 24,
//     height: 24,
//   },
//   messageContainer: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     flexDirection: 'row', // Để có thể sắp xếp theo hàng ngang
//     alignItems: 'center', // Để chắc chắn rằng các phần tử cùng hàng ngang với nhau
//     justifyContent: 'space-between', // Để nút follow được căn phải
//   },
//   senderInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 15,
//     marginRight: 15,
//   },
//   sender: {
//     fontWeight: 'bold',
//   },
//   followIcon: {
//     width: 24,
//     height: 24,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   menu: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     elevation: 5,
//   },
// });

export default FollowScreen;

