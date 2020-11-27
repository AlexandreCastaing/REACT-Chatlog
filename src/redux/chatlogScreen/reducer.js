import chatlogScreenActions from "./constants";

const initialState = {
  messagesJson: [],
};

export default function chatlogsReducer(state = initialState, action) {
  switch (action.type) {
    case chatlogScreenActions.SEND_MESSAGE:
      return {
        ...state,
        messages: action.messagesJson,
      };
    case chatlogScreenActions.GET_MESSAGES:
      return {
        messages: action.messages,
      };
    default:
      return state;
  }
}
