import React from 'react'
import {
  Box,
  VStack,
  Button,
  Image,
  Center,
  ButtonText,
} from '@gluestack-ui/themed'

import { useRouter } from 'solito/router'
import GuestLayout from '../../layouts/GuestLayout'

// to render login and sign up buttons
function ActionButtons() {
  const router = useRouter()

  return (
    <VStack
      space="xs"
      mt="$10"
      sx={{
        '@md': {
          mt: '$12',
        },
      }}
    >
      <Button
        sx={{
          ':hover': {
            bg: '$backgroundLight100',
          },
        }}
        size="md"
        onPress={() => router.push('/login')}
        backgroundColor="$backgroundLight0"
      >
        <ButtonText
          fontWeight="$bold"
          textDecorationLine="none"
          color="$primary500"
        >
          LOGIN
        </ButtonText>
      </Button>

      <Button
        sx={{
          ':hover': {
            bg: '$backgroundLight0',
            _text: {
              color: '$primary500',
            },
          },
        }}
        my="$4"
        size="md"
        variant="outline"
        onPress={() => router.push('/signup')}
        borderColor="$borderLight0"
      >
        <ButtonText textDecorationLine="none" color="$textLight50">
          SIGN UP
        </ButtonText>
      </Button>
      <Button
        sx={{
          ':hover': {
            bg: '$backgroundLight0',
            _text: {
              color: '$primary500',
            },
          },
        }}
        size="md"
        variant="outline"
        onPress={() => router.push('/dashboard')}
        borderColor="$borderLight0"
      >
        <ButtonText textDecorationLine="none" color="$textLight50">
          Dashboard
        </ButtonText>
      </Button>
    </VStack>
  )
}

function HeaderLogo() {
  return (
    <Box alignItems="center" justifyContent="center">
      <Image
        h="$10"
        w="$80"
        alt="gluestack-ui Pro"
        resizeMode="contain"
        source={require('./assets/images/gluestackUiProLogo_web_light.svg')}
        sx={{
          '@md': {
            display: 'flex',
          },
        }}
        display="none"
      />

      <Image
        sx={{
          '@md': {
            display: 'none',
          },
        }}
        alt="gluestack-ui Pro"
        display="flex"
        source={require('./assets/images/gluestackUiProLogo_mobile.png')}
        w={275}
        h={141}
      />
    </Box>
  )
}

export default function SplashScreen() {
  return (
    // place GluestackUIProvider in your app root accordingly
    <GuestLayout>
      <Center w="$full" flex={1}>
        <Box
          maxWidth={508}
          w="$full"
          minHeight={544}
          sx={{
            '@md': {
              px: '$8',
              bg: '$primary500',
            },
          }}
          px="$4"
          justifyContent="center"
        >
          <HeaderLogo />
          <ActionButtons />
        </Box>
      </Center>
    </GuestLayout>
  )
}
