import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppStack from '../appStack/AppStack';
const Routes = () => {
  // const {isLoggedIn} = useSelector(state => state.root.user);
  return (
    <SafeAreaProvider>
      {/* {isLoggedIn ? <AppStack /> : <AuthStack />} */}
      <AppStack />
    </SafeAreaProvider>
  );
};

export default Routes;
