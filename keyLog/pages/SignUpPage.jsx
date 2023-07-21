import React, { useEffect, useRef, useState } from 'react';
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import InfoText from '../components/SignUp/InfoText';
import InputField from '../components/SignUp/InputField';
import ModalContent from '../components/SignUp/ModalContent';

const isValidName = name => {
  const regex = /^[가-힣]*$/;
  return regex.test(name);
};

const isValidPhoneNumber = number => {
  const regex = /^010-\d{4}-\d{4}$/;
  return regex.test(number);
};

const SignUpPage = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

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

  const infoTexts = [
    '주말 및 공휴일은 수수료가 붙습니다.. 어쩌구',
    '주말 및 공휴일은 수수료가 붙습니다.. 어쩌구',
    '주말 및 공휴일은 수수료가 붙습니다.. 어쩌구',
  ];

  const handleNameChange = text => {
    setName(text);
    setIsNameValid(isValidName(text));
  };

  const handlePhoneChange = number => {
    let cleaned = ('' + number).replace(/\D/g, '');
    let match;

    if (cleaned.length < 4) {
      match = cleaned.match(/^(\d{0,3})/);
    } else if (cleaned.length < 7) {
      match = cleaned.match(/^(\d{3})(\d{0,4})/);
    } else {
      match = cleaned.match(/^(\d{3})(\d{4})(\d{0,4})/);
    }

    if (match) {
      const part1 = match[1] || '',
        part2 = match[2] || '',
        part3 = match[3] || '';

      const newPhoneNumber = [part1, part2, part3].filter(Boolean).join('-');
      setPhoneNumber(newPhoneNumber);
      setIsPhoneNumberValid(isValidPhoneNumber(newPhoneNumber));
    }
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.root}
      keyboardShouldPersistTaps='handled'
    >
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
            value={name}
            onChangeText={handleNameChange}
            handlePress={() => nameInputRef.current?.focus()}
            hasError={!isNameValid}
          />
          <InputField
            ref={phoneNumberInputRef}
            placeholder='휴대폰번호'
            value={phoneNumber}
            onChangeText={handlePhoneChange}
            handlePress={() => phoneNumberInputRef.current?.focus()}
            hasError={!isPhoneNumberValid}
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
            style={[
              styles.submitButton,
              (!isNameValid || !isValidPhoneNumber(phoneNumber)) &&
                styles.disabledButton,
            ]}
            onPress={toggleModal}
            disabled={!isNameValid || !isValidPhoneNumber(phoneNumber)}
          >
            <Text style={styles.buttonText}>인증 요청</Text>
          </TouchableOpacity>
        </View>
        <ModalContent modalVisible={modalVisible} toggleModal={toggleModal} />
      </View>
    </ScrollView>
  );
};

const commonTextStyle = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
};

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
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
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  submitButton: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    alignSelf: 'stretch',
    backgroundColor: '#55ACEE',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
  },
  disabledButton: {
    backgroundColor: '#F2F4F6',
  },
});

export default SignUpPage;
