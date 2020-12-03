import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MessageSend from '@components/ChatlogScreen/MessageSend';
import Messages from '@components/ChatlogScreen/Messages';

const ChatlogScreen = (props) => {
  
  const { route, user, messages } = props;
  const chatlog = (route && route.params) ? route.params.chatlog : {};

  if(!(chatlog!=undefined&&chatlog!=null)){
    return (
      <View style={styles.container}>
        <Text>No Chatlog.</Text>
      </View>
    );
  }

    return (

     <View style={styles.container}> 
        <View style={styles.messages}>
          <Messages chatlog={chatlog}/>
        </View>
        <View style={styles.messageSend}>
          <MessageSend chatlog={chatlog}/>
        </View>
      </View>

    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messages: {
    textAlign: "center",
    width: "100%",
    height: "86%",
  },
  messageSend: {
    textAlign: "center",
    width: "100%",
    height: 70,
  },
});

export default ChatlogScreen;
