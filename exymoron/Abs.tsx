import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';

// Import custom icons or images
import homeIcon from './assets/home_icon.png';
import logoutIcon from './assets/logoutIcon.png';
import plusIcon from './assets/plusIcon.png';

const Abs: React.FC = () => {
  // Sample data for exercises
  const initialExercises = [
    { id: '1', name: 'Crunches', image: require('./images/bicep_curls.jpg'), details: ['Lie flat on your back with your knees bent and feet flat on the floor.', 'Place your hands behind your head or across your chest.', 'Engage your core and lift your head, shoulders, and upper back off the floor.', 'Pause at the top of the movement, then lower back down with control.', 'Repeat for the desired number of repetitions.'], },
    { id: '2', name: 'Planks', image: require('./images/bicep_curls.jpg'), details: ['Start in a push-up position with your hands directly under your shoulders.', 'Lower yourself onto your forearms, keeping your body in a straight line from head to heels.', 'Engage your core and hold this position, keeping your back flat and avoiding sagging or arching.', 'Hold for the desired duration.', 'Repeat for multiple sets.'], },
    { id: '3', name: 'Leg Raises', image: require('./images/bicep_curls.jpg'), details: ['Lie flat on your back with your legs straight.', 'Keep your hands under your glutes or by your sides for support.', 'Engage your core and lift your legs until they are perpendicular to the floor.', 'Lower your legs back down slowly, avoiding arching your back.', 'Repeat for the desired number of repetitions.'], },
    // Add more exercises as needed
  ];

  const [exercises, setExercises] = useState(initialExercises);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseDetails, setExerciseDetails] = useState('');

  const addExercise = () => {
    if (exerciseName.trim() !== '' && exerciseDetails.trim() !== '') {
      const newExercise = {
        id: (exercises.length + 1).toString(),
        name: exerciseName,
        image: require('./images/bicep_curls.jpg'), // Replace with actual default image
        details: exerciseDetails.split('\n'),
      };
      setExercises([...exercises, newExercise]);
      setModalVisible(false);
      setExerciseName('');
      setExerciseDetails('');
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity activeOpacity={0.8} style={styles.exerciseItem} onPress={() => setSelectedExercise(item)}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.exerciseImage} resizeMode="cover" />
      </View>
      <Text style={styles.exerciseName}>{item.name}</Text>
      {selectedExercise?.id === item.id && (
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>How to Do:</Text>
          {item.details.map((step, index) => (
            <Text key={index} style={styles.stepText}>{`${index + 1}. ${step}`}</Text>
          ))}
        </View>
      )}
      <TouchableOpacity style={styles.detailsButton} onPress={() => setSelectedExercise(item)}>
        <Text style={styles.detailsButtonText}>Details</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const logout = () => {
    // Perform logout logic here (e.g., clear session, navigate to login screen, etc.)
    // For demonstration purposes, I'll just log a message
    console.log('User logged out');
  };

  return (
    <View style={styles.container}>
      <View style={styles.redBackground} />
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.homeButton} onPress={() => console.log('Navigate to Home')}>
          <Image source={homeIcon} style={styles.buttonIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.plusButton} onPress={() => setModalVisible(true)}>
          <Image source={plusIcon} style={styles.buttonIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Image source={logoutIcon} style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>Add Exercise</Text>
            <TextInput
              style={styles.input}
              placeholder="Exercise Name"
              value={exerciseName}
              onChangeText={(text) => setExerciseName(text)}
            />
            <TextInput
              style={[styles.input, { height: 100 }]}
              placeholder="Exercise Details"
              multiline
              value={exerciseDetails}
              onChangeText={(text) => setExerciseDetails(text)}
            />
            <TouchableOpacity style={styles.addButton} onPress={addExercise}>
              <Text style={styles.addButtonText}> + </Text>
            </TouchableOpacity>
            <View style={styles.buttonGroup}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  redBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
  },
  flatListContainer: {
    flexGrow: 1,
    paddingVertical: 10,
  },
  exerciseItem: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  imageContainer: {
    height: 200,
    overflow: 'hidden',
  },
  exerciseImage: {
    width: '100%',
    height: '100%',
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
  detailsContainer: {
    padding: 10,
    backgroundColor: '#ffffff',
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stepText: {
    fontSize: 14,
    marginBottom: 5,
  },
  detailsButton: {
    backgroundColor: '#ff0000',
    paddingVertical: 8,
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  detailsButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    width: '45%',
    height: 50,
    borderRadius: 5,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  homeButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    width: 30,
    height: 30,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Abs;
