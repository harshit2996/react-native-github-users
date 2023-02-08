import { View, Text, SafeAreaView, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GithubLogo from '../assets/images/github-mark.svg';



export default function HomeScreen() {
  const styles = StyleSheet.create({
    view: {
      flex:1,
      justifyContent:'center',
      alignContent:'center',
      padding:20,
    },
  });
  const [username, setUsername] = useState('');
  const [userFound, setUserFound] = useState(false);
  const [userSearchExecuted, setUserSearchExecuted] = useState(false);
  const searchUser = () => {
    axios.get('https://api.github.com/users/' + username)
    .then((res) => {
      if (res.data) {
        console.log(res.data);
        setUserFound(true);
      } else {
        setUserFound(false);
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
      setUserFound(false);
    }
  },[username]);

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
      {userSearchExecuted && !userFound && (
        <View style={[styles.view, {justifyContent:'flex-start'}]}>
          <Text>User Not Found</Text>
        </View>
      )}

    </SafeAreaView>
  );
}
