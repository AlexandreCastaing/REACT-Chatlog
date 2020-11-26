import chatlogScreenActions from "./constants";

const initialState = {
  messagesJson: [],
};

export default function chatlogsReducer(state = initialState, action) {
  switch (action.type) {
    case chatlogScreenActions.SET_CHATLOGS:
      return {
        ...state,
        messagesJson: action.messagesJson,
      };
    default:
      return state;
  }
}
