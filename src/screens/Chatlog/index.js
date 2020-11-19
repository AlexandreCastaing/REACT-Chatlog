import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Chatlog = (props) => {
  const { chatlog, user, navigation } = props;
  
  return (
    <View style={styles.container}>
      <Text>Chatlog VIEW !!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chatlog;
