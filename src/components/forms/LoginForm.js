import { View, StyleSheet, ToastAndroid } from "react-native";
import React from "react";
import { Button, Text, TextInput, HelperText } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import fetchServices from "../services/fetchServices";

export default function LoginForm({ navigation }) {
  const [showPass, setShowPass] = React.useState(false);

  const showToast = (message = "Something wen't wrong") => {
    ToastAndroid.show(message, 3000);
  };
  
  const handleLogin = async (values) => {
    try { 
      const url = "http://192.168.1.13:8000/api/v1/login";
      const result = await fetchServices.postData(url, values);

      if (result.message != null) {
        showToast(result?.message);
      } else {
        navigation.navigate("Home");
      }
    } catch (e) {
      console.debug(e.toString());
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
  });

  
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values) => {
        await handleLogin(values);
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        errors,
        touched,
        setTouched,
      }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>

      {/* email input */}
      <TextInput
      style={styles.input}
      placeholder="Email"
      defaultValue={values.email}
      value={values.email}
      keyboardType="email-address"
      onChangeText={handleChange("email")}
      onBlur={handleBlur("email")}
      error={errors.email && touched.email}
      onFocus={() => setTouched({ email: true }, false)}
      />  

      {errors.email && touched.email && (
              <HelperText type="error" visible={errors.email}>
                {errors.email}
              </HelperText>
            )}

      {/* Password input */}
      <TextInput
      style={styles.input}
      placeholder="Password"
      secureTextEntry={!showPass}
      right={
        <TextInput.Icon
          icon={showPass ? "eye" : "eye-off"}
          onPress={() => setShowPass(!showPass)}
        />
      }
      value={values.password}
      onChangeText={handleChange("password")}
      onBlur={handleBlur("password")}
      error={errors.password && touched.password}
      onFocus={() => setTouched({ password: true }, false)}
      />
      {errors.password && touched.password && (
                  <HelperText 
                      type="error" visible={errors.password}>
                      {errors.password}
                  </HelperText>
                      )}
      
      {/* Forgot Password link */}
      <Text
        onPress={() => navigation.navigate('Recover')}
        style={{
          color: 'white',
          textAlign: 'right',
          textDecorationLine: 'underline',
        }}>
        Forgot Password
      </Text>

      {/* Login button */}
      <Button 
        loading={isSubmitting}
        disabled={isSubmitting}
        mode="elevated" 
        onPress={handleSubmit}
        style={{ marginTop: 20 }}>
        Login
      </Button>

      {/* Register link */}
      <View
        style={{
          marginTop: 10,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={{ color: 'white' }}>Don't have an Account? </Text>

        <Text
          onPress={() => navigation.navigate("Register")}
          style={{
            color: 'white',
            textDecorationLine: 'underline',
          }}>
          Register Here!
        </Text>
      </View>
    </View>
  );
}}
</Formik>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
