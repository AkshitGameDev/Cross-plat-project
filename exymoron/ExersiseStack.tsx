import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity,Image } from 'react-native';
import { ImageBackground } from 'react-native';
import ListOfMuscle from './ListOfMuscle';
import Exersises from './Exersises';
import AddExersie from './AddExersie';

const ExersiseSt = createStackNavigator();

function ExersiseStack () {
   return (
    <ExersiseSt.Navigator>
        <ExersiseSt.Screen name = "ListOfMuscle" options={{
    headerShown:false,
    }}  component={ListOfMuscle}/>
    <ExersiseSt.Screen name = "Exersises" options={{
    headerShown:false,
    }}  component={Exersises}/>
    <ExersiseSt.Screen name = "AddExersie" options={{
    headerShown:false,
    }}  component={AddExersie}/>
    </ExersiseSt.Navigator>
   )
}


export default ExersiseStack;