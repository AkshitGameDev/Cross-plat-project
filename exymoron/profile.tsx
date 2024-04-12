import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity,Image } from 'react-native';
import { ImageBackground } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler'; 

const Profile   = () => {

    
const navigation = useNavigation();


    const signout = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={signout} style={[styles.submitButton, { backgroundColor: 'red' }]}>
           <Text style={[styles.styleText, {textAlign: 'center'}]}>signout</Text>
         </TouchableOpacity>
         </View>
    );

}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        backgroundColor:'#f2f2f2'
    },
    submitButton:{
        backgroundColor: '#fec4a7',
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
        width: '80%',
        alignItems:'center',
        alignSelf: 'center',
    }, styleText:{
        color: '#000000',
        fontSize: 24,
        textAlign:'center',
    }

});