import React from "react";
import { StatusBar, Image, Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Chatlogs from "@screens/Chatlogs";
import Chatlog from "@screens/Chatlog";
const StackChatlog = createStackNavigator();

const ChatlogNavigation = (props) => {
    const { user, chatlog } = props; 
    const colorStatus = user.loggedIn ? 'green' : 'red';
    return (
    <StackChatlog.Navigator initialRouteName="Chatlog">
        <StackChatlog.Screen name="Chatlog" //={StackChatlog}  
        component={props => <Chatlog {...props} chatlog={chatlog} navigation={"TEST13579"} />} 
        options={({ navigation }) => ({
            headerTitle: null,
            headerLeft: () => (
            <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={styles.userHeader}
            >
                <Image
                source={{ uri: "https://cdn.onlinewebfonts.com/svg/img_243887.png" }}
                style={styles.logo}
                />
                <Text style={styles.userName}>{user.name}</Text>
                <View style={[styles.userStatus, { 'backgroundColor': colorStatus }]} />
            </TouchableOpacity>
            ),
            headerRight: () => (
            <Text style={styles.title}>CHATLOG</Text>
            ),
            headerStyle: {
            backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        })}
        />
    </StackChatlog.Navigator>
    );
}

export default ChatlogNavigation;
