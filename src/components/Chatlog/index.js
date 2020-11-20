import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity, View } from 'react-native';

import ChatlogScreen from '@screens/ChatlogScreen';

const Chatlog = (props) => {
  const { chatlog, navigation, user } = props;

  const bkgColors = chatlog.color;
  const name = chatlog.name;
  const desc = chatlog.description;

  const pressChatlog = () => {
      console.log(chatlog)
      navigation.navigate("ChatlogScreen", { chatlog: chatlog });
      /*return (
        <ChatlogScreen chatlog={chatlog} user={user}/>
      ); */
  }

  return (
    <TouchableOpacity style={styles.button} onPress={() => pressChatlog()}>         
        <View onClick={() => pressChatlog()}
          style={[styles.chatlog, { backgroundColor: bkgColors}]}>
          <Text style={styles.chatlogName}> {name}</Text>
          <Text style={styles.chatlogDesc}> {desc} </Text>  
        </View>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  chatlog: {
    width: "100%",
    height: 120,
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
