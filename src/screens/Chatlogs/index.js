import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import { pressChatlog } from "@redux/chatlogs/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Chatlog from '@components/Chatlog';

const Chatlogs = (props) => {
    const { pressChatlog, chatlogs, user, navigation } = props;
    const [displayAdd, setDisplayAdd] = useState(false);

    const _pressChatlog = (item) => {
      pressChatlog(item);
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
        "idUser": "444",
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
        "idChatlog": "5",
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
                  <Chatlog chatlog={item} navigation={navigation} key={item.idChatlog.toString()}/>
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

const mapStateToProps = (state) => ({
  chatlogs: state.chatlogs.chatlogs,
  user: state.user,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      pressChatlog,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Chatlogs);
