import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherScreen = ({ route, navigation }) => {
  // Destructure the parameters passed from the previous 
  var key = "af491cbdf29213904faf5e4ec7c900c3"
  const { city, time } = route.params;
  var type = "";
  if(time == "Today" || time == "") {
    type = "current";
  } else if(time == "Yesterday") {
    type = "historic";
  } else if (time == "Tomorrow") {
    type = "forecast"
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>City: {city}</Text>
      <Text style={styles.text}>Time Frame: {time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#85929e',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});




export default WeatherScreen;
