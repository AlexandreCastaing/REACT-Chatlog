import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity, View } from 'react-native';

const Chatlog = (props) => {
  const { chatlog, navigation, user } = props;

  if(chatlog==undefined)return (<Text>...</Text>)
  
  let bkgColors = chatlog.color; if(!bkgColors) bkgColors = "#777"
  let name = chatlog.name; if(!name) name = "???"
  let desc = chatlog.description; if(!desc) desc = "???"

  const pressChatlog = () => {
      navigation.navigate("ChatlogScreen", { chatlog: chatlog });
  }

  return (
    <TouchableOpacity style={styles.button} onPress={() => pressChatlog()}>         
        <View onClick={() => pressChatlog()}
          style={[styles.chatlog, { backgroundColor: bkgColors+(bkgColors.lenght<6?"a":"aa")}]}>
          <Text style={styles.chatlogName}> {name}</Text>
          <Text style={styles.chatlogDesc}> {desc} </Text>  
        </View>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  chatlog: {
    width: "100%",
    height: 85,
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
