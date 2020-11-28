import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Button, TouchableOpacity, View, TextInput } from 'react-native';
import { sendMessage } from "@redux/chatlogScreen/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Icon from 'react-native-vector-icons/FontAwesome';

const MessageSend = (props) => {
  const { chatlog, navigation, user, sendMessage } = props;

  const [message, setMessage] = useState(message)

  const handleSubmit = (event)=>{
    sendMessage(chatlog, message)
    setMessage("")
  }

  return (
    
    <View style={styles.sendBar}>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Icon name="cog" size={15} color="white"/>  
        </TouchableOpacity>

        <TextInput style={styles.input} placeholderTextColor="#888" placeholder = "Message..." value={message} type="text" name="ChatlogMessage" onChangeText={(text) => setMessage(text)} />
        
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Icon name="angle-double-right" size={15} color="white"/>  
        </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  sendBar:{
    padding:10,
    marginTop:50,
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    backgroundColor:"#e8e8e8", 
    height:"10%"
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
