import React from 'react';
import { Box, StatusBar, ScrollView, VStack } from '@gluestack-ui/themed';
import { useSafeArea } from 'app/provider/safe-area/use-safe-area';

type GuestLayoutProps = {
  children: React.ReactNode;
  //gluestack colors
  topSafeAreaColor?: keyof import('@gluestack-style/react').GSConfig['tokens']['colors'];
  bottomSafeAreaColor?: keyof import('@gluestack-style/react').GSConfig['tokens']['colors'];
};

export default function GuestLayout(props: GuestLayoutProps) {
  const safeArea = useSafeArea();
  return (
    <Box
      sx={{
        _web: {
          height: '100vh',
          overflow: 'hidden',
        },
      }}
      height="$full"
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Box
        bg={
          props?.topSafeAreaColor
            ? `$${props?.topSafeAreaColor}`
            : '$backgroundLight0'
        }
        style={{ height: safeArea.top }}
      ></Box>
      <ScrollView
        flex={1}
        contentContainerStyle={{
          alignItems: 'center',
          flexGrow: 1,
          justifyContent: 'center',
        }}
        sx={{
          '@base': { _light: { bg: '$primary500' } },
          '@md': { _light: { bg: '$primary900' }, p: '$8' },
          _dark: { bg: '$backgroundDark900' },
        }}
        bounces={false}
      >
        <VStack
          w="$full"
          flex={1}
          overflow="hidden"
          sx={{
            '@md': {
              maxWidth: '$containerWidth',
              flexDirection: 'row',
              rounded: '$xl',
              flex: undefined,
            },
          }}
        >
          {props.children}
        </VStack>
      </ScrollView>
      <Box
        bg={
          props?.bottomSafeAreaColor
            ? `$${props?.bottomSafeAreaColor}`
            : '$backgroundLight0'
        }
        style={{ height: safeArea.bottom }}
      ></Box>
    </Box>
  );
}
