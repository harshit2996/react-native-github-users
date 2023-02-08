import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

export default function FollowingScreen ({route}) {
  console.log(route.params.url);
  return (
    <SafeAreaView>
      <View>
        <Text>Following</Text>
      </View>
    </SafeAreaView>
  );
}
