// index app
import React, { useState } from 'react'
import SplashScreen from '@gluestack/app/Login/SplashScreen'
import { useEffect } from 'react'
import { Button, Text, View } from '@gluestack-ui/themed'

const App = () => {
  const [first, setfirst] = useState(0)
  useEffect(() => {
    console.log('useEffect')
  }, [first])

  return (
    <>
      <View height={100} />
      {/* <SplashScreen /> */}
      <Button
        onPress={() => {
          console.log('Button pressed')
          setfirst(first + 1)
        }}
      >
        <Text>Press me</Text>
      </Button>
    </>
  )
}

export default App
