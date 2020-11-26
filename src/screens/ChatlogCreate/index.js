import React , {useState, useEffect} from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { actuChatlogCreate, setChatlogCreate } from "@redux/chatlogCreate/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const ChatlogCreate = (props) => {
  
  let {changeChatlogCreate, chatlogCreate, actuChatlogCreate, setChatlogCreate, user, navigation } = props;
  
  console.log("index")
  console.log(chatlogCreate)

  let chatlogCreateJson;
  if(chatlogCreate && chatlogCreate.isLoaded){

    chatlogCreate.chatlogCreate = chatlogCreateJson;
    [chatlogCreate] = useState(chatlogCreate);

  }else{
    chatlogCreate = 
      {chatlogCreate: 
        { 
          inputNameChatlog: "New Chatlog",
          inputHasPasswordChatlog: "false",
          inputColorChatlog: "#292929",
          inputDescriptionChatlog: "",
          inputPasswordChatlog: ""
        }
      }
  }
  chatlogCreateJson = chatlogCreate.chatlogCreate;


  let handleChange_inputNameChatlog = (textValue)=>{
    chatlogCreateJson.inputNameChatlog= textValue.value;
    //setChatlogCreate(chatlogCreate)
  }

  let handleChange_inputHasPasswordChatlog = (textValue)=>{
    chatlogCreateJson.inputHasPasswordChatlog= textValue.value;
    //setChatlogCreate(chatlogCreate)
  }

  let handleChange_inputColorChatlog = (textValue)=>{
    chatlogCreateJson.inputColorChatlog= textValue.value;
    //setChatlogCreate(chatlogCreate)
  }
  
  let handleChange_inputPasswordChatlog = (textValue)=>{
    chatlogCreateJson.inputPasswordChatlog= textValue.value;
    //setChatlogCreate(chatlogCreate)
  }
  
  let handleChange_inputDescriptionChatlog = (textValue)=>{
    chatlogCreateJson.inputDescriptionChatlog= textValue.value;
    //setChatlogCreate(chatlogCreate)
  }



  let handleSubmit = (event)=>{
    //this.setState({value: event.target.value});
    //alert('OK');
    console.log(chatlogCreate);
  
  }
  
  return (
    <View style={styles.chatlog_Create_Container}>

        <Text style={styles.title}>Making New Chatlog</Text>
        
        <Text style={styles.label}>Chatlog Name</Text>
        <TextInput style={styles.input} label="" value={chatlogCreateJson.inputNameChatlog} type="text" name="ChatlogName" onChange={handleChange_inputNameChatlog} />
        <Text style={styles.label}>Accessing By Password ?</Text>
        <TextInput style={styles.input} label='' value={chatlogCreateJson.inputHasPasswordChatlog} type="text" name="ChatlogHasPassword" onChange={handleChange_inputHasPasswordChatlog} />
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} label='' value={chatlogCreateJson.inputPasswordChatlog} secureTextEntry={true} password={true} name="ChatlogPassword" onChange={handleChange_inputPasswordChatlog} />
        <Text style={styles.label}>Description</Text>
        <TextInput style={styles.input} label='' value={chatlogCreateJson.inputDescriptionChatlog} type="text" name="ChatlogDescription"  onChange={handleChange_inputDescriptionChatlog} />
        <Text style={styles.label}>Color</Text>
        <TextInput style={styles.input} label='' value={chatlogCreateJson.inputColorChatlog} type="text" name="ChatlogColor" onChange={handleChange_inputColorChatlog}/> 
        
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
 // console.log(state.chatlogCreate)

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
