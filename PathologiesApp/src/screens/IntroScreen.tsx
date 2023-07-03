/* eslint-disable react-native/no-inline-styles */
// @ts-nocheck
import {useNavigation} from '@react-navigation/native';
import {Button, Center, Image, Text} from 'native-base';
import React from 'react';

const logo1 = require('../assets/images/Picture2.png');
const logo2 = require('../assets/images/Picture3.png');

const IntroScreen = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('Start');
  };

  return (
    <Center flex={1} backgroundColor="#eaf6f9">
      <Image
        source={logo1}
        alt="logo1"
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          width: 100,
          height: 50,
        }}
      />
      <Image
        source={logo2}
        alt="logo2"
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          width: 50,
          height: 50,
        }}
      />
      <Text bold fontSize="md" style={{width: '70%'}}>
        Cette application vous propose les dispositifs réglementaires concernant
        les maladies professionnelles extraits du Bulletin Officiel marocain N°
        160-14 du 19 Rabii I 1435 ( 21 janvier 2014)
      </Text>
      <Button onPress={handleNavigation} mt={5} bg="primary.600">
        Accéder à l'application
      </Button>
    </Center>
  );
};

export default IntroScreen;
