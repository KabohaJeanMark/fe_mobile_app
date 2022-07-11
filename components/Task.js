import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemsLeft}>
        <TouchableOpacity style={styles.itemIcon}></TouchableOpacity>
      </View>
      <Text style={styles.itemText}>{props.text}</Text>
      <View style={styles.checkIcon}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemsLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemIcon: {
    width: 24,
    height: 24,
    backgroundColor: "cyan",
    opacity: 0.4,
    borderRadius: 6,
  },
  itemText: {
    maxWidth: "80%",
  },
  checkIcon: {
    width: 12,
    height: 12,
    borderColor: "cyan",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
