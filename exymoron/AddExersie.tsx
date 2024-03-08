import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity,Image } from 'react-native';
import { ImageBackground } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';



const AddExersie = () =>{
   const [photo, setPhoto] = useState(null); // State to hold the photo URI
   const [title, setTitle] = useState(''); // State to hold the title text
   const [description, setDescription] = useState(''); // State to hold the description text
   const [link, setLink] = useState(''); // State to hold the link
   
   const navigator = useNavigation();
   // Function to handle photo submission
   const handlePhotoSubmit = () => {

     // Logic to submit photo, title, description, and link
     console.log("Photo submitted:", photo);
     console.log("Title:", title);
     console.log("Description:", description);
     console.log("Link:", link);
     // Reset states after submission (optional)
     setPhoto(null);
     setTitle('');
     setDescription('');
     setLink('');
     navigator.navigate('Exersises')
   };
 
   // Function to handle picking a photo from the device
   const handlePickPhoto = () => {
     // Logic to pick a photo from the device
     // This can be implemented using a library like Expo ImagePicker
     // For simplicity, I'll just console.log a message
     console.log("Picking a photo...");
   };
 
   return (
     <View style={styles.container}>
       <Text style={styles.header}>New Exercise</Text>
       <View style={styles.contentContainer}>
         {photo ? (
           <Image source={{ uri: photo }} style={styles.photo} />
         ) : (
           <TouchableOpacity onPress={handlePickPhoto} style={styles.addPhotoButton}>
             <Text style={styles.addPhotoText}>Add Image +</Text>
           </TouchableOpacity>
         )}
         <TextInput
           placeholder="Title"
           value={title}
           onChangeText={text => setTitle(text)}
           style={styles.input}
         />
         <TextInput
           placeholder="Description"
           value={description}
           onChangeText={text => setDescription(text)}
           style={[styles.input, { height: 120 }]}
           multiline
         />
         <TextInput
           placeholder="Add Link"
           value={link}
           onChangeText={text => setLink(text)}
           style={styles.input}
         />
         <TouchableOpacity onPress={handlePhotoSubmit} style={[styles.submitButton, { backgroundColor: 'red' }]}>
           <Text style={[styles.buttonText, {textAlign: 'center'}]}>Done</Text>
         </TouchableOpacity>
       </View>
       <StatusBar style="auto" />
     </View>
   );
}


export default AddExersie;

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
   header: {
     fontSize: 24,
     fontWeight: 'bold',
     marginBottom: 20,
   },
   contentContainer: {
     alignItems: 'center',
     width: '100%',
   },
   photo: {
     width: 200,
     height: 200,
     marginBottom: 20,
   },
   addPhotoButton: {
     width: '80%',
     height: 200,
     justifyContent: 'center',
     alignItems: 'center',
     borderWidth: 1,
     borderColor: 'gray',
     borderRadius: 5,
     marginBottom: 20,
   },
   addPhotoText: {
     fontSize: 20,
   },
   input: {
     width: '80%',
     height: 40,
     borderColor: 'gray',
     borderWidth: 1,
     borderRadius: 5,
     marginBottom: 10,
     paddingHorizontal: 10,
   },
   submitButton: {
     width: '80%',
     height: 40,
     paddingVertical: 10,
     paddingHorizontal: 20,
     borderRadius: 5,
   },
   buttonText: {
     color: 'white',
     fontSize: 16,
     fontWeight: 'bold',
   },
 });