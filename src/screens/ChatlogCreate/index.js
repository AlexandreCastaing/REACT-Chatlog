import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const ChatlogCreate = () => {

  function handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  function handleSubmit(event) {
    alert('Chatlog Sent');
    preventDefault();
  }

  return (
    <View style={styles.chatlog_Create_Container}>

        <Text>Making New Chatlog</Text>

        <Text>
          Chatlog Name  
        </Text>
        <TextInput  type="text" name="ChatlogName" onChange={this.handleChange} />
        <Text>
          Accessing By Password
        </Text>
        <TextInput  type="checkbox" name="ChatlogHasPassword" onChange={this.handleChange} />
        <Text>
          Password
        </Text>
        <TextInput  type="password" name="ChatlogPassword" onChange={this.handleChange} />
        <Text>
          Description
        </Text>
        <TextInput  type="text" name="ChatlogDescription" onChange={this.handleChange} />
        <Text>
          Color
        </Text>
        <TextInput  type="text" name="ChatlogColor" onChange={this.handleChange}/> 
        
        <Button onPress={this.handleSubmit} title="Créer"></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatlog_Create_Container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    flexWrap: "nowrap"
  },
  chatlogName:{
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
    fontSize: 24
  },
  chatlogDesc:{
    textAlign: "center",
    color: "#000",
    fontSize: 15
  },
});

export default ChatlogCreate;
