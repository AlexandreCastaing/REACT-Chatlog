import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MessageSend from '@components/ChatlogScreen/MessageSend';
import Messages from '@components/ChatlogScreen/Messages';

const ChatlogScreen = (props) => {
  
  const { route, user, messages } = props;
  const chatlog = (route && route.params) ? route.params.chatlog : {};

  /*
  if (!user.loggedIn) {
    return (
      <View style={styles.wrapper}>
        <Text>Vous devez être connecté pour utiliser cette fonctionnalité.</Text>
      </View>
    );
  }
  */

  if(!(chatlog!=undefined&&chatlog!=null)){
    return (
      <View style={styles.container}>
        <Text>No Chatlog.</Text>
      </View>
    );
  }

  //chatlog.name
  
  //TODO   récupérer messages depuis API

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
    height: '80%',
  },
  messageSend: {
    textAlign: "center",
    width: "100%",
    height: '20%',
  },
});

const mapStateToProps = (state) => ({
  chatlogsJson: state.chatlogs.chatlogsJson,
  user: state.user,
  pressChatlog: pressChatlog, // << test todo remove
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      pressChatlog,
      loadChatlogs,
    },
    dispatch
);

export default ChatlogScreen;
