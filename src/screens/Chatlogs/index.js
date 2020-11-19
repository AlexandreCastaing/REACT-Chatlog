import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { pressChatlog } from "@redux/chatlogs/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStackNavigator } from "@react-navigation/stack";
import Chatlog from '@components/Chatlog';
import ChatlogsNavigation from '@navigation/ChatlogsNavigation';

const Chatlogs = (props) => {
    const { pressChatlog, chatlogs, chatlog, user, navigation } = props;
    const [displayAdd, setDisplayAdd] = useState(false);

    const _pressChatlog = (item) => {

        let props = ( <ChatlogsNavigation {...props} chatlog={item}/> ).props
        let chatlog = props.chatlog;
        
        console.log(chatlog) 
        console.log()
    }
    

    const smileys = [
        {
            id: 1,
            chatlog: 5,
            title: "Parfait",
            label: ":D"
        },
        {
            id: 2,
            chatlog: 3,
            title: "Normal",
            label: ":|"
        },
        {
            id: 3,
            chatlog: 1,
            title: "Mauvais",
            label: ":("
        },
        {
            id: 4,
            chatlog: 4,
            title: "Bon",
            label: ":)"
        },
        {
            id: 5,
            chatlog: 2,
            title: "Passable",
            label: ":/"
        },
    ];

    const chatlogJson = [
      {
        "idChatlog": "4",
        "idUser": "1000",
        "isVisible": "false",
        "name": "test",
        "description": "chatlog",
        "color": "#5599dd",
        "effect": "",
        "font": "",
        "icon": "",
        "colorMessages": "#dddddd",
        "effectMessages": "",
        "fontMessages": "",
        "hasPassword": "false"
      },
      {
        "idChatlog": "1",
        "idUser": "123456",
        "isVisible": "false",
        "name": "test",
        "description": "chatlog",
        "color": "#dddddd",
        "effect": "",
        "font": "",
        "icon": "",
        "colorMessages": "#dddddd",
        "effectMessages": "",
        "fontMessages": "",
        "hasPassword": "false"
      },
      {
        "idChatlog": "5",
        "idUser": "123456",
        "isVisible": "false",
        "name": "CHATLOG JEAN PIEERRE",
        "description": "ety415",
        "color": "#880000",
        "effect": "",
        "font": "",
        "icon": "",
        "colorMessages": "#dddddd",
        "effectMessages": "",
        "fontMessages": "",
        "hasPassword": "false"
      },
      {
        "idChatlog": "44",
        "idUser": "123456",
        "isVisible": "false",
        "name": "Jacklapin",
        "description": "descriptioiorhi",
        "color": "#557599",
        "effect": "",
        "font": "",
        "icon": "",
        "colorMessages": "#dddddd",
        "effectMessages": "",
        "fontMessages": "",
        "hasPassword": "false"
      },
      {
        "idChatlog": "94",
        "idUser": "1000",
        "isVisible": "false",
        "name": "TEESTTEST",
        "description": "BONJOUR",
        "color": "#ff88ff",
        "effect": "",
        "font": "",
        "icon": "",
        "colorMessages": "#dddddd",
        "effectMessages": "",
        "fontMessages": "",
        "hasPassword": "false"
      }
    ];

    if (!user.loggedIn) {
      return (
        <View style={styles.wrapper}>
          <Text>Vous devez être connecté pour utiliser cette fonctionnalité.</Text>
        </View>
      );
    }

    return (
        <View style={styles.wrapper}>
          <ScrollView
            horizontal={false}
            
            style={styles.chatlogs}
          >
            {chatlogJson.map((item) => (
                <View>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => _pressChatlog(item)}
                  >
                    <Chatlog
                        onClick={() => _pressChatlog(item)}
                        chatlog={item}
                        key={item.idChatlog.toString()}
                    />
                  </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
        
      </View>
    );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  chatlogs: {
    textAlign: "center",
    width: "100%"
  },
  smileys: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonWrapper: {
    position: "absolute",
    bottom: 50,
    right: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonOverlay: {
    backgroundColor: "white",
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginVertical: 10,
  }
});


const mapStateToProps = (state) => { // send props
  return ({
    chatlog: state.chatlog,
    chatlogs: state.chatlogs.chatlogs,
    user: state.user,
  })
};

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators(
    {
      pressChatlog,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatlogs);
