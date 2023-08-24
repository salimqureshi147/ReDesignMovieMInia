import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RF} from '../../shared/theme/Responsive';

const LightText = ({title, size, weight, color, top}) => {
  return (
    <Text
      style={{
        fontFamily: 'Railway',
        fontSize: RF(size ? size : 14),
        fontWeight: weight ? weight : '300',
        color: color ? color : '#000',
        marginTop: top ? top : 0,
      }}>
      {title}
    </Text>
  );
};

export default LightText;

const styles = StyleSheet.create({});
