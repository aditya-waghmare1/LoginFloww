import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Manage password visibility

  const onLoginPress = () => {
    // Check for credentials and navigate to Home screen if valid
    if (userId === 'admin' && password === 'pass@123') {
      navigation.navigate('Home'); // Navigate to Home screen
    } else {
      alert('Invalid User ID or Password'); // Alert for invalid credentials
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top image section */}
      <View style={styles.topSection}>
        <Image
          source={require('./assets/login.png')} // Use your login.png image here
          style={styles.illustration}
        />
      </View>

      {/* Form section */}
      <View style={styles.formSection}>
        <TextInput 
          style={styles.input}
          placeholder="User ID"
          placeholderTextColor="#888"
          value={userId}
          onChangeText={setUserId} // Handle User ID input
        />
        
        <View style={styles.passwordContainer}>
          <TextInput 
            style={styles.passwordInput}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry={!showPassword} // Toggle between show and hide password
            value={password}
            onChangeText={setPassword} // Handle Password input
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.toggleText}>
              {showPassword ? 'Hide' : 'Show'} {/* Show or hide text */}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPassword}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      {/* Log In and Sign Up buttons at the bottom */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.loginButton} onPress={onLoginPress}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  topSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C396C',
    
    

  },
  illustration: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  formSection: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1, // Takes up the remaining space
    height: 50,
    fontSize: 16,
  },
  toggleText: {
    color: '#007AFF',
    fontSize: 16,
    paddingRight: 10,
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#007AFF',
    marginBottom: 30,
  },
  bottomSection: {
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpText: {
    textAlign: 'center',
    color: '#4A90E2',
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
