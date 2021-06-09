import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  PageLogo,
  StyledButton,
  ButtonText,
  SecondaryButton,
  SecondaryButtonText,
} from "./../components/styles";

const LandingScreen = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <PageLogo
        resizeMode="cover"
        source={require("../assets/img/landing.png")}
      />
      <Text style={styles.subtitle}>Expand your network and get connected</Text>
      <Text style={styles.caption}>
        The hardest part about meeting another person is getting the
        conversation started.
      </Text>
      <View style={styles.buttonContainer}>
        <StyledButton
          onPress={() => {
            props.navigation.navigate({ routeName: "Signup" });
          }}
        >
          <ButtonText>Sign-up</ButtonText>
        </StyledButton>
        <SecondaryButton
          onPress={() => {
            props.navigation.navigate({ routeName: "Login" });
          }}
        >
          <SecondaryButtonText>Log-in</SecondaryButtonText>
        </SecondaryButton>
      </View>
    </View>
  );
};

LandingScreen.navigationOptions = {
  headerTitle: "",
  headerStyle: {
    backgroundColor: "rgba(0, 50, 50, 1)",
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
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
export default LandingScreen;
