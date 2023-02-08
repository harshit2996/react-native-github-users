import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import ProfileCard from '../components/profileCard';
import { styles } from '../styles/styles';

export default function ProfileScreen ({navigation, route}) {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.view}>
        <ProfileCard url={route.params.profile_url} />
      </View>
    </SafeAreaView>
  );
}
