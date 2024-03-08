import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity,Image, TextInput, Platform } from 'react-native';
import { ImageBackground } from 'react-native';

const bodyParts = [
   { title: 'Arms'},
   { title: 'Back'},
   { title: 'Abs'},
   { title: 'Chest' },
   { title: 'Cardio' },
 ];

const ListOfMuscle = () =>{
   
  const [cards, setCards] = useState(legExercises); // Initial cards state with leg exercises
  const [showButton, setShowButton] = useState(true); // State to control the visibility of the "Add Card" button
  const navigator = useNavigation();
  // Function to handle adding a new card
  const addCard = () => {
    const newCard = { title: 'New Exercise' };
    setCards([...cards, newCard]);
    setShowButton(false); // Hide the button after adding a new card
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.horizontalColorBar}></View>
        <Text style={styles.pageTitle}>Legs</Text>
      </View>
      <View style={styles.cardContainer}>
        {cards.map((exercise, index) => (
         <TouchableOpacity style={styles.tc} onPress={navigator.navigate('Exersises')}>
          <View key={index} style={styles.card}>
            <Text style={styles.title}>{exercise.title}</Text>
            <Image source={exercise.image} style={styles.image} />
          </View>
          </TouchableOpacity>
        ))}
      </View>
      {showButton && (
        <TouchableOpacity onPress={addCard} style={styles.addButton}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default ListOfMuscle;

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     padding: 10,
   },
   tc: {
      width:'100%',
      alignSelf:'center'
    },
   header: {
     flexDirection: 'row',
     alignItems: 'center',
     marginBottom: 10,
     backgroundColor: '#fec4a7', // Set your desired color
     paddingHorizontal: 10,
     paddingVertical: 5,
     ...Platform.select({
       ios: {
         shadowColor: '#000',
         shadowOffset: { width: 0, height: 2 },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
       },
       android: {
         elevation: 5,
       },
     }),
   },
   horizontalColorBar: {
     backgroundColor: '#fec4a7', // Set your desired color
     width: 5,
     height: 20,
     marginRight: 10,
   },
   pageTitle: {
     fontSize: 24,
     fontWeight: 'bold',
     textAlign: 'center',
     color: 'black', // Set your desired title color
     flex: 1, // Allow the title to take up remaining space
   },
   cardContainer: {
     flexDirection: 'column',
     justifyContent: 'flex-start',
     alignItems: 'center',
   },
   card: {
     width: '90%', // Adjust as needed
     height: 200,
     backgroundColor: '#f0f0f0',
     borderRadius: 10,
     marginVertical: 10,
     alignItems: 'center',
     justifyContent: 'center',
   },
   title: {
     width: '100%',
     height: 60,
     color: 'white',
     fontWeight: 'bold',
     backgroundColor: 'red',
     fontSize: 25,
     textAlign: 'center',
     borderTopLeftRadius: 10,
     borderTopRightRadius: 10,
     marginBottom: 10,
   },
   image: {
     width: 120,
     height: 120,
     borderRadius: 60,
     marginBottom: 10,
   },
   addButton: {
     position: 'absolute',
     bottom: 20,
     width: 60,
     height: 60,
     backgroundColor: '#fec4a7',
     borderRadius: 30,
     alignItems: 'center',
     justifyContent: 'center',
     alignSelf: 'center',
   },
   buttonText: {
     fontSize: 40,
     fontWeight: 'bold',
     color: 'red',
   },
 });
 