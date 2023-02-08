import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

const FollowersScreen = ({route}) => {
  console.log(route.params.url);
  return (
    <SafeAreaView>
      <View>
        <Text>Followers</Text>
      </View>
    </SafeAreaView>
  );
};

export default FollowersScreen;
