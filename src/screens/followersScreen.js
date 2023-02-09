import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { styles } from '../styles/styles';
import { FollowList } from '../components/followList';

const FollowersScreen = ({navigation, route}) => {
  console.log(route.params.url);
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={[styles.view, {padding:0}]}>
        <FollowList navigation={navigation} route={route}/>
      </View>
    </SafeAreaView>
  );
};

export default FollowersScreen;
