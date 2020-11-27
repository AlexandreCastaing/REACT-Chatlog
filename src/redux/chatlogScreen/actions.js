import chatlogScreenActions from "./constants";
import store from "@redux";
import API from "@lib/API";

export function sendMessage(chatlog, message) {

  return async (dispatch)=>{    

    let json = {}
    json.message = message
    json.idChatlog = chatlog.idChatlog
    json.idUser = "test"

    const messageJson = await API("Message","POST",json);

    dispatch({
        type: chatlogScreenActions.SEND_MESSAGE,
        message: sendMessage(messageJson)
    });
  }
}

export function getMessages(chatlog){
  return async (dispatch)=>{    
    const messagesJson = await API("Messages","GET",{idChatlog: chatlog.idChatlog, idUser: "test"});
    dispatch({
        type: chatlogScreenActions.GET_MESSAGES,
        messages: messagesJson
    });
  }
}
