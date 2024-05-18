import { View, Text, Button } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import Card from '@gluestack/app/Dashboard/Robots';

const index = (props: { navigation: any }) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}
    >
      <Card />
    </View>
  );
};

export default index;
