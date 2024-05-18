import React from 'react';
import {
  Box,
  VStack,
  Button,
  Center,
  ButtonText,
  Icon,
} from '@gluestack-ui/themed';

import { useRouter } from 'solito/router';
import GuestLayout from '../../layouts/GuestLayout';
import { SunIcon } from '@gluestack-ui/themed';

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
      {/* <Button
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
      </Button> */}
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
      <Icon as={SunIcon} color={'$yellow500'} m="$2" w={'$48'} h="$48" />
    </Box>
  );
}

export default function SplashScreen() {
  return (
    // place GluestackUIProvider in your app root accordingly
    <GuestLayout
      topSafeAreaColor={'primary500'}
      bottomSafeAreaColor={'primary500'}
    >
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
  );
}
