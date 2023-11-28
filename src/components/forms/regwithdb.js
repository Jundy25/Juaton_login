import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleRegister = () => {
    // Add your registration logic here
    // This would typically involve making a network request to your server
    // to create a new user account.
    // Remember that in React Native, you will need to use a backend service
    // for handling user authentication.

    // For example:
    // fetch('https://your-backend-api.com/register', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username,
    //     password,
    //   }),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Handle the response from the server
    //   console.log(data);
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Please fill this form to create an account.</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <Text style={styles.errorText}>{usernameError}</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Text style={styles.errorText}>{passwordError}</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
          <Text style={styles.errorText}>{confirmPasswordError}</Text>
        </View>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => {
            setUsername('');
            setPassword('');
            setConfirmPassword('');
          }}
        >
          <Text style={styles.registerButtonText}>Reset</Text>
        </TouchableOpacity>
        <Text>
          Already have an account?{' '}
          {/* Add navigation logic to navigate to the login screen */}
          {/* <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
            Login here
          </Text> */}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  wrapper: {
    width: '80%',
    padding: 20,
    backgroundColor: 'wheat',
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    margin: 5,
    backgroundColor: '#f1f1f1',
  },
  errorText: {
    color: 'red',
  },
  registerButton: {
    backgroundColor: 'burlywood',
    padding: 16,
    margin: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: 'darkorange',
    padding: 16,
    margin: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  registerButtonText: {
    color: 'whitesmoke',
  },
  loginLink: {
    color: 'dodgerblue',
  },
});

export default RegisterScreen;


//This code defines a React Native component for user registration. Note that in a real-world scenario, you would need to implement server-side logic for user registration and integrate it with your React Native app.