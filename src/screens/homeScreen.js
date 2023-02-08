import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { Link } from '@react-navigation/native';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View>
        <Text>Home Screen</Text>
        <Link to={{
          screen: 'Profile',
        }}>
          Profile
        </Link>
        <Link to={{
          screen: 'Followers',
        }}>
          Followers
        </Link>
        <Link to={{
          screen: 'Following',
        }}>
          Following
        </Link>
      </View>
    </SafeAreaView>
  );
}
