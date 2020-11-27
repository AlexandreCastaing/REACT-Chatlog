import chatlogScreenActions from "./constants";

const initialState = {
  messages: [],
};

export default function chatlogsReducer(state = initialState, action) {
  switch (action.type) {
    case chatlogScreenActions.SEND_MESSAGE:
      return {
        ...state,
        messages: action.messages,
      };
    case chatlogScreenActions.GET_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      };
    default:
      return state;
  }
}
