import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import { pressChatlog } from "@redux/chatlogs/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Chatlog from '@components/Chatlog';
import API from '@lib/API';

 const Chatlogs =  (props) => {
    const { pressChatlog, chatlogs, user, navigation } = props;
    const [displayAdd, setDisplayAdd] = useState(false);

    if (!user.loggedIn) {
      return (
        <View style={styles.wrapper}>
          <Text>Vous devez être connecté pour utiliser cette fonctionnalité.</Text>
        </View>
      );
    }

    const dataJson = (async ()=>await API("Chatlogs", "GET", {}))

    console.log(dataJson)
    
    let viewReturn = null
    if(dataJson.lenght > 0)
         viewReturn = (
            <View style={styles.wrapper}>
              <ScrollView horizontal={false} style={styles.chatlogs}>
                {dataJson.map((chatlog) => (
                    <View>
                        <Chatlog chatlog={chatlog} navigation={navigation} key={item.idChatlog.toString()}/>
                    </View>
                ))}
              </ScrollView>
            
            </View>
          )
      else 
        viewReturn = (
            <View style={styles.wrapper}>
              <ScrollView horizontal={false} style={styles.chatlogs}>
                  <View>
                      <Text>No Chatlog.</Text>
                  </View>
              </ScrollView>
            
            </View>
          )
    return viewReturn;
   
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
