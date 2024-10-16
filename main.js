import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import SetNewPasswordScreen from './SetNewPasswordScreen'; // Assuming you have this screen
import HomeScreen from './HomeScreen'; // A placeholder for the main screen after login

const Stack = createStackNavigator();

const Main = () => {
  const [isAdmin, setIsAdmin] = useState(false); // State to track if user is admin

  const handleLogin = (userId, password) => {
    if (userId === 'admin' && password === 'pass@123') {
      setIsAdmin(true); // Set admin status
    } else {
      alert('Invalid User ID or Password');
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login">
          {({ navigation }) => (
            <LoginScreen 
              navigation={navigation} 
              handleLogin={handleLogin} // Pass handleLogin as a prop
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="SetNewPassword" component={SetNewPasswordScreen} />
        <Stack.Screen name="Home">
          {() => (
            <HomeScreen isAdmin={isAdmin} /> // Pass isAdmin to HomeScreen
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
