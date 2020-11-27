import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Button, TouchableOpacity, View, TextInput } from 'react-native';
import { sendMessage } from "@redux/chatlogScreen/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const MessageSend = (props) => {
  const { chatlog, navigation, user, sendMessage } = props;

  const [message, setMessage] = useState(message)

  const handleSubmit = (event)=>{
    sendMessage(chatlog, message)
    setMessage("")
  }

  return (
    
    <View>
        <TextInput style={styles.input} value={message} type="text" name="ChatlogMessage" onChangeText={(text) => setMessage(text)} />
        <Button style={styles.button} onPress={handleSubmit} title="OK"></Button>
    </View>

  )
}

const styles = StyleSheet.create({
  input:{
    width: 280,
    height: 40,
    backgroundColor: "#fff",
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  button:{
    width:100,
  }
})

const mapStateToProps = (state) => { 
  return ({
    sendMessage: sendMessage, // << test todo remove
  }) 
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      sendMessage,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MessageSend);
