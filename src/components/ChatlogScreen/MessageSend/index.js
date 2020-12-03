import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView } from 'react-native';
import { sendMessage } from "@redux/chatlogScreen/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import ChatlogOption from '@components/ChatlogScreen/ChatlogOption';

const MessageSend = (props) => {
  const { chatlog, sendMessage } = props;

  const [message, setMessage] = useState(message)

  const handleSubmit = (event)=>{
    sendMessage(chatlog, message)
    setMessage("")
  }

  return (
    <SafeAreaView style={styles.keybrd}>

      <KeyboardAvoidingView style={styles.sendBar}>

        <ChatlogOption chatlog={chatlog} />

        <TextInput style={styles.input} placeholderTextColor="#888" placeholder = "Message..." value={message} type="text" name="ChatlogMessage" onChangeText={(text) => setMessage(text)} />
        
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Icon name="angle-double-right" size={15} color="white"/>  
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  sendBar:{
    position:"absolute",
    padding:10,
    top:-15,
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-around',   
    backgroundColor:"#b3b3b3",
    width:"100%",
    height:1000,
  },
  input:{
    width: '70%',
    height: 35,
    backgroundColor: "#fff",
    borderRadius: 10,
    fontSize: 16,
    elevation: 5,
  },
  button:{
    height:35,
    elevation: 5,
    backgroundColor: "#841584",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  keybrd:{
    width:"100%",
    height:70,
  }
})

const mapStateToProps = (state) => { 
  return ({
    sendMessage: sendMessage,
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
