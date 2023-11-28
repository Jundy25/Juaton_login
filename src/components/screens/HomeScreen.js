import { View, Image} from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";


export default function Home({ navigation }) {
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
        <Text variant="displayMedium" 
        style={{fontSize: 35,
      fontWeight: 'bold',
      marginBottom: 16,
      color: "white"}}
         >Welcome to HomePage</Text>
      
        <Button 
        onPress={() => navigation.navigate("Welcome")}
        mode="elevated"
        style={{ marginTop: 100}}
      >
        Logout
      </Button>
      </View>
    </View>
  );
}

      
