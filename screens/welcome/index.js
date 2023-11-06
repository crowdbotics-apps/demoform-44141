import { TextInput } from "react-native";
import React from "react";
import { View, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView} style={styles.HfqLNTda}>
        <View style={styles.group} />
        <View style={styles.group}>
          
          
        </View>
        
      <TextInput style={styles.SkqmOmHL} clearTextOnFocus={true} value="Enter Name"></TextInput></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FC",
    height: "100%"
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  group: {
    alignItems: "center"
  },
  SkqmOmHL: {
    backgroundColor: "#efe8e8",
    borderColor: "#cccccc",
    width: 269,
    height: 47,
    left: 50,
    top: 50,
    position: "absolute",
    transform: [{
      rotate: "0deg"
    }]
  },
  HfqLNTda: {
    backgroundColor: "#fffcfc"
  }
});
export default WelcomeScreen;