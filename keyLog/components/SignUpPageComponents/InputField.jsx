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
  successInputField: {
    borderColor: '#55acee',
    borderWidth: 1,
  },
  errorMessage: {
    color: '#E90061',
    fontSize: fontPercentage(12),
  },
  successMessage:{
    color: '#55acee',
    marginTop: heightPercentage(10),
    paddingVertical: heightPercentage(15),
    fontSize: fontPercentage(12),
  }
});

const InputField = React.forwardRef(
  (
    { placeholder, handlePress, value, onChangeText, hasError, onBlur,hasSuccess,maxLength,keyboardType },
    ref
  ) => (
    <View style={styles.inputFieldWrapper}>
      <TouchableOpacity
        style={[styles.inputFieldContainer, hasError && styles.errorInputField,hasSuccess&&styles.successInputField]}
        onPress={handlePress}
      >
        <TextInput
          ref={ref}
          onBlur={onBlur}
          style={styles.inputField}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor='#B0B8C1'
          maxLength={maxLength}
          keyboardType={keyboardType}
        />
      </TouchableOpacity>
      {hasError && (
        <Text style={styles.errorMessage}>입력하신 정보를 확인해주세요.</Text>
      )}
            {/* {hasSuccess && (
        <Text style={styles.successMessage}>입력하신 정보를 확인해주세요.</Text>
      )} */}
    </View>
  )
);

export default InputField;
