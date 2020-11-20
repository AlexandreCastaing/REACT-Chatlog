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

export function loadChatlogs(){
  return async (dispatch)=>{
    const chatlogsJson = await API("Chatlogs","GET",{});
    dispatch(setChatlogs(chatlogsJson));
  }
}

export function setChatlogs(chatlogs) {
  return async function (dispatch) {
    dispatch({
      type: chatlogsActions.SET_CHATLOGS,
      chatlogs: chatlogs,  
    })
  };
}
