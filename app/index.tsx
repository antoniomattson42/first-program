import { Image, Text, View, StyleSheet, Button, Alert } from "react-native";
import React, { useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import { Styles } from "@/constants/Styles";
import TextFields from "@/components/TextField"; // Import TextFields

export default function Index() {
  const [city, setCity] = useState<string>('');
  const [time, setTime] = useState('');

  //Handlers for the butto



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
          backgroundColor: "#95a5a6",
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
          <ThemedText type="defaultSemiBold">What type of weather data would you like to search?</ThemedText>
        </View>
        <View style={{
          //Buttons
          flex: .15,
          justifyContent: "flex-end",
          alignContent: "center",
          marginLeft: 20,
          marginRight: 10,
          flexDirection: "row"
        }}>
          <View style={{
            flex: .33,
            justifyContent: "center",
            alignContent: "center",
            margin: 10
          }}>
            <Button
              title="Today"
              onPress={() => {
                setTime("today");
                Alert.alert("Selected today");
              }}
            />
          </View>
          <View style={{
            flex: .33,
            justifyContent: "center",
            alignContent: "center",
            margin: 10
          }}>
            <Button
              title="Next 7 Days"
              onPress={() => {
                setTime("future");
                Alert.alert("Selected next 7 days");
              }}
            />
          </View>
          <View style={{
            flex: .33,
            justifyContent: "center",
            alignContent: "center",
            margin: 10
          }}>
            <Button
              title="Past 7 Days"
              onPress={() => {
                setTime("past");
                Alert.alert("Selected past 7 days");
              }}
            />
          </View>
        </View>

        <View style={{
          //Box for the text
          flex: .15,
          justifyContent: "center",
          alignItems: "center",
        }}>
          <ThemedText type="defaultSemiBold">What city would you like to check?</ThemedText>
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
          marginLeft: 20,
          marginRight: 10,
        }}>
          <Button
              title="Continue"
              onPress={() => {
                setTime("future");
                Alert.alert("Selected next 7 days");
              }}
            />
        </View>
      </View>
    </View>
  );
}
