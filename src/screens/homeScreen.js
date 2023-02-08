import { View, Text, SafeAreaView} from 'react-native';
import { TextInput } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GithubLogo from '../assets/images/github-mark.svg';
import {styles} from '../styles/styles';


export default function HomeScreen ({navigation, route}) {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState();
  const [userSearchExecuted, setUserSearchExecuted] = useState(false);
  const searchUser = () => {
    axios.get('users/' + username)
    .then((res) => {
      if (res.data) {
        console.log(res.data);
        setUser(res.data);
      } else {
        setUser();
      }
      setUserSearchExecuted(true);
    })
    .catch(err=>{
      setUserSearchExecuted(true);
      console.log(err.response);
    });
  };

  useEffect(() => {
    if (username) {
      setUserSearchExecuted(false);
      setUser();
    }
  },[username]);

  useEffect(() => {
    if (user) {
      navigation.navigate('Profile', {
        profile_url: user.url,
      });
    }
  },[user, navigation]);

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.view}>
        <View>
          <GithubLogo width={100} height={100} style={{alignSelf:'center', margin: 20}} />
        </View>
        <TextInput mode="outlined" placeholder="Enter username..." value={username} onChangeText={(text)=> {
          setUsername(text);
        }}
        onSubmitEditing={()=>{
          searchUser();
        }}
        right={<TextInput.Icon icon="search" onPress={() => {
          searchUser();
        }}/>}
        />
      </View>
      {userSearchExecuted && !user && (
        <View style={[styles.view, {justifyContent:'flex-start'}]}>
          <Text>User Not Found</Text>
        </View>
      )}

    </SafeAreaView>
  );
}
