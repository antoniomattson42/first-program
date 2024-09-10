import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

const WeatherScreen = ({ route }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { city, time } = route.params;

  const API_KEY = "af491cbdf29213904faf5e4ec7c900c3";
  let type = "";

  if (time === "Today" || time === "") {
    type = "current";
  } else if (time === "Yesterday") {
    type = "historical";  // WeatherStack uses "historical" for past data
  } else if (time === "Tomorrow") {
    type = "forecast";
  } else {
    type = "current";  
  }

  //Current is the only available free data, default to this
  type = "current";

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `http://api.weatherstack.com/${type}?access_key=${API_KEY}&query=${city}`
        );
        const data = await response.json();

        if (response.ok && !data.error) {
          setWeatherData(data);
        } else {
          //bug testing
          setError(data.error?.info || 'Error fetching weather data!!!');
        }
      } catch (err) {
        setError('Error fetching weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city, type]);

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.text}>Error: {error}</Text>}
      {weatherData && weatherData.location && weatherData.current && (
        <>
          <Text style={styles.text}>City: {weatherData.location.name}</Text>
          <Text style={styles.text}>Country: {weatherData.location.country}</Text>
          <Text style={styles.text}>Region: {weatherData.location.region}</Text>
          <Text style={styles.text}>Local Time: {weatherData.location.localtime}</Text>
          <Text style={styles.text}>Temperature: {weatherData.current.temperature}°C</Text>
          <Text style={styles.text}>Feels Like: {weatherData.current.feelslike}°C</Text>
          <Text style={styles.text}>Weather: {weatherData.current.weather_descriptions?.[0]}</Text>
          <Text style={styles.text}>Wind Speed: {weatherData.current.wind_speed} km/h</Text>
          <Text style={styles.text}>Wind Direction: {weatherData.current.wind_dir}</Text>
          <Text style={styles.text}>Pressure: {weatherData.current.pressure} mb</Text>
          <Text style={styles.text}>Precipitation: {weatherData.current.precip} mm</Text>
          <Text style={styles.text}>Humidity: {weatherData.current.humidity}%</Text>
          <Text style={styles.text}>Cloud Cover: {weatherData.current.cloudcover}%</Text>
          <Text style={styles.text}>Visibility: {weatherData.current.visibility} km</Text>
          <Text style={styles.text}>UV Index: {weatherData.current.uv_index}</Text>
          <Text style={styles.text}>Is Day: {weatherData.current.is_day === "yes" ? "Yes" : "No"}</Text>
          <Image
            source={{ uri: weatherData.current.weather_icons?.[0] }}
            style={styles.weatherIcon}
          />
        </>
      )}
      {!loading && !weatherData && !error && (
        <Text style={styles.text}>No data available for the provided city and time frame.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#85929e',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
  weatherIcon: {
    width: 64,
    height: 64,
    marginTop: 16,
  },
});

export default WeatherScreen;
