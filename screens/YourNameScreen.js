import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import FormContainer from "../components/FormContainer";
import Input from "../components/Input";
import { ButtonText, StyledButton } from "./../components/styles";

const YourNameScreen = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickname, setNickname] = useState("");
  return (
    <View style={styles.container}>
      <FormContainer title={"What's your name?"}>
        <Text>You'll be able to change this later</Text>
        <Input
          placeholder={"First Name"}
          name={"firstName"}
          id={"firstName"}
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <Input
          placeholder={"Last Name"}
          name={"lastName"}
          id={"lastName"}
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <Input
          placeholder={"Nickname"}
          name={"nickname"}
          id={"nickname"}
          value={nickname}
          onChangeText={(text) => setNickname(text)}
        />
        {/* change back routeName to SettingProfPhoto */}
        <StyledButton
          onPress={() => {
            props.navigation.navigate({ routeName: "SettingProfPhoto" });
          }}
        >
          <ButtonText>Next</ButtonText>
        </StyledButton>
      </FormContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default YourNameScreen;
