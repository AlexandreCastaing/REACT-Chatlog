import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { signIn, signOut } from "@redux/user/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Profile = (props) => {
  const { signIn, signOut, user } = props;

  const _toggleStatus = () => {
    if (!user.loggedIn) {
      signIn();
    } else {
      signOut();
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title={ user.loggedIn ? "Se déconnecter" : "Se connecter" } onPress={_toggleStatus} color="#841584"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 200,
    borderRadius: 10,
  }
});

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      signIn,
      signOut,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
