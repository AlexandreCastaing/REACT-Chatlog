import chatlogsActions from "./constants";

const initialState = {
  chatlogs: [
    {
      id: 1,
      chatlogs: 5,
      title: "Parfait"
    }
  ],
};

export default function chatlogsReducer(state = initialState, action) {
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
