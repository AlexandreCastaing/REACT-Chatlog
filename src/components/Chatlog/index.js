import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

const Chatlog = (props) => {
  const { chatlog } = props;

  const bkgColors = chatlog.color;
  const name = chatlog.name;
  const desc = chatlog.description;

  return (
    <View style={[styles.chatlog, { backgroundColor: bkgColors}]}>
      <Text style={styles.chatlogName}> {name}</Text>
      <Text style={styles.chatlogDesc}> {desc} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  chatlog: {
    width: "100%",
    height: 105,
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
  
})

export default Chatlog;
