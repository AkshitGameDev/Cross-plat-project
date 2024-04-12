import React from 'react';
import ExersiseStack from './ExersiseStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity,Image } from 'react-native';
import { ImageBackground } from 'react-native';
import Profile from './profile';


const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return(
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName;
      
              if (route.name === 'ExersiseScreen') {
                iconName = require('./assets/Asset 15.png');
              } else {
                iconName = require('./assets/Asset 18.png');
              }
      
              return <Image source={iconName} style={{ width: 24, height: 24 }} />;
            },
          })}>
        <Tab.Screen  name="ExersiseScreen" component={ExersiseStack} />
        <Tab.Screen  name="Profile" component={Profile} />

        </Tab.Navigator>
    );
};

export default MainTabNavigator;