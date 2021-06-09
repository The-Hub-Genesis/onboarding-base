import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import {
  PageLogo,
  StyledButton,
  ButtonText,
  SecondaryButton,
  SecondaryButtonText,
} from "./../components/styles";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <PageLogo
        resizeMode="cover"
        source={require("../assets/img/landing.png")}
      />
      <Text style={styles.subtitle}>Welcome</Text>
      <Text style={styles.caption}>
        Your profile is all set! Before you go and meet new people, we’ll show
        you around first.
      </Text>
      <View style={styles.buttonContainer}>
        <StyledButton
          onPress={() => {
            props.navigation.navigate({ routeName: "Signup" });
          }}
        >
          <ButtonText>Continue</ButtonText>
        </StyledButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "rgba(0, 50, 50, 1)",
    padding: 40,
  },
  buttonContainer: {
    bottom: -180,
    width: "100%",
  },
  landing: {
    width: 80,
    height: 80,
  },
  subtitle: {
    fontSize: 34,
    color: "#fff",
    width: "65%",
    paddingTop: 10,
    paddingBottom: 10,
  },
  caption: {
    fontSize: 15,
    color: "#fff",
  },
});

export default WelcomeScreen;
