import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import Login from './Login';
import SignIn from './SignIn';
import MainTabNavigator from './MainTabNavigator';
import { SignInMethod } from 'firebase/auth';
import ForgtPassword from './ForgtPassword';
import Arms from './Arms';
import Back from './Back';
import Abs from './Abs';
import Chest from './Chest';
import Cardio from './Cardio';

export default function App() {


  const Stack = createNativeStackNavigator();
  
    return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
        <Stack.Screen name='SignIn' component={SignIn} options={{headerShown:false}} />
        <Stack.Screen name='ForgtPassword' component={ForgtPassword} options={{headerShown:false}} />
        <Stack.Screen name="MainApp" component={MainTabNavigator} options={{headerShown:false}} />
        <Stack.Screen name="Arms" component={Arms} />
        <Stack.Screen name="Back" component={Back} />
        <Stack.Screen name="Abs" component={Abs} />
        <Stack.Screen name="Chest"  component={Chest} />
        <Stack.Screen name="Cardio"  component={Cardio} />
        
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
