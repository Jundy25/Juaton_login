import { View ,StyleSheet} from "react-native";
import React, { useState } from 'react';
import { Button, Text, TextInput } from "react-native-paper";

const Login = ({ route, navigation }) => {
  const [showPass, setShowPass] = React.useState(false);

  const [loginData, setLoginData] = useState({
    Email: '',
    password: '',
  });

  const handleChange = (key, value) => {
    setLoginData({
      ...loginData,
      [key]: value,
    });
  };

  const handleLogin = () => {
    try {
      if (
        loginData.Email === "signupData.Email" &&
        loginData.password === "signupData.password"
      ) {
        console.log('Login successful');
        navigation.navigate('Home', { loginData: loginData });
      } else {
        console.log('Login failed');
        alert('Wrong Email or Password!')
      }
  
      setLoginData({
        Email: '',
        password: '',
      });
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    <View style={styles.container}
    >
      <Text style={styles.header}>Login</Text>

      {/* email input */}
      <TextInput
        style={styles.input}
        label="Email"
        value={loginData.email}
        onChangeText={(text) => handleChange('Email', text)}
      />

      {/* Password input */}
      <TextInput
        style={styles.input}
        label="Password"
        secureTextEntry={!showPass}
        right={
          <TextInput.Icon
            icon={showPass ? 'eye' : 'eye-off'}
            onPress={() => setShowPass(!showPass)}
          />
        }
        value={loginData.password}
        onChangeText={(text) => handleChange('password', text)}
      />
       {/* Forgot Password link */}
       <Text
        onPress={() => navigation.navigate('Recover')}
        style={{
          color: 'white',
          textAlign: 'right', // Align to the right side
          textDecorationLine: 'underline',
        }}>
        Forgot Password
      </Text>

      <Button
        mode="elevated"
        onPress={handleLogin}
        style={{ marginTop: 20 }}
      >
        Login
      </Button>
      <View style={{
        marginTop: 10,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
        <Text style={{ color: "white" }}>Don't have an Account? </Text>

        <Text
          onPress={() => navigation.navigate("Register")}
          style={{
            color: "white",
            alignItems: "center",
            textDecorationLine: 'underline',
          }}>
          Register Here!
        </Text>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#00796b",
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 16,
    color: "white"
  },


  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default Login;
