import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Button, TouchableOpacity, View, ScrollView } from 'react-native';
import { getMessages } from "@redux/chatlogScreen/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Messages = (props) => {
  const { chatlog, messages, getMessages } = props;


  if(!chatlog) return (<View style={styles.wrapper}></View>);


  useEffect(()=>{

    const getMessagesInterval = setInterval(() => {
      getMessages(chatlog);
    }, 2500);

    return () => {
      clearInterval(getMessagesInterval);
    };
  
  }, [messages]);

  console.log(chatlog)

  if(messages && messages.length > 0){
    return ( 
        <View style={styles.wrapper}>
        <ScrollView horizontal={false} style={styles.messages}>
          {messages.map((message) => (      
              <View onClick={() => pressChatlog()}
                style={styles.message}>
                <Text style={styles.pseudo}> {message.pseudo} : </Text>
                <Text style={styles.messageText}> {message.message}</Text>
              </View>
          ))}
        </ScrollView>
      
      </View>
    )
  }
  
  return (<View style={styles.wrapper}></View>);
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  message: {
    width: "100%",
    justifyContent: "center",
    flexWrap: "nowrap"
  },
  messageText: {
    fontSize: 15,
  },
  pseudo: {
    fontSize: 18,
  }
})

const mapStateToProps = (state) => ({
  user: state.user,
  messages: state.chatlogScreen.messages
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getMessages,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
