import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ButtonText, StyledButton } from "./../components/styles";

import Groups from "../components/Groups";

const JoinGroupScreen = (props) => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Join a group to get started!</Text>
        <Text style={styles.subheading}>
          Join at least 1 group to proceed. You can join more or even create
          your own group later.
        </Text>
      </View>

      <TextInput
        style={styles.search}
        placeholder={"Search"}
        name={"search"}
        id={"search"}
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <Groups />
      <TouchableOpacity style={styles.more}>
        <Text style={styles.moreText} onPress={() => {}}>
          Show More Groups
        </Text>
      </TouchableOpacity>
      <View style={styles.nextButton}>
        <TouchableOpacity
          style={styles.nextStyles}
          onPress={() => {
            props.navigation.navigate({ routeName: "Welcome" });
          }}
        >
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

JoinGroupScreen.navigationOptions = {
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
  search: {
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
  more: {
    backgroundColor: "#E5E5E5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 15,
    marginHorizontal: 5,
    height: 28,
    padding: 5,
  },
  headingContainer: {
    alignItems: "flex-start",
    paddingBottom: 10,
  },
  moreText: {
    fontSize: 13,
    lineHeight: 15,
  },
  nextButton: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  nextStyles: {
    height: 44,
    width: 44,
    borderRadius: 44,
    backgroundColor: "#c4c4c4",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default JoinGroupScreen;
