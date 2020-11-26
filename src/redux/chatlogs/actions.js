import chatlogsActions from "./constants";
import store from "@redux";
import API from "@lib/API";

export function pressChatlog(item) {
  const currentStore = store.getState();
  const { chatlogsJson } = currentStore.chatlogsJson;

  const newChatlogsJson = [
    ...chatlogsJson,
    item
  ];
  return async function (dispatch) {
    dispatch(setChatlogs(newChatlogsJson));
  }
}

export function loadChatlogs(){
  return async (dispatch)=>{    
    const chatlogsJson = await API("Chatlogs","GET",{});
    dispatch(setChatlogs(chatlogsJson));
  }
}

export function setChatlogs(chatlogsJson) {
  return async function (dispatch) {
    dispatch({
      type: chatlogsActions.SET_CHATLOGS,
      chatlogsJson: chatlogsJson,  
    })
  };
}

