import {  View, Text,StyleSheet, Image, TextInput, Button, FlatList, Touchable, TouchableOpacity} from "react-native";
import React, { useState, useEffect} from "react";
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from "./FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');
    const auth = FIREBASE_AUTH;
    const navigation = useNavigation();
        
        const signUp = async ()=>{
            setLoading(true);
            try{
               const response =await createUserWithEmailAndPassword(auth,email,password);
               navigation.navigate('MainApp');
               console.log(response);
            } catch(error:any){
                console.log(error)
                alert('regestration failed: ' + error)
            }finally{
                setLoading(false);
            }
        }
    
        return(
            <View style={styles.container}>
                <Image style={styles.logo}  source={require('./assets/LOGO.png')}/>
                <Text style={styles.Heading}>Welcome,</Text>
    
                <TextInput style={styles.TextField}
                value={email}
                placeholder="EMAIL"
                autoCapitalize="none"
                onChangeText={(text) =>{setEmail(text)}} >
                    </TextInput>
    
                <TextInput style={styles.TextField}
                value={password}
                placeholder="PASSWORD"
                autoCapitalize="none"
                onChangeText={(password) =>{ setPassword(password)} } 
                ></TextInput>
    
                <TouchableOpacity style={styles.Button} onPress={() => signUp()}>
                    <Text style={styles.styleText}>SING-UP</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.styleInfoText}>alredy have an account?</Text>
                </TouchableOpacity>
            </View>
        )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        backgroundColor:'#f2f2f2'
    },
    logo:{
        width: 75, 
        height: 75, 
        marginBottom: 25, 
        alignSelf:'center',
    },
    Heading:{
        fontSize: 40,
        marginLeft: 25,
        marginBottom: 10
    },
    Button:{
        backgroundColor: '#fd2401',
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
        width: '80%',
        alignItems:'center',
        alignSelf: 'center',
    },
    Button2:{
        backgroundColor: '#fec4a7',
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
        width: '80%',
        alignItems:'center',
        alignSelf: 'center',
    },
    TextField:{
        width: '80%',
        height: 50,
        alignSelf:'center',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 25,
        borderRadius: 20,
    },
    styleText:{
        color: '#000000',
        fontSize: 24,
        textAlign:'center',
    },
    styleInfoText:{
        top:10,
        color: '#a6a5a8',
        fontSize: 13,
        textAlign:'center',
    },
    OR:{
    width: 220, 
    alignSelf:'center',
    height: 15, 
    marginTop: 10,
    marginBottom: 10, 
    }
})

export default SignIn;


