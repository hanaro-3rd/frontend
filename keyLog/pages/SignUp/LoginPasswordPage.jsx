import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import BackSpace from '../../assets/SignUp/BackSpace.svg';
import Ellipse from '../../assets/SignUp/Ellipse.svg';

const LoginPasswordPage = () => {
  const navigation = useNavigation();
  const goToMainPage = () => {
    navigation.replace('MainPage');
  };

  const goToLoginPatternPage = () => {
    navigation.replace('LoginPatternPage');
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <View style={styles.bodyMain}>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>
              잠금해제 비밀번호를 설정해주세요
            </Text>
            <View style={styles.passwordSymbol}>
              <Ellipse />
              <Ellipse />
              <Ellipse />
              <Ellipse />
              <Ellipse />
              <Ellipse />
            </View>
          </View>
          <View style={styles.numberPad}>
            <View style={styles.number}>
              <Text style={styles.num}>1</Text>
            </View>
            <View style={styles.number}>
              <Text style={styles.num}>2</Text>
            </View>
            <View style={styles.number}>
              <Text style={styles.num}>3</Text>
            </View>
            <View style={styles.number}>
              <Text style={styles.num}>4</Text>
            </View>
            <View style={styles.number}>
              <Text style={styles.num}>5</Text>
            </View>
            <View style={styles.number}>
              <Text style={styles.num}>6</Text>
            </View>
            <View style={styles.number}>
              <Text style={styles.num}>7</Text>
            </View>
            <View style={styles.number}>
              <Text style={styles.num}>8</Text>
            </View>
            <View style={styles.number}>
              <Text style={styles.num}>9</Text>
            </View>
            <View style={styles.number}>
              <Text style={styles.num}></Text>
            </View>
            <View style={styles.number}>
              <Text style={styles.num}>0</Text>
            </View>
            <View style={styles.number}>
              <Text style={styles.num}>
                <BackSpace />
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bodyFooter}>
          <TouchableOpacity onPress={goToLoginPatternPage}>
            <Text>Go to Login Pattern Page</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToMainPage}>
            <Text>Go to Main Page</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginPasswordPage;

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
    paddingVertical: hp('2%'),
  },
  mainText: {
    color: '#191F29',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: wp('5%'),
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
    paddingTop: hp('16%'),
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
    gap: hp('5%'),
  },
  passwordSymbol: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp('3%'),
    flexDirection: 'row',
  },
  numberPad: {
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'stretch',
    flexWrap: 'wrap',
    backgroundColor: '#FFF',
    flexDirection: 'row',
  },
  number: {
    width: wp('33%'),
    height: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  num: {
    color: '#191F29',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: wp('6%'),
    fontStyle: 'normal',
    fontWeight: '400',
  },
  bodyFooter: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: hp('1%'),
    height: hp('10%'),
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    paddingVertical: hp('2%'),
  },
});
