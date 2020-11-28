import React , {useState, useEffect, Component} from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import { actuChatlogCreate, setChatlogCreate } from "@redux/chatlogCreate/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from 'styled-components'

const ChatlogCreate = (props) => {
  
  const {changeChatlogCreate, chatlogCreate, actuChatlogCreate, setChatlogCreate, user, navigation } = props;
  

  const chatlogCreateJson = chatlogCreate.chatlogCreate;

  let  [inputNameChatlog, setNameChatlog] = useState(chatlogCreateJson.inputNameChatlog)
  let  [inputHasPasswordChatlog, setHasPasswordChatlog] = useState(chatlogCreateJson.inputHasPasswordChatlog)
  let  [inputColorChatlog, setColorChatlog] = useState(chatlogCreateJson.inputColorChatlog)
  let  [inputDescriptionChatlog, setDescriptionChatlog] = useState(chatlogCreateJson.inputDescriptionChatlog)
  let  [inputPasswordChatlog, setPasswordChatlog] = useState(chatlogCreateJson.inputPasswordChatlog)

  if(inputHasPasswordChatlog===undefined) inputHasPasswordChatlog = false;

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
  
  return (
    <View style={styles.chatlog_Create_Container}>

        <Text style={styles.title}>Making New Chatlog</Text>
        
        <Text style={styles.label}>Chatlog Name</Text>
        <TextInput style={styles.input} label="" placeholderTextColor="#888" placeholder = "Chatlog" value={inputNameChatlog} type="text" name="ChatlogName" onChangeText={(text) => setNameChatlog(text)} />
  
        <Text style={styles.label}>Password</Text>

        <View style={styles.column}>
          <TouchableOpacity onPress={() => {setHasPasswordChatlog(!inputHasPasswordChatlog)}}>
            <CustomCheckBox checkBoxActive={inputHasPasswordChatlog}>
              <CheckIcon>
                <CheckIconWrapper>
                  <CheckIconVertical checkBoxActive={inputHasPasswordChatlog} />
                  <CheckIconHorizontal checkBoxActive={inputHasPasswordChatlog} />
                </CheckIconWrapper>
              </CheckIcon>
            </CustomCheckBox>
          </TouchableOpacity>
          <TextInput style={styles.input} label='' placeholderTextColor="#888" value={inputPasswordChatlog} secureTextEntry={true} password={true} name="ChatlogPassword" onChangeText={(text) => setPasswordChatlog(text)} />
        </View>

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
  column:{
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
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

const CustomCheckBox = styled(View)`
height: 42px;
width: 42px;
background: ${props => (props.checkBoxActive ? '#448ccb' : 'transparent')};
border-radius: 0px;
position: relative;
justify-content: center;
margin: 0px 8px 0 0;
border: solid 1px #e1e4e5;
`
const CheckIcon = styled(View)`
border-radius: 0px;
align-self: center;
transform: rotate(-30deg);
`

/*==============================
  Custom  checkbox styled 
===============================*/
const CheckIconWrapper = styled(View)`
position: relative;
left: 2px;
top: -2px;
`
const CheckIconVertical = styled(View)`
height: 5px;
width: 2px;
background: ${props => (props.checkBoxActive ? '#fff' : '#333a')};
`
const CheckIconHorizontal = styled(View)`
height: 2px;
width: 16px;
background: ${props => (props.checkBoxActive ? '#fff' : '#333a')};
`

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
