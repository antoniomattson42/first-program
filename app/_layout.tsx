import { Stack } from "expo-router";
import React from 'react';
import { Tabs } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';





export default function RootLayout() {
  return (
    <Stack
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen 
        
        name="index" 
        options={{ title: 'Weather App'}}
      />
    </Stack>
  );
}
