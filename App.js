import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Text>React Basics</Text>
      <Text>Open up App.js to start working on your app!!</Text>
      <StatusBar style="auto" />
      <Cat name="Fluffi boi"></Cat>
      <Text>Handling Text Input</Text>
      <PizzaTranslate></PizzaTranslate>
    </View>
  );
}

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//A function that can be created and used
const testFunction = (text) => {
  return text + '.'
}

//A component (Which happens to be a custom one)
//Props - Variables passed to our component when its being used.
//Use state for variables that are going to change overtime
//Any code added between the {} is JS and can be executed or ran
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

//Example of handling user input
//Vars outside of return statement
const PizzaTranslate = (props) => {
  const [text, setText] = useState('');
  return(
    <View>
      <TextInput onChangeText={text => setText(text)}></TextInput>
      <Text>{text.split(' ').map((word) => word && '🍕').join(' ')}</Text>
    </View>
  )
}

//Helper function for pizza translator
const wordsToPizza = (text) => {
  var wordSplit = text.split(' ');
  var pizzaWord = "";
  for (var i=0;wordSplit.length;i++){
    wordSplit[i] = '🍕';
    pizzaWord += wordSplit[i];
  }
  return pizzaWord;
}

//Flat list component example
const FlatListExample = () => {
  return(
    <View>
      <FlatList data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]} renderItem ={({item}) => <Text style={styles.item}>{item.key}</Text>}/>
    </View>
  )
}