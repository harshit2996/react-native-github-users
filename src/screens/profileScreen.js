import { View, SafeAreaView } from 'react-native';
import React, { useCallback, useState } from 'react';
import ProfileCard from '../components/profileCard';
import { styles } from '../styles/styles';
import { useFocusEffect } from '@react-navigation/native';

export default function ProfileScreen ({navigation, route}) {
  const [profile_url, setProfileUrl] = useState();
  useFocusEffect(
    useCallback(()=>{
      console.log('ROUTE.PARAMS.PROFILE_URL: ' + route.params.profile_url);
      setProfileUrl(route.params.profile_url);
      return () => {
        setProfileUrl(undefined);
      };
    },[route])
  );
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.view}>
        {profile_url && <ProfileCard url={profile_url} />}
      </View>
    </SafeAreaView>
  );
}
