import React from 'react';
import { Box, VStack, Center, ButtonText, Image } from '@gluestack-ui/themed';
import {
  Button as NativeButton,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'solito/router';
import GuestLayout from '../../layouts/GuestLayout';
import Button from '../../features/components/CustomButton';

// to render login and sign up buttons
function ActionButtons() {
  const router = useRouter();
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
      <NativeButton title="Login" onPress={() => router.push('/login')} />
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
      <Box my={'$4'}>
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
          onPress={() => router.push('/signup')}
          borderColor="$borderLight0"
        >
          <ButtonText textDecorationLine="none" color="$textLight50">
            SIGN UP
          </ButtonText>
        </Button>
      </Box>
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
        onPress={() => router.push('/dashboards/')}
        borderColor="$borderLight0"
      >
        <ButtonText textDecorationLine="none" color="$textLight50">
          Dashboard
        </ButtonText>
      </Button>
    </VStack>
  );
}

function HeaderLogo() {
  return (
    <Box alignItems="center" justifyContent="center">
      <Image
        size="2xl"
        source={{
          uri: '/logoHigh.png',
        }}
        alt="Gluestack Logo"
      />
    </Box>
  );
}

export default function SplashScreen() {
  return (
    // place GluestackUIProvider in your app root accordingly
    <GuestLayout
      topSafeAreaColor={'secondary500'}
      bottomSafeAreaColor={'secondary500'}
    >
      <Center w="$full" flex={1}>
        <Box
          maxWidth={508}
          w="$full"
          minHeight={544}
          sx={{
            '@md': {
              px: '$8',
              bg: '$secondary500',
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
  );
}
