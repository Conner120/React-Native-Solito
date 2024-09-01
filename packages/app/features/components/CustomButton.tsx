import { Platform, TouchableHighlight, TouchableOpacity } from 'react-native';
import React from 'react';
import { Button as BaseButton, IButtonProps } from '@gluestack-ui/themed';

const Button = (props: any) => {
  if (Platform.isTV === true) {
    return (
      <TouchableHighlight
        activeOpacity={0.7}
        underlayColor="#d96500"
        onPress={props?.onPress}
      >
        <BaseButton {...props} />
      </TouchableHighlight>
    );
  }
  return <Button {...props} />;
};

export default Button;
