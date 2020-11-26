import React , {setState} from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { changeChatlogCreate, setChatlogCreate } from "@redux/chatlogCreate/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const ChatlogCreate = (props) => {
  
  let {chatlogCreate, changeChatlogCreate, setChatlogCreate, user, navigation } = props;
  chatlogCreate = chatlogCreate.chatlogCreate;
 

  //probleme de childs chatlogCreate












  /*if(stateChatlogCreate==undefined||stateChatlogCreate==null)
    stateChatlogCreate = {
          inputNameChatlog: "New Chatlog",
          inputHasPasswordChatlog: "false",
          inputColorChatlog: "#292929",
          inputDescriptionChatlog: "",
          inputPasswordChatlog: "",
       };
  
      this.setState({stateChatlogCreate: stateChatlogCreate})*/
 

      /*
  useEffect(()=>{
    setChatlogCreate();
  }, [chatlogJson]/*[]/*chatlogs*//*;*/

  


    /*React.useEffect(() => {
        setUser(props.user);
    }, [props.user])*/
  
  let self = this;

  let handleChange_inputNameChatlog = (textValue)=>{
    chatlogCreate.inputNameChatlog= textValue.value;
    let chatlogCreateParent = ({}).chatlogCreate;
    self.setState({chatlogCreate: chatlogCreateParent})
  }

  let handleChange_inputHasPasswordChatlog = (textValue)=>{
    chatlogCreate.inputHasPasswordChatlog= textValue.value;
    let chatlogCreateParent = ({}).chatlogCreate;
    self.setState({chatlogCreate: chatlogCreateParent})
  }

  let handleChange_inputColorChatlog = (textValue)=>{
    chatlogCreate.inputColorChatlog= textValue.value;
    let chatlogCreateParent = ({}).chatlogCreate;
    self.setState({chatlogCreate: chatlogCreateParent})
  }
  
  let handleChange_inputPasswordChatlog = (textValue)=>{
    chatlogCreate.inputPasswordChatlog= textValue.value;
    let chatlogCreateParent = ({}).chatlogCreate;
    self.setState({chatlogCreate: chatlogCreateParent})
  }
  
  let handleChange_inputDescriptionChatlog = (textValue)=>{
    chatlogCreate.inputDescriptionChatlog= textValue.value;
    let chatlogCreateParent = ({}).chatlogCreate;
    self.setState({chatlogCreate: chatlogCreateParent})
  }

  
/*
  let handleChange_inputNameChatlog = (textValue)=>{
    stateChatlogCreate.inputNameChatlog= textValue.value
  }

  let handleChange_inputHasPasswordChatlog = (textValue)=>{
    stateChatlogCreate.inputHasPasswordChatlog= textValue.value
  }

  let handleChange_inputColorChatlog = (textValue)=>{
    stateChatlogCreate.inputColorChatlog= textValue.value
  }
  
  let handleChange_inputPasswordChatlog = (textValue)=>{
    stateChatlogCreate.inputPasswordChatlog= textValue.value
  }
  
  let handleChange_inputDescriptionChatlog = (textValue)=>{
    stateChatlogCreate.inputDescriptionChatlog= textValue.value
  }
*/

  let handleSubmit = (event)=>{
    //this.setState({value: event.target.value});
    //alert('OK');
    console.log(chatlogCreate);
  }
  
  return (
    <View style={styles.chatlog_Create_Container}>

        <Text style={styles.title}>Making New Chatlog</Text>
        
        <Text style={styles.label}>Chatlog Name</Text>
        <TextInput style={styles.input} label="" value={chatlogCreate.inputNameChatlog} type="text" name="ChatlogName" onChange={handleChange_inputNameChatlog} />
        <Text style={styles.label}>Accessing By Password ?</Text>
        <TextInput style={styles.input} label='' value={chatlogCreate.inputHasPasswordChatlog} type="checkbox" name="ChatlogHasPassword" onChange={handleChange_inputHasPasswordChatlog} />
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} label='' value={chatlogCreate.inputDescriptionChatlog} secureTextEntry={true} password={true} name="ChatlogPassword" onChange={handleChange_inputPasswordChatlog} />
        <Text style={styles.label}>Description</Text>
        <TextInput style={styles.input} label='' value={chatlogCreate.inputPasswordChatlog} type="text" name="ChatlogDescription" onChange={handleChange_inputDescriptionChatlog} />
        <Text style={styles.label}>Color</Text>
        <TextInput style={styles.input} label='' value={chatlogCreate.inputColorChatlog} type="text" name="ChatlogColor" onChange={handleChange_inputColorChatlog}/> 
        
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
    changeChatlogCreate: changeChatlogCreate, // << test todo remove
  }) 

};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeChatlogCreate,
      setChatlogCreate,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ChatlogCreate);
