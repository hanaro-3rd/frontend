import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Ellipse from '../../assets/SignUp/Ellipse.svg';
import Ellipse from '../../components/SignUpPageComponents/Ellipse';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../utils/ResponseSize';

const LoginPatternPage = () => {
  const navigation = useNavigation();

  const goToLoginPasswordPage = () => {
    navigation.replace('LoginPasswordPage');
  };

  const goToMainPage = () => {
    navigation.replace('MainPage');
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <View style={styles.bodyMain}>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>잠금해제 패턴을 설정해주세요</Text>
          </View>
          <View style={styles.numberPad}>
            <View style={styles.patternRow}>
              <View>
                <Ellipse />
              </View>
              <View>
                <Ellipse />
              </View>
              <View>
                <Ellipse />
              </View>
            </View>
            <View style={styles.patternRow}>
              <View>
                <Ellipse />
              </View>
              <View>
                <Ellipse />
              </View>
              <View>
                <Ellipse />
              </View>
            </View>
            <View style={styles.patternRow}>
              <View>
                <Ellipse />
              </View>
              <View>
                <Ellipse />
              </View>
              <View>
                <Ellipse />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bodyFooter}>
          <TouchableOpacity onPress={goToLoginPasswordPage}>
            <Text>Go to Login Password Page</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToMainPage}>
            <Text>Go to Main Page</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginPatternPage;

const styles = StyleSheet.create({
  root: {
    flex: 1,
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
    paddingVertical: heightPercentage(13),
  },
  mainText: {
    color: '#191F29',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: fontPercentage(20),
    fontStyle: 'normal',
    fontWeight: '700',
  },
  ellipse: {
    fill: '#B0B8C1',
  },
  body: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
  },
  bodyMain: {
    flex: 1,
    paddingTop: heightPercentage(150),
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberPad: {
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'stretch',
    flexWrap: 'wrap',
    backgroundColor: '#FFF',
    paddingHorizontal: widthPercentage(50),
  },
  patternRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    paddingBottom: heightPercentage(100),
  },
  bodyFooter: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: heightPercentage(10),
    height: heightPercentage(71),
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    paddingVertical: heightPercentage(15),
  },
});
