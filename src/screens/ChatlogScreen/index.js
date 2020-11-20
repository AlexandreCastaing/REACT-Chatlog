import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatlogScreen = (props) => {
  
  const { route } = props;
  let chatlog;
  if(route && route.params)
     chatlog = route.params.chatlog;
  

  if(chatlog!=undefined&&chatlog!=null)
    return (

      <View style={styles.container}>
        <Text>Chatlog VIEW !!!</Text>
        <Text> TEST -- == {chatlog.name}</Text>

      </View>
    );

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
