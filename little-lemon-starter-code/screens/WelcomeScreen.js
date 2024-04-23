import * as React from 'react';
import { View, Image, Text, Pressable, StyleSheet } from 'react-native';


const WelcomeScreen = ({ navigation }) => {
  //Step 4, Add welcome screen code here.
  return (
  <View style={styles.container}>

    <Image  style={styles.logo}
    source={require("../assets/little-lemon-logo.png")}
    accessible={true}
    accessibiltyLabel={'Little Lemon Logo'}
    />

    <Text style={styles.regularText}>
      Little Lemon, your local Mediterranean Bistro
    </Text>
  
    <Pressable
      onPress={() => {navigation.navigate("Subscribe")}}
      style={styles.button}>
      <Text style={styles.buttonText}>Newsletter</Text>
    </Pressable>
  </View>
  );
};

export default WelcomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  logo: {
    height: 200,
    resizeMode: "contain"
  },
  regularText: {
    marginTop: 90,
    marginLeft: 80,
    marginRight: 80,
    marginBottom: 150,
    fontSize: 19,
    fontWeight: "bold",
    textAlign: 'center'
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#006600",
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    width: '85%',
  },
  buttonText: {
color: 'white',
textAlign: 'center',
fontSize: 15,
  },
});