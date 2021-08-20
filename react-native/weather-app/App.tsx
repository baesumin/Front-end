import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Loading } from './src/Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import { Weather, WeatherProps } from './src/components/Weather';

const API_KEY = 'OPEN_WEATHER_TOKEN';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState<number>(0);
  const [condition, setCondition] = useState<WeatherProps['condition']>('Clear');

  const getWeather = async (latitude: number, longitude: number) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    setIsLoading(false);
    setCondition(weather[0].main);
    setTemp(temp);
  };
  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      getWeather(latitude, longitude);
      setIsLoading(true);
    } catch (error) {
      Alert.alert("Can't find you.", 'So sad');
    }
  };
  useEffect(() => {
    getLocation();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Weather temp={Math.round(temp)} condition={condition} />
  );
}
