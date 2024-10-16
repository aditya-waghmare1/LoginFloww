import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/second.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Contact your admin</Text>
      <Text style={styles.instructions}>
        Password can only be reset by your admin. 
        Contact the admin and request them to reset your password.
      </Text>
      <Text style={styles.instructions}>
        For the admin's assistance:
      </Text>
      <Text style={styles.instructions}>
        Open Q2Pay → Settings → Users → Select user → Reset password
      </Text>
      <Text style={styles.footer}>Password reset successfully?</Text>
      
      {/* Custom Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SetNewPassword')}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#1C396C',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
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
    marginBottom: 10,
    textAlign: 'center',
  },
  footer: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#28A745',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
