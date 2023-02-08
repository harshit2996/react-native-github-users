/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/homeScreen';
import ProfileScreen from './src/screens/profileScreen';
import FollowersScreen from './src/screens/followersScreen';
import FollowingScreen from './src/screens/followingScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Followers" component={FollowersScreen} />
        <Stack.Screen name="Following" component={FollowingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
