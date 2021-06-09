import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ButtonText, StyledButton } from "./../components/styles";

const InterestingQuestionScreen = (props) => {
  const [interestingQuestion, setInterestingQuestion] = useState("");
  const questions = [
    {
      id: "1",
      item: "What’s the best piece of advice you’ve ever been given?",
    },
    { id: "2", item: "When you die, what do you want to be remembered for?" },
    { id: "3", item: "What fictional family would you be a member of?" },
    {
      id: "4",
      item: "What would be the most surprising scientific discovery imaginable?",
    },
    {
      id: "5",
      item: "If you had to delete all but 3 apps from your smartphone, which ones would you keep?",
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Ask an interesting question you want other users to answer!
      </Text>
      <Text style={styles.subheading}>
        Challenge other’s minds and show a little more of your personality
      </Text>
      <TextInput
        style={styles.interestingQuestion}
        placeholder={"Ask a question"}
        name={"interestingQuestion"}
        id={"interestingQuestion"}
        value={interestingQuestion}
        onChangeText={(text) => setInterestingQuestion(text)}
      />
      <Text style={styles.subheading}>This will be shown on your profile.</Text>
      <Text style={styles.subheading}>Suggestions:</Text>
      {questions.map((question) => {
        return (
          <TouchableOpacity key={question.id} style={styles.questionButton}>
            <Text>{question.item} </Text>
          </TouchableOpacity>
        );
      })}
      <StyledButton
        onPress={() => {
          props.navigation.navigate({ routeName: "InterestingQuestion" });
        }}
      >
        <ButtonText>Next</ButtonText>
      </StyledButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#007070",
    padding: 20,
  },
  interestingQuestion: {
    width: "80%",
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
  questionButton: {
    padding: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    height: 60,
  },
});

export default InterestingQuestionScreen;
