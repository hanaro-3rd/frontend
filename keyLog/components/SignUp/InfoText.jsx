import React from 'react';
import { StyleSheet, Text } from 'react-native';

const commonTextStyle = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
};

const styles = StyleSheet.create({
  informationText: {
    ...commonTextStyle,
    color: '#4E5968',
    fontSize: 13,
    fontWeight: '400',
  },
});

const InfoText = ({ text }) => (
  <Text style={styles.informationText}>{text}</Text>
);

export default InfoText;
