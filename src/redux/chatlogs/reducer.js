import chatlogsActions from "./constants";

const initialState = {
  chatlogsJson: [],
};

export default function chatlogsReducer(state = initialState, action) {
  switch (action.type) {
    case chatlogsActions.SET_CHATLOGS:
      return {
        ...state,
        chatlogsJson: action.chatlogsJson,
      };
    default:
      return state;
  }
}
