import React from 'react';
import { Tabs } from 'expo-router';
import { createStackNavigator } from "@react-navigation/stack";
import Index from './Index';
import WeatherScreen from './WeatherScreen';


const Stack = createStackNavigator();


export default function RootLayout() {
  return (
      <Stack.Navigator initialRouteName='Index'>
        <Stack.Screen name="Index" component={Index} options={{headerShown: false}} />
        <Stack.Screen name="WeatherScreen" component={WeatherScreen} />
      </Stack.Navigator>
  );
}
