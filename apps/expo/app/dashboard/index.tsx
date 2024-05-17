import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import Robots from '@gluestack/app/Dashboard/Robots'

const index = (props: { navigation: any }) => {
  const router = useRouter()
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}
    >
      <Robots />
    </View>
  )
}

export default index
