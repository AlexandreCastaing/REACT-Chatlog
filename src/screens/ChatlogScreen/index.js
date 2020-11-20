import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatlogScreen = (props) => {
  const { route } = props;
  const { chatlog } = route.params;

  return (

    <View style={styles.container}>
      <Text>Chatlog VIEW !!!</Text>
      <Text> TEST -- == {chatlog.name}</Text>

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatlogScreen;
