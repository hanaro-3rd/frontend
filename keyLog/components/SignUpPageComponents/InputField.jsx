import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import InfoText from './InfoText';

const commonTextStyle = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
};

const styles = StyleSheet.create({
  inputFieldWrapper: {
    alignSelf: 'stretch', // 추가
    marginBottom: 15, // 필요에 따라 조절
  },
  inputFieldContainer: {
    height: 65,
    alignItems: 'center',
    gap: 10,
    alignSelf: 'stretch',
    backgroundColor: '#F9FAFB',
    flexDirection: 'row',
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  inputField: {
    ...commonTextStyle,
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
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
