import React from "react";
import {
  View,
  Button,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

const Groups = () => {
  const groups = [
    {
      id: "1",
      name: "Student Org",
      member: "123",
      image: "../assets/favicon.png",
    },
    {
      id: "2",
      name: "Avengers Fans",
      member: "51",
      image: "../assets/favicon.png",
    },
    {
      id: "3",
      name: "Slytherin",
      member: "32",
      image: "../assets/favicon.png",
    },
    {
      id: "4",
      name: "Actors Group",
      member: "69",
      image: "../assets/favicon.png",
    },
    {
      id: "5",
      name: "Debate Club",
      member: "21",
      image: "../assets/favicon.png",
    },
  ];
  return (
    <>
      {groups.map((group) => {
        return (
          <View style={styles.group}>
            <View>
              <Image style={styles.image} source={group.image} />
            </View>

            <View>
              <Text style={styles.groupName}>{group.name}</Text>
              <Text style={styles.members}>{group.member} Members</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.join}>
                <Text style={styles.joinText}>Join</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  group: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 80,
    marginLeft: 10,
    marginTop: 15,
    marginRight: 0,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  image: {
    width: 58,
    height: 58,
    backgroundColor: "#c4c4c4",
    borderRadius: 58,
  },
  groupName: {
    fontSize: 15,
    lineHeight: 18,
    color: "#2d2d2d",
  },
  members: {
    fontSize: 10,
    color: "#2d2d2d",
  },
  join: {
    width: 80,
    height: 69,
    backgroundColor: "#008C8C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  joinText: {
    color: "#fff",
  },
});

export default Groups;
