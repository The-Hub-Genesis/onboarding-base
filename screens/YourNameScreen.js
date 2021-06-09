import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import FormContainer from "../components/FormContainer";
import { ButtonText, StyledButton } from "./../components/styles";

const YourNameScreen = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickname, setNickname] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.setup}>Let's set up your profile!</Text>
      </View>
      <View style={styles.headerTextContainer}>
        <Text style={styles.heading}> What's your name? </Text>
        <Text style={styles.subheading}>
          You'll be able to change this later
        </Text>
        <TextInput
          placeholder={"First Name"}
          name={"firstName"}
          id={"firstName"}
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder={"Last Name"}
          name={"lastName"}
          id={"lastName"}
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder={"Nickname"}
          name={"nickname"}
          id={"nickname"}
          value={nickname}
          onChangeText={(text) => setNickname(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.main}>
        <Text style={styles.subheading}>This will be shown on your profile</Text>
      </View>

      {/* change back routeName to SettingProfPhoto */}
      <StyledButton
        onPress={() => {
          props.navigation.navigate({ routeName: "SettingProfPhoto" });
        }}
      >
        <ButtonText>Next</ButtonText>
      </StyledButton>
    </View>
  );
};

YourNameScreen.navigationOptions = {
  headerTitle: "",
  headerStyle: {
    backgroundColor: "#007070",
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007070",
    padding: 10,
  },
  input: {
    width: "90%",
    height: 40,
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 8.6,
    fontSize: 16,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 25,
    lineHeight: 29,
    color: "#fff",
  },
  subheading: {
    fontSize: 13,
    lineHeight: 15,
    color: "#fff",
  },
  setup: {
    fontSize: 25,
    lineHeight: 29,
    color: "#fff",
    paddingBottom: 20,
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 10,
    alignItems: "center",
    width: "100%",
  },
});

export default YourNameScreen;
