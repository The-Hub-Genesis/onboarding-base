import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { ButtonText, StyledButton } from "./../components/styles";

const InterestsScreen = (props) => {
  const [interest, setInterest] = useState("");
  const suggestions = [
    { id: "1", name: "Fitness" },
    { id: "2", name: "Fashion Design" },
    { id: "3", name: "Arts and Design" },
    { id: "4", name: "Cooking" },
    { id: "5", name: "Basketball" },
    { id: "6", name: "Korean Drama" },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>What are your interests?</Text>
      <Text style={styles.subheading}>
        Let your community know what your hobbies or interests are!{" "}
      </Text>
      <TextInput
        style={styles.interestField}
        placeholder={"Type an interest"}
        name={"interest"}
        id={"interest"}
        value={interest}
        onChangeText={(text) => setInterest(text)}
      />
      <Text style={styles.subheading}>
        This will be shown at the top of your profile
      </Text>
      <Text style={styles.subheading}>Suggestions:</Text>
      <View style={styles.suggestionsContainer}>
        {suggestions.map((suggestion) => {
          return (
            <TouchableOpacity style={styles.interestButton} key={suggestion.id}>
              <Text>{suggestion.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity style={styles.more}>
        <Text>More Suggestions</Text>
      </TouchableOpacity>
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

InterestsScreen.navigationOptions = {
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
    padding: 20,
  },
  interestField: {
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
  interestButton: {
    padding: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    height: 60,
  },
  suggestionsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  more: {
    padding: 15,
    backgroundColor: "#E5E5E5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    height: 60,
  },
});

export default InterestsScreen;
