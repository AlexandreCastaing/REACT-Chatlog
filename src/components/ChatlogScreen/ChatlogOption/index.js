import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ChatlogOption = (props) => {
 
    const paramMenu = () => {
    }

    return (
        <TouchableOpacity style={styles.button} onPress={paramMenu}>
            <Icon name="cog" size={15} color="white"/>  
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  button:{
    height:35,
    elevation: 5,
    backgroundColor: "#841584",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
})

export default ChatlogOption;
