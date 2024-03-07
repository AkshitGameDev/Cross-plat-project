import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import Login from './Login';
import SignIn from './SignIn';
import { SignInMethod } from 'firebase/auth';
import ForgtPassword from './ForgtPassword';

export default function App() {


  const Stack = createNativeStackNavigator();
  
    return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
        <Stack.Screen name='SignIn' component={SignIn} options={{headerShown:false}} />
        <Stack.Screen name='ForgtPassword' component={ForgtPassword} options={{headerShown:false}} />
        
      </Stack.Navigator>
    </NavigationContainer>
    );
  
    
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
