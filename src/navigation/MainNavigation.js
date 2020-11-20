import React from "react";
import { StatusBar, Image, Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Chatlogs from "@screens/Chatlogs";
import ChatlogScreen from "@screens/ChatlogScreen";
import ChatlogCreate from "@screens/ChatlogCreate";
import Profile from "@screens/Profile";

const Stack = createStackNavigator();
const StackProfile = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabsNavigation = () => (
  <Tabs.Navigator
    initialRouteName="ChatlogsList"
    tabBarOptions={{
      activeBackgroundColor: "#fff",
      inactiveBackgroundColor: "#ddd",
      showLabel: true,
      showIcon: true,
      activeTintColor: "green",
      inactiveTintColor: "#828282",
    }}
    tabStyle={{
      flexDirection: "row",
    }}
  >
    <Tabs.Screen
      name="ChatlogsList"
      component={Chatlogs}
      listeners={({ navigation }) => ({
        tabPress: () => {
          navigation.navigate("ChatlogsList");
        },
      })}
    />
    <Tabs.Screen
      name="ChatlogScreen"
      component={ChatlogScreen}
      listeners={({ navigation }) => ({
        tabPress: () => {
          navigation.navigate("ChatlogScreen");
        },
      })}
    />
    <Tabs.Screen
      name="ChatlogCreate"
      component={ChatlogCreate}
      listeners={({ navigation }) => ({
        tabPress: () => {
          navigation.navigate("ChatlogCreate");
        },
      })}
    />
  </Tabs.Navigator>
);

const StackNavigation = (props) => {
  const { user } = props;
  const colorStatus = user.loggedIn ? 'green' : 'red';

  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={TabsNavigation}
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
    </Stack.Navigator>
  );
}

const StackProfileNavigation = (props) => {
  const { user } = props;
  const colorStatus = user.loggedIn ? 'green' : 'red';

  return (
    <StackProfile.Navigator initialRouteName="Profile">
      <StackProfile.Screen
        name="Profile"
        component={Profile}
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
    </StackProfile.Navigator>
  );
}

const MainNavigation = (props) => {
  const { user } = props;

  return (
    <NavigationContainer>
      <StatusBar
        hidden={false}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home">
          {props => <StackNavigation {...props} user={user} />}
        </Drawer.Screen>
        <Stack.Screen name="Profile">
          {props => <StackProfileNavigation {...props} user={user} />}
        </Stack.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginRight: 20,
  },
  logo: {
    marginLeft: 20,
    width: 28,
    height: 28,
  },
  userHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    fontWeight: "600",
    marginLeft: 12,
  },
  userStatus: {
    width: 8,
    height: 8,
    borderRadius: 50,
    marginLeft: 4,
    marginTop: -14,
  }
});

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(MainNavigation);
