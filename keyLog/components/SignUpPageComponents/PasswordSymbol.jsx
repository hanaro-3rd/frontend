import React from 'react';
import { StyleSheet, View } from 'react-native';
import { widthPercentage } from '../../utils/ResponseSize';
import Ellipse from './Ellipse';

const PasswordSymbol = ({ isConfirming, confirmPassword, password }) => {
  return (
    <View style={styles.passwordSymbol}>
      {[...Array(6)].map((_, index) => (
        <Ellipse
          key={index}
          fill={
            isConfirming
              ? confirmPassword.length > index
                ? '#55ACEE'
                : '#B0B8C1'
              : password.length > index
              ? '#55ACEE'
              : '#B0B8C1'
          }
        />
      ))}
    </View>
  );
};

export default PasswordSymbol;

const styles = StyleSheet.create({
  passwordSymbol: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: widthPercentage(10),
    flexDirection: 'row',
  },
});
