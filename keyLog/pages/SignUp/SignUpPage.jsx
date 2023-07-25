import React, { useEffect, useRef, useState } from 'react';
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import InfoText from '../../components/SignUpPageComponents/InfoText';
import InputField from '../../components/SignUpPageComponents/InputField';
import ModalContent from '../../components/SignUpPageComponents/ModalContent';
import { fontPercentage } from '../../utils/ResponseSize';

const isValidName = name => {
  const regex = /^[가-힣]*$/;
  return regex.test(name);
};

const isValidPersonalNumber = number => {
  const regex = /^\d{6}-\d{7}$/;
  return regex.test(number);
};

const isValidPhoneNumber = number => {
  const regex = /^010-\d{4}-\d{4}$/;
  return regex.test(number);
};

const SignUpPage = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [name, setName] = useState('');
  const [personalNumber, setPersonalNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isPersonalNumberValid, setIsPersonalNumberValid] = useState(true);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const nameInputRef = useRef(null);
  const phoneNumberInputRef = useRef(null);
  const personalNumberInputRef = useRef(null);

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

  const handlePersonalNumberChange = text => {
    let cleaned = ('' + text).replace(/\D/g, '');
    let match;

    if (cleaned.length < 7) {
      match = cleaned.match(/^(\d{0,6})/);
    } else {
      match = cleaned.match(/^(\d{6})(\d{0,7})/);
    }

    if (match) {
      const part1 = match[1] || '',
        part2 = match[2] || '';

      const newPersonalNumber = [part1, part2].filter(Boolean).join('-');
      setPersonalNumber(newPersonalNumber);
      setIsPersonalNumberValid(isValidPersonalNumber(newPersonalNumber));
    }
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
      <View style={styles.header}></View>
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
            ref={personalNumberInputRef}
            placeholder='주민번호'
            value={personalNumber}
            onChangeText={handlePersonalNumberChange}
            handlePress={() => personalNumberInputRef.current?.focus()}
            hasError={!isPersonalNumberValid}
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
              <InfoText texts={infoTexts} />
            </View>
          )}
          <TouchableOpacity
            style={[
              styles.submitButton,
              (!isNameValid ||
                !isValidPhoneNumber(phoneNumber) ||
                !isValidPersonalNumber(personalNumber)) &&
                styles.disabledButton,
            ]}
            onPress={toggleModal}
            disabled={
              !isNameValid ||
              !isValidPhoneNumber(phoneNumber) ||
              !isValidPersonalNumber(personalNumber)
            }
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
  header: {
    alignItems: 'flex-start',
    flexShrink: 0,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    paddingVertical: hp('2%'),
  },
  title: {
    ...commonTextStyle,
    color: '#191F29',
    fontSize: wp('5.5%'),
    fontWeight: '700',
  },
  subtitle: {
    ...commonTextStyle,
    color: '#8B95A1',
    fontSize: wp('3.5%'),
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
    gap: hp('1.5%'),
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('5%'),
  },
  bodyMain: {
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('4%'),
  },
  bodyFooter: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: hp('2%'),
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('5%'),
  },
  informationContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: hp('0.5%'),
    alignSelf: 'stretch',
  },
  buttonText: {
    ...commonTextStyle,
    color: 'white',
    fontSize: fontPercentage(16),
    fontWeight: '700',
  },
  submitButton: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#55ACEE',
    flexDirection: 'row',
    borderRadius: 10,
  },
  disabledButton: {
    backgroundColor: '#F2F4F6',
  },
});

export default SignUpPage;
