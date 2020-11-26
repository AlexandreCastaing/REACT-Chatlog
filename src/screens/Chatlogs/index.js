import React, { useEffect} from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import { pressChatlog, loadChatlogs } from "@redux/chatlogs/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Chatlog from '@components/Chatlog';

 const Chatlogs =  (props) => {
    let { pressChatlog, loadChatlogs, chatlogsJson, user, navigation } = props;
  
  //if(loadChatlogs!=undefined)

  let chatlogs= chatlogsJson;
  
  useEffect(()=>{
    loadChatlogs();
  }, [chatlogs]/*[]/*chatlogs*/);


    if (!user.loggedIn) {
      return (
        <View style={styles.wrapper}>
          <Text>Vous devez être connecté pour utiliser cette fonctionnalité.</Text>
        </View>
      );
    }

    let viewReturn = null
    if(chatlogs && chatlogs.length > 0)
         viewReturn = (
            <View style={styles.wrapper}>
              <ScrollView horizontal={false} style={styles.chatlogs}>
                {chatlogs.map((chatlog) => (
                    <View>
                        <Chatlog chatlog={chatlog} navigation={navigation} key={chatlog.idChatlog}/>
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
                      <Text>No Chatlogs.</Text>
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
  chatlogsJson: state.chatlogs.chatlogsJson,
  user: state.user,
  pressChatlog: pressChatlog, // << test todo remove
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      pressChatlog,
      loadChatlogs,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Chatlogs);
