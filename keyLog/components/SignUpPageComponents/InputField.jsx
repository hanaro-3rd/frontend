import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../utils/ResponseSize';

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
    borderColor: '#E90061',
    borderWidth: 1,
  },
  errorMessage: {
    color: '#E90061',
    marginTop: heightPercentage(10),
    paddingVertical: heightPercentage(15),
    fontSize: fontPercentage(12),
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
      {hasError && (
        <Text style={styles.errorMessage}>입력하신 정보를 확인해주세요.</Text>
      )}
    </View>
  )
);

export default InputField;
