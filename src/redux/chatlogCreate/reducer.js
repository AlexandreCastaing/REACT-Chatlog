import chatlogActions from "./constants";

const initialState = {
  chatlogCreate: 
  {
    isLoaded: true,
  }
};

export default function chatlogReducer(state = initialState, action) {

  if(!state.chatlogCreate.isLoaded){
    return {
      chatlogCreate: initialState.chatlogCreate,
    };
  }
    
  switch (action.type) {
    case chatlogActions.ACTU_CHATLOG:
      return {
        ...state,
        chatlogCreate: action.chatlogCreate,
      };
    default:
      return state;
  }
}
