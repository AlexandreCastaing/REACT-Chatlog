import chatlogActions from "./constants";
import store from "@redux";
import API from "@lib/API";

export function changeChatlogCreate(item) {
  const currentStore = store.getState();
  const { chatlogCreate } = currentStore.chatlogCreate;

  const newchatlogCreate = [
    ...chatlogCreate,
    item
  ];
  return async function (dispatch) {
    dispatch(setChatlog(newchatlogCreate));
  }
}

export function setChatlogCreate(chatlogCreate, navigation) {
  
  let json = {};
  json.name = chatlogCreate.inputNameChatlog;
  json.hasPassword = chatlogCreate.inputHasPasswordChatlog;
  json.color = chatlogCreate.inputColorChatlog;
  json.description = chatlogCreate.inputDescriptionChatlog;
  json.password = chatlogCreate.inputPasswordChatlog;
  json.idUser = "test"

  return async (dispatch)=>{    
    const chatlogCreateReturn = await API("Chatlog","POST",json);
    navigation.navigate("ChatlogScreen", { chatlog: chatlogCreateReturn });
    dispatch({
      type: chatlogActions.SET_CHATLOG,
      chatlogCreate: chatlogCreateReturn,  
    })
  }
}

export function actuChatlogCreate(chatlogCreate) {
  return async function (dispatch) {
    dispatch({
      type: chatlogActions.ACTU_CHATLOG,
      chatlogCreate: chatlogCreate,  
    })
  };
}


