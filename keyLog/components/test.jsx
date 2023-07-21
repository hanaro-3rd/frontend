import { StyleSheet, Text, View } from 'react-native';
import PopupBackground from '../../assets/vectors/PopupBackground.svg';
import { Cancel } from '../../components/Cancel';
import { Close } from '../../components/Close';

export function $11_______() {
  return (
    <View style={styles.root}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.title}>휴대폰 본인인증</Text>
          <Text style={styles.subtitle}>
            회원여부 확인 및 가입을 진행합니다.
          </Text>
        </View>
        <View style={styles.bodyMain}>
          <View style={styles.input}>
            <Text style={styles.$name}>이상준</Text>
            <Cancel />
          </View>
          <View style={styles.input2}>
            <Text style={styles.phoneNumber}>010-9556-4022</Text>
            <Cancel />
          </View>
        </View>
        <View style={styles.bodyFooter}>
          <View style={styles.submitButton}>
            <Text style={styles.buttonText}>인증 요청</Text>
          </View>
        </View>
      </View>
      <View style={styles.certificationNumberPopup}>
        <PopupBackground />
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
              <Close />
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
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 390,
    height: 844,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#F2F4F6',
  },
  header: {
    height: 50,
    alignItems: 'flex-start',
    gap: 10,
    flexShrink: 0,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    paddingVertical: 13,
    paddingHorizontal: 12,
  },
  title: {
    color: '#191F29',
    fontFamily: 'Inter',
    fontSize: 23,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  subtitle: {
    color: '#8B95A1',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
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
  $name: {
    color: '#191F29',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
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
  input: {
    height: 65,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#191F29',
    borderStyle: 'solid',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  phoneNumber: {
    color: '#191F29',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  input2: {
    height: 65,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#191F29',
    borderStyle: 'solid',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
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
  title2: {
    color: '#191F29',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
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
    lineHeight: 'normal',
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
    lineHeight: 'normal',
  },
  buttonText2: {
    color: '#55ACEE',
    fontFamily: 'Inter',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
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
    lineHeight: 'normal',
  },
  buttonText3: {
    color: '#F9FAFB',
    fontFamily: 'Inter',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
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
    lineHeight: 'normal',
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
