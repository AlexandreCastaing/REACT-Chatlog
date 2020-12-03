import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Date } from 'prismic-reactjs';
import Moment from 'moment'

const Message = (props) => {
  const { timestamp, pseudo, message } = props;

  const d = new Date(timestamp*1);
  const formattedDate = Moment(d).format("lll");

  return ( 
    <View style={styles.message}>
      <Text style={styles.date}> {formattedDate} : </Text>
      <Text style={styles.pseudo}> {pseudo} : </Text>
      <Text style={styles.messageText}> {message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  message: {
    justifyContent: "center",
    flexWrap: "nowrap",
    borderColor:"#525252",
    borderWidth:10,
    width: "100%",
    justifyContent: "center",
    flexWrap: "nowrap",
    padding: 10,
    backgroundColor: "#A8DDFD",
  },
  messageText: {
    fontSize: 15,
    color: "#05f",
    fontWeight: 'bold',
  },
  pseudo: {
    fontSize: 18,
  },
  date: {
    fontSize: 12,
  }
})

export default Message;