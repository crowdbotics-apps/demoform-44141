import { Pressable } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView} style={styles.HfqLNTda}>
        <View style={styles.group} />
        <View style={styles.group}>
          
          
        </View>
        
      <View style={styles.gSUFIpxl}><TextInput style={styles.bKDHXgCg} value="Enter Name" clearTextOnFocus={true}></TextInput></View><Pressable><View style={styles.ukPZJCIC}></View></Pressable></ScrollView>
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
  HfqLNTda: {
    backgroundColor: "#fffcfc"
  },
  gSUFIpxl: {
    height: 60,
    width: 250,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    top: 40,
    left: 44
  },
  bKDHXgCg: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 250,
    height: 59
  },
  ukPZJCIC: {
    height: 60,
    width: 140,
    backgroundColor: "#1fcad1",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    top: 134,
    left: 90,
    borderWidth: 2
  }
});
export default WelcomeScreen;