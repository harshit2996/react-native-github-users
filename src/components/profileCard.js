import React, { useEffect, useState } from 'react';
import { Card, Text } from 'react-native-paper';
import axios from 'axios';
import { View } from 'react-native';
import { Link } from '@react-navigation/native';

const ProfileCard = ({url}) => {
  const [profileData, setProfileData] = useState();
  const loadUserProfile = () => {
    axios.get(url)
    .then(res => {
      console.log(res.data);
      setProfileData(res.data);
    })
    .catch(err => {
      console.log(err.response);
    });
  };

  useEffect(() => {
    loadUserProfile();
  },[]);

  return (
    profileData && (
      <View>
        <Card style={{width: 'auto'}}>
            <Card.Cover source={{uri: profileData.avatar_url}} resizeMode="contain" resizeMethod="resize" />
          <Card.Content>
            <Card.Title
              title={profileData.name}
              subtitle={profileData.login}
              titleStyle={{textAlign:'center'}}
              subtitleStyle={{textAlign:'center'}}
              titleVariant="titleLarge"
              subtitleVariant="bodyMedium"
            />
            <Text style={{textAlign: 'center'}}>{profileData.bio}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text>
                  Followers <Link
                    to={{
                      screen: 'Followers',
                      params: {
                        url: profileData.followers_url,
                      },
                    }}
                    style={{textDecorationLine: 'underline'}}
                  >{profileData.followers}</Link>
                </Text>
              </View>
              <View>
                <Text>
                  Following <Link
                    to={{
                      screen: 'Following',
                      params: {
                        url: (profileData.url + '/following'),
                      },
                    }}
                    style={{textDecorationLine: 'underline'}}
                  >{profileData.following}</Link>
                </Text>
              </View>
            </View>
          </Card.Content>
        </Card>
      </View>
    )
  );
};

export default ProfileCard;
