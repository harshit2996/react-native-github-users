import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import {FlatList, RefreshControl} from 'react-native';
import { Card } from 'react-native-paper';

const parse_link_header = (header) => {
  if (header.length === 0) {
      throw new Error('input must not be of zero length');
  }

  // Split parts by comma
  var parts = header.split(',');
  var links = {};
  // Parse each part into a named link
  for (var i = 0; i < parts.length; i++) {
      var section = parts[i].split(';');
      if (section.length !== 2) {
          throw new Error("section could not be split on ';'");
      }
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;
  }
  return links;
};

export const FollowList = ({navigation, route}) => {
  const [followUsers, setFollowUsers] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [next, setNext] = useState(true);
  const updateFollowUsers = (cp) => {
    axios.get(route.params.url,{
      params: {
        per_page: 3,
        page: cp,
      },
    }).then((res => {
      console.log(res.data);
      if (followUsers) {
        setFollowUsers(followUsers.concat(res.data));
        setRefreshing(false);
        console.log(followUsers);
      } else {
        setFollowUsers(res.data);
        setRefreshing(false);
      }
    })).then(res=>{
      let links = parse_link_header(res.headers.link);
      console.log('HEADER LINKS:');
      if (links.keys().includes('next')) {
        setNext(true);
      } else {
        setNext(false);
      }
      console.log(links);
    })
    .catch(err => {
      console.log(err.response);
      setRefreshing(false);
    });
  };

  const refresh = () => {
    setRefreshing(true);
    setFollowUsers(undefined);
    setCurrentPage(1);
  };

  useEffect(() => {
    updateFollowUsers(currentPage);
  }, [currentPage]);

  const goToProfile = (p_url) => {
    console.log(p_url);
    navigation.navigate('Profile', {profile_url: p_url});
  };

  useFocusEffect(
    useCallback(()=>{
      console.log('WE ARE HERE' + route.params.profile_url);
      updateFollowUsers(currentPage);
      return () => {
        setFollowUsers(undefined);
      };
    },[route])
  );

  return (
    <FlatList data={followUsers} style={{flex: 1, padding: 20}} keyExtractor={(followUser,i) => i} onEndReachedThreshold={0.8} onEndReached={()=>{
      if (next) {
        setCurrentPage(currentPage + 1);
      }
    }}
    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refresh} />}
    renderItem={(followUser) => {
      return (
        <Card style={{margin: 20}} onPress={() => goToProfile(followUser.item.url)}>
          <Card.Cover source={{uri: followUser.item.avatar_url}} resizeMode="contain"/>
          <Card.Title title={followUser.item.name ? followUser.item.name : followUser.item.login} titleVariant="headlineMedium" titleStyle={{textAlign:'center'}} />
          {/* <Card.Actions style={{flexDirection:'column', alignContent: 'center'}}>
            <Button onPress={() => goToProfile(followUser.item.url)}>View Profile</Button>
          </Card.Actions> */}
        </Card>
      );
    }

    } />
  );
};
