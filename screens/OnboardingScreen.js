import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { Colors } from "./../components/styles";
const { primary, secondary, inactive, text } = Colors;

const Dots = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected
    ? "rgba(0, 112, 112, 1)"
    : "rgba(0, 112, 112, 0.37)";

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({ ...props }) => (
  <TouchableOpacity style={styles.button} {...props}>
    <Text style={styles.buttonCaption}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity style={styles.button} {...props}>
    <Text style={styles.buttonCaption}>Next</Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity style={styles.button} {...props}>
    <Text style={styles.buttonCaption}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.navigate("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
          {
            backgroundColor: "rgba(1, 73, 73, 0.17)",
            image: (
              <Image
                source={require("../assets/img/onboarding-1.png")}
                style={styles.imageOneOnboarding}
              />
            ),
            title: <Text style={styles.titleStyles}>Profile Q&A</Text>,
            subtitle: (
              <Text style={styles.subtitleStyles}>
                Take a look at other users’ profile prompts and share your
                thoughts by clicking the answer button! Get to know the person
                more by tapping their profile card!
              </Text>
            ),
          },
          {
            backgroundColor: "rgba(0, 112, 112, 0)",
            image: (
              <Image
                source={require("../assets/img/onboarding-2.png")}
                style={styles.imageTwoOnboarding}
              />
            ),
            title: <Text style={styles.titleStyles}>Speed Chat</Text>,
            subtitle: (
              <Text style={styles.subtitleStyles}>
                Have 4-minute quick timed chats with the people in your
                community! Don’t worry, you can choose to turn this on/off any
                time!
              </Text>
            ),
          },
          {
            backgroundColor: "rgba(0, 112, 112, 0)",
            image: (
              <Image
                source={require("../assets/img/onboarding-3.png")}
                style={styles.imageOneOnboarding}
              />
            ),
            title: <Text style={styles.titleStyles}>Community Forums</Text>,
            subtitle: (
              <Text style={styles.subtitleStyles}>
                Have 4-minute quick timed chats with the people in your
                community! Don’t worry, you can choose to turn this on/off any
                time!
              </Text>
            ),
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 20,
    backgroundColor: "#007070",
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
  },
  buttonCaption: {
    fontSize: 16,
    color: "#fff",
  },
  titleStyles: {
    fontSize: 37,
    width: 207,
    left: -50,
    top: 120,
    color: "#007070",
  },
  subtitleStyles: {
    fontSize: 17,
    lineHeight: 20,
    color: "#007070",
    width: "85%",
    height: 129,
    left: 20,
    top: 140,
    justifyContent: "center",
    alignItems: "center",
  },
  imageOneOnboarding: {
    position: "absolute",
    width: 300,
    height: 598,
    left: -10,
    top: -380,
  },
  imageTwoOnboarding: {
    position: "absolute",
    width: 331,
    height: 598,
    left: 120,
    top: -365,
  },
  imageThreeOnboarding: {
    position: "absolute",
    width: 330.36,
    height: 598.83,
    left: -75,
    top: -33,
  },
});
