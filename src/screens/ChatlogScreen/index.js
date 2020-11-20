import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatlogScreen = (props) => {
  const { chatlog, user } = props;
  

  return (
    
    <View style={styles.container}>
      <Text>Chatlog VIEW !!!</Text>
      <Text> TEST -- == {chatlog}</Text>
      <Text> TEST -- == {user}</Text>

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatlogScreen;
