import { View, Image } from "react-native";
import React from "react";
import { Button, Text } from "react-native-paper";
import Login1 from "./Login1";

export default function WelcomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00796b",
      }}
    >
      {/* Corrected the prop name from styles to style */}
      <View style={{ flex: 1, alignItems: "center",}}>
        <Image source={require('./img/DT.png')} style={{width: 350, height: 350}}/>
      
        <Button 
          onPress={() => navigation.navigate("Login")}
          mode="elevated"
          style={{ marginTop: 100}}
        >
          Login
        </Button>
        <Button
          onPress={() => navigation.navigate("Register")}
          mode="elevated"
          style={{ marginTop: 10 }}
        >
          Register
        </Button>
      </View>
    </View>
  );
}
