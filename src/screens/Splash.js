import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import PushNotification from 'react-native-push-notification';
import SplashScreenLogo from '../../assets/images/logo_transparent.png';

export default function Splash({navigation}) {
  useEffect(() => {
    createChannels();
    setTimeout(() => {
      navigation.replace('My Tasks');
    }, 2000);
  }, []);

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'task-channel',
      channelName: 'Task Channel',
    });
  };

  return (
    <View style={styles.body}>
      <Image source={SplashScreenLogo} resizeMode="center" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007FFF',
  },
});
