import chatlogActions from "./constants";

const initialState = {
  chatlogCreate: 
  { 
    inputNameChatlog: "", //New Chatlog
    inputHasPasswordChatlog: "", //false
    inputColorChatlog: "", //#292929
    inputDescriptionChatlog: "",
    inputPasswordChatlog: ""
  }
};

export default function chatlogReducer(state = initialState, action) {

  switch (action.type) {
    case chatlogActions.ACTU_CHATLOG:
      return {
        ...state,
        chatlogCreate: action.chatlogCreate,
      };
    case chatlogActions.SET_CHATLOG:
      return {
        chatlogCreate: action.chatlogCreate,
      };
    default:
      return state;
  }
}
