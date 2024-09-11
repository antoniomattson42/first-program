import { Image, Text, View, StyleSheet, Button, Alert } from "react-native";
import React, { useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import { Styles } from "@/constants/Styles";
import TextFields from "@/components/TextField";
import WeatherScreen from "./WeatherScreen";

const Index = ({ navigation }) => {
  const [city, setCity] = useState<string>('');
  const [time, setTime] = useState<string>('Today');

  const handleNavigate = () => {
    navigation.navigate('WeatherScreen', { city, time});
  };

  return (
    <View
      style={{
        //Whole Screen
        flexDirection: "column",
        flex: 1
      }}>
      <View style={{
        //Header
        flex: .1,
        flexDirection: "row",
        backgroundColor: "#85929e",
      }}>
        <View style={{
          //Header Image
          marginTop: 20,
          marginLeft: 20,
          margin: 10,
          flex: .15,
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Image
            source={require('@/assets/images/weatherIcon.png')}
            style={Styles.tinyLogo}
          />
        </View>
        <View style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
          marginLeft: 10,
        }}>
          <ThemedText type="title">Weather App</ThemedText>
        </View>
      </View>

      <View
        //Text Boxes
        style={{
          flexDirection: "column",
          backgroundColor: "#abb2b9",
          flex: 1,
        }}
      >
        <View style={{
          //Box for the text
          flex: .15,
          justifyContent: "flex-end",
          alignItems: "center",
          marginLeft: 20,
          marginRight: 10,
        }}>
          <ThemedText type="subtitle">What type of weather data would you like to search?</ThemedText>
        </View>
        <View style={{
          //Buttons
          flex: .15,
          justifyContent: "flex-end",
          alignContent: "center",
          marginLeft: 10,
          marginRight: 10,
          flexDirection: "row"
        }}>
          <View style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
            margin: 10
          }}>
            <Button
              title="Today"
              onPress={() => {
                setTime("Today");
              }}
            />
          </View>
          {/* <View style={{
            flex: .33,
            justifyContent: "center",
            alignContent: "center",
            margin: 10
          }}>
            <Button
              title="Tomorrow"
              onPress={() => {
                setTime("Tomorrow");
              }}
            />
          </View> */}
          {/* <View style={{
            flex: .33,
            justifyContent: "center",
            alignContent: "center",
            margin: 10
          }}>
            <Button
              title="Yesterday"
              onPress={() => {
                setTime("Yesterday");
              }}
            />
          </View> */}
        </View>

        <View style={{
          //Box for the text
          flex: .15,
          justifyContent: "center",
          alignItems: "center",
        }}>
          <ThemedText type="subtitle">What city would you like to check?</ThemedText>
        </View>

        <View style={{
          //Box for the text
          flex: .15,
          justifyContent: "flex-start",
          marginTop: 30,
          alignItems: "center",
        }}>
          {/* Pass state and handler to TextFields */}
          <TextFields value={city} onChangeText={setCity} />
        </View>
        <View style={{
          //submit button
          flex: .2,
          justifyContent: "center",
          alignContent: "center",
          margin: 40,
        }}>
          <Button
              title="Continue"
              onPress={handleNavigate}
            />
        </View>
      </View>
    </View>
  );
};
export default Index;
