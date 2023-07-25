import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../utils/ResponseSize';
import InfoText from './InfoText';

const commonTextStyle = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
};

const styles = StyleSheet.create({
  inputFieldWrapper: {
    alignSelf: 'stretch',
    marginBottom: widthPercentage(15),
  },
  inputFieldContainer: {
    height: heightPercentage(65),
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#F9FAFB',
    flexDirection: 'row',
    paddingHorizontal: widthPercentage(20),
    borderRadius: 10,
  },
  inputField: {
    ...commonTextStyle,
    color: 'black',
    fontSize: fontPercentage(16),
    fontWeight: '700',
    flex: 1,
  },
  errorInputField: {
    borderColor: 'red',
    borderWidth: 1,
  },
});

const InputField = React.forwardRef(
  ({ placeholder, handlePress, value, onChangeText, hasError }, ref) => (
    <View style={styles.inputFieldWrapper}>
      <TouchableOpacity
        style={[styles.inputFieldContainer, hasError && styles.errorInputField]}
        onPress={handlePress}
      >
        <TextInput
          ref={ref}
          style={styles.inputField}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor='#B0B8C1'
        />
      </TouchableOpacity>
      {hasError && <InfoText text='입력 형식을 확인하세요' />}
    </View>
  )
);

export default InputField;
