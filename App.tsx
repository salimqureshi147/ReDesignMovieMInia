import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/Routes/Routes';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/shared/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
