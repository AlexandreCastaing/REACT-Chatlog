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

export function setChatlogCreate(chatlogCreate) {
  console.log("set action")
  console.log(chatlogCreate)
  
  return async function (dispatch) {
    dispatch({
      type: chatlogActions.SET_CHATLOG,
      chatlogCreate: chatlogCreate,  
    })
  };
}

export function actuChatlogCreate(chatlogCreate) {
  console.log("actu action")
  console.log(chatlogCreate)
  
  return async function (dispatch) {
    dispatch({
      type: chatlogActions.ACTU_CHATLOG,
      chatlogCreate: chatlogCreate,  
    })
  };
}


