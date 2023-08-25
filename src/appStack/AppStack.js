import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieDetailPage from '../screens/MovieDetailPage';
import SearchMovie from '../screens/SearchMovie';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SearchMovie" component={SearchMovie} />
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
