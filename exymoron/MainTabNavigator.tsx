import React from 'react';
import ExersiseStack from './ExersiseStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity,Image } from 'react-native';
import { ImageBackground } from 'react-native';


const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return(
        <Tab.Navigator screenOptions={{
            headerShown:false,
        }}>
        <Tab.Screen name="ExersiseScreen" component={ExersiseStack} />
        </Tab.Navigator>
    );
};

export default MainTabNavigator;