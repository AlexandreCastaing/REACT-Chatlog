import chatlogsActions from "./constants";
import store from "@redux";

export function pressChatlog(item) {
  const currentStore = store.getState();

  //const { chatlogs } = currentStore.chatlogs;
  //console.log(item)
  //this.props.navigation.navigate("Chatlogs")  

  return async function (dispatch) {
    dispatch(openChatlog(item));
  }
}

export function openChatlog(chatlog) {
  // On passe les infos au reducer, via le dispatcher.
  return async function (dispatch) {
    dispatch({
      type: chatlogsActions.OPEN_CHATLOG,
      chatlog: chatlog,
    })
  };
}
