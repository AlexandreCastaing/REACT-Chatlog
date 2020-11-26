import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatlogScreen = (props) => {
  
  const { route } = props;
  const chatlog = (route && route.params) ? route.params.chatlog : {};




  if(chatlog!=undefined&&chatlog!=null){

  //TODO   récupérer messages depuis API

    return (

      <View style={styles.container}>
        <Text>Chatlog VIEW !!!</Text>
        <Text> TEST -- == {chatlog.name}</Text>

      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text>No Chatlog.</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatlogScreen;
