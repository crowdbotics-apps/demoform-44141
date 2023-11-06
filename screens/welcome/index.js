import { Text } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView} style={styles.HfqLNTda}>
        <View style={styles.group} />
        <View style={styles.group}>
          
          
        </View>
        
      <View style={styles.gSUFIpxl}><TextInput style={styles.bKDHXgCg} value="Enter Name" clearTextOnFocus={true}></TextInput></View><View style={styles.NROyLouJ}><Text style={styles.pqdNoPOo}>{"Submit"}</Text></View></ScrollView>
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
  NROyLouJ: {
    height: 60,
    width: 140,
    backgroundColor: "#32b4bf",
    borderRadius: 5,
    color: "#777777",
    position: "absolute",
    top: 137,
    left: 87,
    borderWidth: 2
  },
  pqdNoPOo: {
    width: 136,
    height: 57,
    lineHeight: 52,
    fontSize: 28,
    borderRadius: 0,
    textAlign: "center",
    left: 10,
    top: 10,
    fontFamily: "Roboto"
  }
});
export default WelcomeScreen;