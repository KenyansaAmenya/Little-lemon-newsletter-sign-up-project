import * as React from 'react';
import {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Image, Alert, Button, Pressable } from 'react-native';
import {validateEmail} from '../utils';

const SubscribeScreen = () => {
  // Add subscribe screen code here

  const [email, setEmail] = useState("");
  const checkValidEmail = validateEmail(email);

  return (
  <View style={styles.container}>

    <Image style={styles.logo}
    source={require("../assets/little-lemon-logo-grey.png")}
    />
    <Text style={styles.regularText}>
      Subscribe to our Newsletter for our latest delicious recipes!
    </Text>

      <TextInput
        style={styles.inputStyle}
        placeholder='Type your email'
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        textContentType="emailAddress"
      />

    <Button style={styles.button}
    onPress={() => Alert.alert("Thanks for subscribing, stay tuned!")}
    title="Subscribe"
        color="#006600"
    disabled={!checkValidEmail}
    />
    {/**<Pressable 
      disabled={!verifyEmail}
      onPress={() => {
        console.log(verifyEmail);
        Alert.alert("Thanks for subscribing, stay tuned!");
        setEmail("")
      }} 
      style={[styles.buttonActive, !verifyEmail && styles.button]}
      width= {width - 50}>
      <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>  */}
  </View>

  );
};

export default SubscribeScreen;


const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginRight: 25,
  },
  logo: {
    marginTop: 40,
    marginLeft: 75,
    height: 120,
    width: 200,
    resizeMode: "contain"
  },
  regularText: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 19,
    textAlign: 'center'
  },
  inputStyle: {
    marginBottom: 20,
    fontSize: 16,
    borderColor: "#000000",
    borderWidth: 1,
    height: 40,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: '#495E57',
    width: '85%',
    alignItems: 'center',
    borderRadius: 30,
  },
})