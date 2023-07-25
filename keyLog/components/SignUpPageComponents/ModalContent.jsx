import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import CloseButton from '../../assets/SignUp/CloseButton.svg';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../utils/ResponseSize';

const ModalContent = ({ modalVisible, toggleModal, phoneNumber }) => {
  const [remainTime, setRemainTime] = useState(180);

  const inputRef = useRef(null);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (remainTime > 0) {
        setRemainTime(remainTime - 1);
      } else {
        clearInterval(countdown);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [remainTime]);

  const extendTime = () => {
    setRemainTime(180);
  };

  const displayTime = () => {
    const minutes = Math.floor(remainTime / 60);
    const seconds = remainTime % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  const handleInputPress = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const navigation = useNavigation();

  const goToLoginPasswordPage = () => {
    navigation.replace('LoginPasswordPage');
  };

  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={toggleModal}
      animationIn='slideInUp'
      animationOut='slideOutDown'
      backdropTransitionOutTiming={0}
      backdropOpacity={0.5}
      style={styles.modalContainer}
    >
      <View style={styles.modalContent}>
        <View
          isVisible={modalVisible}
          onBackdropPress={toggleModal}
          animationIn='slideInUp'
          animationOut='slideOutDown'
          backdropTransitionOutTiming={0}
          backdropOpacity={0.5}
          style={styles.certificationNumberPopup}
        >
          <View style={styles.popup}>
            <View style={styles.popupHeader}>
              <View style={styles.popupHeaderRight}>
                <View style={styles.popupTitle}>
                  <Text style={styles.title2}>인증번호 입력</Text>
                </View>
                <View style={styles.popupSubtitle}>
                  <Text style={styles.subtitle2}>{phoneNumber}</Text>
                </View>
              </View>
              <View style={styles.popupHeaderLeft}>
                <CloseButton />
                <View style={styles.popupRemainTime}>
                  <Text style={styles.remainTime} onPress={extendTime}>
                    {displayTime()}
                  </Text>
                  <View style={styles.extendTimeButton}>
                    <Text style={styles.buttonText2}>시간 연장</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.popupMain}>
              <View style={styles.input3}>
                <TouchableOpacity>
                  <TextInput
                    ref={inputRef}
                    style={styles.certificationNumber}
                    placeholder='인증번호'
                  />
                </TouchableOpacity>
                <View style={styles.resendButton}>
                  <Text style={styles.buttonText3}>재전송</Text>
                </View>
              </View>
            </View>
            <View style={styles.popupFooter}>
              <View style={styles.submitButton2}>
                <TouchableOpacity onPress={goToLoginPasswordPage}>
                  <Text style={styles.buttonText4}>확인</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={toggleModal}></TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: widthPercentage(20),
    height: heightPercentage(280),
  },
  certificationNumberPopup: {
    width: widthPercentage(390),
    height: heightPercentage(844),
    position: 'absolute',
    alignSelf: 'center',
  },
  popup: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: heightPercentage(20),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: '#FFF',
    boxShadow: '1px -1px 10px 0px rgba(0, 0, 0, 0.20)',
    padding: widthPercentage(20),
  },
  popupHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  popupHeaderRight: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: heightPercentage(10),
    alignSelf: 'stretch',
  },
  popupTitle: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  subtitle2: {
    color: '#4E5968',
    fontFamily: 'Inter',
    fontSize: fontPercentage(12) * 0.88,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  popupSubtitle: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  remainTime: {
    color: '#55ACEE',
    fontFamily: 'Inter',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  buttonText2: {
    color: '#55ACEE',
    fontFamily: 'Inter',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  popupHeaderLeft: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 8,
  },
  popupRemainTime: {
    alignItems: 'center',
    gap: widthPercentage(5),
    flexDirection: 'row',
  },
  extendTimeButton: {
    alignItems: 'flex-end',
    borderWidth: 1,
    borderColor: '#55ACEE',
    borderStyle: 'solid',
    flexDirection: 'row',
    paddingVertical: heightPercentage(3),
    paddingHorizontal: widthPercentage(4),
    borderRadius: 2,
  },
  certificationNumber: {
    color: '#B0B8C1',
    fontFamily: 'Inter',
    fontSize: fontPercentage(16) * 0.88,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  buttonText3: {
    color: '#F9FAFB',
    fontFamily: 'Inter',
    fontSize: fontPercentage(14) * 0.88,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  popupMain: {
    height: heightPercentage(65),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  input3: {
    width: widthPercentage(350),
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#F9FAFB',
    flexDirection: 'row',
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  resendButton: {
    width: widthPercentage(59),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 0,
    backgroundColor: '#333D4B',
    flexDirection: 'row',
    paddingVertical: heightPercentage(7),
    paddingHorizontal: widthPercentage(10),
    borderRadius: 5,
  },
  buttonText4: {
    color: '#B0B8C1',
    fontFamily: 'Inter',
    fontSize: fontPercentage(16) * 0.88,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  popupFooter: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  submitButton2: {
    width: widthPercentage(350),
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

export default ModalContent;
