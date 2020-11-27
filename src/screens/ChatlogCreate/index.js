import React , {useState, useEffect} from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { actuChatlogCreate, setChatlogCreate } from "@redux/chatlogCreate/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CheckBox from "@lib/CheckBox";

const ChatlogCreate = (props) => {
  
  const {changeChatlogCreate, chatlogCreate, actuChatlogCreate, setChatlogCreate, user, navigation } = props;
  

  const chatlogCreateJson = chatlogCreate.chatlogCreate;

  
  let  [inputNameChatlog, setNameChatlog] = useState(chatlogCreateJson.inputNameChatlog)
  let  [inputHasPasswordChatlog, setHasPasswordChatlog] = useState(chatlogCreateJson.inputHasPasswordChatlog)
  let  [inputColorChatlog, setColorChatlog] = useState(chatlogCreateJson.inputColorChatlog)
  let  [inputDescriptionChatlog, setDescriptionChatlog] = useState(chatlogCreateJson.inputDescriptionChatlog)
  let  [inputPasswordChatlog, setPasswordChatlog] = useState(chatlogCreateJson.inputPasswordChatlog)

  const handleSubmit = (event)=>{
      const chatlogInfosCreate = 
      {
        inputNameChatlog,
        inputHasPasswordChatlog,
        inputColorChatlog,
        inputDescriptionChatlog,
        inputPasswordChatlog
      }

      setChatlogCreate(chatlogInfosCreate, navigation)
  }

  let test = ()=>{
    console.log("ok")
  }
  
  return (
    <View style={styles.chatlog_Create_Container}>

        <Text style={styles.title}>Making New Chatlog</Text>
        
        <Text style={styles.label}>Chatlog Name</Text>
        <TextInput style={styles.input} label="" placeholderTextColor="#888" placeholder = "Chatlog" value={inputNameChatlog} type="text" name="ChatlogName" onChangeText={(text) => setNameChatlog(text)} />

        
        <Text style={styles.label}>Password</Text>
        <CheckBox />
        
        <TextInput style={styles.input} label='' placeholderTextColor="#888" value={inputPasswordChatlog} secureTextEntry={true} password={true} name="ChatlogPassword" onChangeText={(text) => setPasswordChatlog(text)} />
        <Text style={styles.label}>Description</Text>
        <TextInput style={styles.input} label='' placeholderTextColor="#888" value={inputDescriptionChatlog} type="text" name="ChatlogDescription"  onChangeText={(text) => setDescriptionChatlog(text)} />
        <Text style={styles.label}>Color</Text>
        <TextInput style={styles.input} label='' placeholderTextColor="#888" placeholder = "#383FA5" value={inputColorChatlog} type="text" name="ChatlogColor" onChangeText={(text) => setColorChatlog(text)}/> 
        
        <Button onPress={handleSubmit} title="Créer"></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    width: "100%"
  },
  chatlog_Create_Container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    flexWrap: "nowrap",
    textAlign: "center",
    width: "100%"
  },
  title:{
    fontSize: 28,
  },
  label:{
    fontSize: 16,
  },
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
  chatlogName:{
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
    fontSize: 24
  },
  chatlogDesc:{
    textAlign: "center",
    color: "#000",
    fontSize: 15
  },
});

const mapStateToProps = (state) => { 
  return ({
    chatlogCreate: state.chatlogCreate,
    actuChatlogCreate: actuChatlogCreate, // << test todo remove

  }) 

};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      actuChatlogCreate,
      setChatlogCreate,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ChatlogCreate);
