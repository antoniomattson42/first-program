import { Image, Text, View, StyleSheet, Platform } from "react-native";
import { ThemedText } from '@/components/ThemedText';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Styles } from "@/constants/Styles";
import { Stack } from "expo-router";
// api key AIzaSyAlqMcpTEHzNA0ype-TRwH3pmI9_cieJ34
// weather api key: af491cbdf29213904faf5e4ec7c900c3
export default function index() {
  return (
    <View
      style={{
        //Whole Screen
        flexDirection: "column",
        flex: 1
      }}>
      <View style={{
        //Header
        flex: .08,
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
        }
        }>
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
        <View>
          <Text>Hello!</Text>
        </View>
      </View>
    </View>
  );
}
