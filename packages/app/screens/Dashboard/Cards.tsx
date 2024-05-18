import React from 'react';
import {
  Card,
  Text,
  VStack,
  Heading,
  Button,
  ButtonText,
  Box,
  ScrollView,
  Image,
  Divider,
  styled,
} from '@gluestack-ui/themed';
import { componentsConfig } from '@gluestack-ui/config';

const StyledImage = styled(
  Image,
  {
    width: '$full',
    borderRadius: '$xl',
  },
  componentsConfig.Image.componentConfig,
  {}
);
const Cards = () => {
  return (
    <ScrollView>
      <Card p="$5" borderRadius="$lg">
        <StyledImage
          mb="$6"
          h={240}
          alt="Fashion Clothing"
          source={{
            uri: 'https://assets.basspro.com/image/upload/c_limit,dpr_2.0,f_auto,h_250,q_auto,w_400/c_limit,h_250,w_400/v1/ProductImages/200/master1_100990553_main?pgw=1',
          }}
        />

        <Text
          fontSize="$sm"
          fontStyle="normal"
          fontFamily="$heading"
          fontWeight="$normal"
          lineHeight="$sm"
          mb="$2"
          sx={{
            color: '$textLight700',
            _dark: {
              color: '$textDark200',
            },
          }}
        >
          Fashion Clothing
        </Text>
        <VStack mb="$6">
          <Heading size="md" fontFamily="$heading" mb="$4">
            Cotton Kurta
          </Heading>
          <Text size="sm" fontFamily="$heading">
            Floral embroidered notch neck thread work cotton kurta in white and
            black.
          </Text>
        </VStack>
        <Box
          flexDirection="column"
          sx={{
            '@sm': {
              flexDirection: 'row',
            },
          }}
        >
          <Button
            px="$4"
            py="$2"
            mr="$0"
            mb="$3"
            sx={{
              '@sm': {
                mr: '$3',
                mb: '$0',
                flex: 1,
              },
            }}
          >
            <ButtonText size="sm">Add to cart</ButtonText>
          </Button>
          <Button
            px="$4"
            py="$2"
            variant="outline"
            borderColor="$borderLight300"
            $dark-borderColor="$backgroundDark600"
            sx={{
              '@sm': {
                flex: 1,
              },
            }}
          >
            <ButtonText
              size="sm"
              color="$textLight600"
              $dark-color="$textDark400"
            >
              Wishlist
            </ButtonText>
          </Button>
        </Box>
      </Card>
      <Divider my={0} />
      <Card p="$5" borderRadius="$lg">
        <StyledImage
          mb="$6"
          h={240}
          alt="Fashion Clothing"
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTadAT3b7O5jQXTF3_kwKkeiJ78P4N5AiU3yg&s',
          }}
        />

        <Text
          fontSize="$sm"
          fontStyle="normal"
          fontFamily="$heading"
          fontWeight="$normal"
          lineHeight="$sm"
          mb="$2"
          sx={{
            color: '$textLight700',
            _dark: {
              color: '$textDark200',
            },
          }}
        >
          Fargo, ND
        </Text>
        <VStack mb="$6">
          <Heading size="md" fontFamily="$heading" mb="$4">
            Bobs Family Farm
          </Heading>
        </VStack>
        <Box
          flexDirection="column"
          sx={{
            '@sm': {
              flexDirection: 'row',
            },
          }}
        >
          <Button
            px="$4"
            py="$2"
            mr="$0"
            mb="$3"
            sx={{
              '@sm': {
                mr: '$3',
                mb: '$0',
                flex: 1,
              },
            }}
          >
            <ButtonText size="sm">Start Dashboard</ButtonText>
          </Button>
        </Box>
      </Card>
    </ScrollView>
  );
};

export default Cards;
