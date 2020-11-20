import chatlogsActions from "./constants";

const initialState = {
  chatlogsJson: [],
};

export default function chatlogsReducer(state = initialState, action) {
  /*state = {chatlogsJson: [], }; // remove*/ 
  switch (action.type) {
    case chatlogsActions.SET_CHATLOGS:
      return {
        ...state,
        chatlogs: action.chatlogs,
      };
    default:
      return state;
  }
}
