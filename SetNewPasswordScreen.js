import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Animated, Easing } from 'react-native';

const SetNewPasswordScreen = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); // State to manage success message
  const [inputContainerOpacity] = useState(new Animated.Value(1)); // Animated value for input container opacity

  const handleSetNewPassword = () => {
    // Reset error message
    setErrorMessage('');

    // Validate password matching
    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
    } else {
      // Proceed with setting the new password
      console.log('Password Set');
      // Animate opacity to fade out input container
      Animated.timing(inputContainerOpacity, {
        toValue: 0, // Fade out
        duration: 300, // Duration of the animation
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }).start(() => {
        setIsSuccess(true); // After animation, set success state to true
      });
    }
  };

  // Function to handle navigation to login
  const handleLoginNavigation = () => {
    navigation.navigate('Login'); // Navigate to the Login screen
  };

  return (
    <View style={styles.container}>
      {/* Large Image at the top */}
      <Image
        source={require('./assets/shield.png')} // Ensure shield.png is placed inside assets folder
        style={styles.image}
        resizeMode="contain"
      />

      {/* Title and instructions */}
      <Text style={styles.title}>Login successful!</Text>
      <Text style={styles.instructions}>
        It is mandatory for you to set a new password, which is not the same as the password provided by the admin.
      </Text>

      {/* Password input fields with white background */}
      <Animated.View style={[styles.inputContainer, { opacity: inputContainerOpacity }]}>
        <TextInput
          placeholder="Old password"
          secureTextEntry={true}
          style={styles.input}
          value={oldPassword}
          onChangeText={setOldPassword}
        />
        <TextInput
          placeholder="New password"
          secureTextEntry={true}
          style={styles.input}
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <TextInput
          placeholder="Confirm password"
          secureTextEntry={true}
          style={[styles.input, errorMessage ? styles.inputError : null]} // Add error style if there's a message
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        {/* Button to submit */}
        <View style={styles.buttonContainer}>
          <Button title="Set new password" onPress={handleSetNewPassword} />
        </View>
      </Animated.View>

      {/* Show success message and button if password set successfully */}
      {isSuccess && (
        <View style={styles.successContainer}>
          <Image
            source={require('./assets/correct.png')} // Ensure correct.png is placed inside assets folder
            style={styles.successImage}
            resizeMode="contain"
          />
          <Text style={styles.successMessage}>Your password has been successfully reset!</Text>
          <View style={styles.buttonContainer}>
            <Button title="Login" onPress={handleLoginNavigation} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#1C396C', // Background color
  },
  image: {
    width: 250,  // Increased width
    height: 250, // Increased height for larger image
    alignSelf: 'center',
    marginBottom: 30, // Space between image and title
  },
  successImage: {
    width: 200,  // Adjust size for success image
    height: 200,
    alignSelf: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  instructions: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: '#fff',  // White background for input container
    borderRadius: 10,         // Rounded corners for input container
    padding: 20,              // Add padding for spacing
    marginBottom: 20,         // Space below the input fields
  },
  input: {
    backgroundColor: '#f0f0f0', // Light background color for individual inputs
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',  // Default border color
  },
  inputError: {
    borderColor: 'red', // Red border for error
  },
  errorText: {
    color: 'red',       // Red text for error messages
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%', // Full width for the button
    borderRadius: 8, // Rounded corners for button
  },
  successContainer: {
    alignItems: 'center', // Center content
    marginTop: 20,
  },
  successMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1C396C',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SetNewPasswordScreen;
