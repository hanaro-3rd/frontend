import React, { useEffect, useRef, useState } from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const InfoText = ({ text }) => (
  <Text style={styles.informationText}>{text}</Text>
);

const InputField = React.forwardRef(({ placeholder, handlePress }, ref) => (
  <TouchableOpacity style={styles.inputFieldContainer} onPress={handlePress}>
    <TextInput ref={ref} style={styles.inputField} placeholder={placeholder} />
  </TouchableOpacity>
));

const SignUpPage = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const nameInputRef = useRef(null);
  const phoneNumberInputRef = useRef(null);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleAuthentication = () => {
    // Authentication logic
  };

  const infoTexts = [
    '주말 및 공휴일은 수수료가 붙습니다.. 어쩌구',
    '주말 및 공휴일은 수수료가 붙습니다.. 어쩌구',
    '주말 및 공휴일은 수수료가 붙습니다.. 어쩌구',
  ];

  return (
    <View style={styles.root}>
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.title}>휴대폰 본인인증</Text>
          <Text style={styles.subtitle}>
            회원여부 확인 및 가입을 진행합니다.
          </Text>
        </View>
        <View style={styles.bodyMain}>
          <InputField
            ref={nameInputRef}
            placeholder='이름'
            handlePress={() => nameInputRef.current?.focus()}
          />
          <InputField
            ref={phoneNumberInputRef}
            placeholder='휴대폰번호'
            handlePress={() => phoneNumberInputRef.current?.focus()}
          />
        </View>
        <View style={styles.bodyFooter}>
          {!isKeyboardVisible && (
            <View style={styles.informationContainer}>
              {infoTexts.map((text, index) => (
                <InfoText key={index} text={text} />
              ))}
            </View>
          )}
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleAuthentication}
          >
            <Text style={styles.buttonText}>인증 요청</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const commonTextStyle = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#F2F4F6',
  },
  title: {
    ...commonTextStyle,
    color: '#191F29',
    fontSize: 23,
    fontWeight: '700',
  },
  subtitle: {
    ...commonTextStyle,
    color: '#8B95A1',
    fontSize: 16,
    fontWeight: '400',
  },
  body: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: 'stretch',
  },
  bodyHeader: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 10,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  bodyMain: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    paddingVertical: 15,
    paddingHorizontal: 25,
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
    color: '#B0B8C1',
    fontSize: 16,
    fontWeight: '700',
  },
  informationText: {
    ...commonTextStyle,
    color: '#4E5968',
    fontSize: 13,
    fontWeight: '400',
  },
  bodyFooter: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 10,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  informationContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 5,
    alignSelf: 'stretch',
  },
  buttonText: {
    ...commonTextStyle,
    color: '#B0B8C1',
    fontSize: 16,
    fontWeight: '700',
  },
  submitButton: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    alignSelf: 'stretch',
    backgroundColor: '#F2F4F6',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
  },
});

export default SignUpPage;
