import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';

const ModalContent = ({ modalVisible, toggleModal }) => {
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
        <View style={styles.certificationNumberPopup}>
          <View style={styles.popup}>
            <View style={styles.popupHeader}>
              <View style={styles.popupHeaderRight}>
                <View style={styles.popupTitle}>
                  <Text style={styles.title2}>인증번호 입력</Text>
                </View>
                <View style={styles.popupSubtitle}>
                  <Text style={styles.subtitle2}>010-9556-4022</Text>
                </View>
              </View>
              <View style={styles.popupHeaderLeft}>
                <View style={styles.popupRemainTime}>
                  <Text style={styles.remainTime}>02:41</Text>
                  <View style={styles.extendTimeButton}>
                    <Text style={styles.buttonText2}>시간 연장</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.popupMain}>
              <View style={styles.input3}>
                <Text style={styles.certificationNumber}>인증번호</Text>
                <View style={styles.resendButton}>
                  <Text style={styles.buttonText3}>재전송</Text>
                </View>
              </View>
            </View>
            <View style={styles.popupFooter}>
              <View style={styles.submitButton2}>
                <Text style={styles.buttonText4}>확인</Text>
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
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    maxHeight: '40%',
  },
  certificationNumberPopup: {
    width: 390,
    height: 844,
    position: 'absolute',
  },
  popup: {
    width: 390,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: '#FFF',
    boxShadow: '1px -1px 10px 0px rgba(0, 0, 0, 0.20)',
    padding: 20,
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
    gap: 10,
    alignSelf: 'stretch',
  },
  popupTitle: {
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row',
  },
  subtitle2: {
    color: '#4E5968',
    fontFamily: 'Inter',
    fontSize: 12,
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
    gap: 5,
    flexDirection: 'row',
  },
  extendTimeButton: {
    alignItems: 'flex-end',
    gap: 10,
    borderWidth: 1,
    borderColor: '#55ACEE',
    borderStyle: 'solid',
    flexDirection: 'row',
    paddingVertical: 3,
    paddingHorizontal: 4,
    borderRadius: 2,
  },
  certificationNumber: {
    color: '#B0B8C1',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  buttonText3: {
    color: '#F9FAFB',
    fontFamily: 'Inter',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  popupMain: {
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  input3: {
    width: 350,
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
    width: 59,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 0,
    backgroundColor: '#333D4B',
    flexDirection: 'row',
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText4: {
    color: '#B0B8C1',
    fontFamily: 'Inter',
    fontSize: 16,
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
    width: 350,
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
