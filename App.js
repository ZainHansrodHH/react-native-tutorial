import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Cat name="Fluffi boi"></Cat>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const testFunction = (text) => {
  return text + '.'
}

const Cat = (props) => {
  //You can add any JS within curly brackets
  var name = "Zain";
  return(
    <ScrollView>
      <Text>Hi, I am your first component. Welcome, {testFunction(name)}</Text>
      <Text>Here's your name prop: {props.name}</Text>
    </ScrollView>
  );
}
