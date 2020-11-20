import chatlogsActions from "./constants";
import store from "@redux";

export function pressChatlog(item) {
  const currentStore = store.getState();
  const { chatlogs } = currentStore.chatlogs;

  const newChatlogs = [
    ...chatlogs,
    item
  ];

  return async function (dispatch) {
    dispatch(setChatlogs(newChatlogs));
  }
}

export function setChatlogs(chatlogs) {
  // On passe les infos au reducer, via le dispatcher.
  return async function (dispatch) {
    dispatch({
      type: chatlogsActions.SET_CHATLOGS,
      chatlogs: chatlogs,
    })
  };
}
