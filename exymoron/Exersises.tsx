import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity,Image, Platform } from 'react-native';
import { ImageBackground } from 'react-native';



const bodyParts = [
   { title: 'Arms'},
   { title: 'Back'},
   { title: 'Abs'},
   { title: 'Chest' },
   { title: 'Cardio' },
 ];
 
const Exersises = () =>{
   const navigator = useNavigation();
   const [cards, setCards] = useState(bodyParts); // Initial cards state with body parts
   const [showButton, setShowButton] = useState(true); // State to control the visibility of the "Add Card" button
 
   // Function to handle adding a new card
   const addCard = () => {
     const newCard = { title: 'New Body Part' };
     setCards([...cards, newCard]);
     setShowButton(false); // Hide the button after adding a new card
     
   };

   const goToScreen = (screenName: string) => {
    navigator.navigate(screenName);
  };
 
   return (
     <View style={styles.container}>
       <View style={styles.header}>
         <View style={styles.horizontalColorBar}></View>
         <Text style={styles.pageTitle}>Exercises</Text>
       </View>
       <View style={styles.cardContainer}>
        {cards.map((part, index) => (
          <View key={index} style={styles.card}>
            <TouchableOpacity onPress={() => goToScreen(part.title)}>
              {/* Render your card content (image, title, etc.) */}
              <Image source={part.image} style={styles.image} />
              <Text style={styles.title}>{part.title}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
       {showButton && (
         <TouchableOpacity onPress={addCard} style={styles.addButton}>
           <Text style={styles.buttonText}>+</Text>
         </TouchableOpacity>
       )}
     </View>
     )
}

export default Exersises;

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     padding: 10,
   },
   header: {
     flexDirection: 'row',
     alignItems: 'center',
     textAlign:"center",
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
     textAlign:'center',
     color: 'black', // Set your desired title color
     flex: 1, // Allow the title to take up remaining space
   },
   cardContainer: {
     flexDirection: 'row',
     flexWrap: 'wrap',
     justifyContent: 'center',
     alignItems: 'center',
   },
   card: {
     width: 150,
     height: 200,
     backgroundColor: '#f0f0f0',
     borderRadius: 10,
     margin: 10,
     alignItems: 'center',
     justifyContent: 'center',
   },
   image: {
     width: 120,
     height: 120,
     borderRadius: 60,
     marginBottom: 10,
   },
   title: {
     width: 150,
     height: 40,
     fontSize: 16,
     color: 'white',
     fontWeight: 'bold',
     backgroundColor: 'red',
     textAlign: 'center',
     borderBottomLeftRadius: 10,
     borderBottomRightRadius: 10,
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