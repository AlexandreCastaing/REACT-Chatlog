import React, {useEffect} from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { getMessages } from "@redux/chatlogScreen/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Message from "@components/Message";

const Messages = (props) => {
  const { chatlog, messages, getMessages } = props;

  if(!chatlog) return (<View style={styles.wrapper}></View>);

  useEffect(()=>{

    const getMessagesInterval = setInterval(() => {
      getMessages(chatlog);
    }, 2000);

    return () => {
      clearInterval(getMessagesInterval);
    };
  
  }, [messages]);

  if(messages && messages.length > 0){
    return ( 
      <View style={styles.wrapper}>
        <ScrollView horizontal={false} style={styles.messages}>
          {messages.map((message) => { 
            return <Message timestamp={message.timestamp} pseudo={message.pseudo} message={message.message} />
             
        })}
        </ScrollView>
      
      </View>
    )
  }
  if(messages && messages.length == 0){
    return ( 
      <View style={styles.wrapper}>
        <Text>... no message here !</Text>
      </View>
    )
  }
  
  return (<View style={styles.wrapper}></View>);
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
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
