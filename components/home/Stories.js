import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import USERS from "../../data/users";

const trancuate = (text) => {
  if (text.length < 8) return text;

  return text.slice(0, 8) + "...";
};

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS?.map((story, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text style={{ color: "white" }}>
              {trancuate(story.user.toLowerCase())}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 10,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
});

export default Stories;
