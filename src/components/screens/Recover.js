import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

const Recover = ({ navigation }) => {
  const [showPass, setShowPass] = useState(false);
  const [showRePass, setShowRePass] = useState(false);

  const [formData, setFormData] = useState({
    Email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (key, value) => {
    
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSignup = () => {
    // Perform signup logic here, e.g., send data to a server
    if (
      formData.Email === "" &&
      formData.password === "" &&
      formData.confirmPassword === ""
    ) {
      console.log('Sign Up Failed');
      alert('All fields should not be empty!');
    } else {
      // For demonstration purposes, log the form data
    console.log('Signup Data:', formData);

    // Pass the signup data to the Login screen
    // Example in your navigator or wherever you navigate to the Login screen
    navigation.navigate('Login', { signupData: formData, navigation: navigation });
    }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recover Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.Email}
        onChangeText={(text) => handleChange('Email', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={!showPass}
        right={
          <TextInput.Icon
            icon={showPass ? 'eye' : 'eye-off'}
            onPress={() => setShowPass(!showPass)}
          />
        }
        value={formData.password}
        onChangeText={(text) => handleChange('password', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={!showRePass}
        right={
          <TextInput.Icon
            icon={showRePass ? 'eye' : 'eye-off'}
            onPress={() => setShowRePass(!showRePass)}
          />
        }
        value={formData.confirmPassword}
        onChangeText={(text) => handleChange('confirmPassword', text)}
      />

      <Button icon="account-plus" mode="contained" onPress={handleSignup} style={{ marginTop: 10 }}>
        Register
      </Button>
      <Button
        onPress={() => navigation.pop()}
        icon="arrow-left"
        mode="contained"
        style={{ marginTop: 10 }}
      >
        Go Back
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 16
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default Recover;
