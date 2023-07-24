import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BackSpace from '../../assets/vectors/BackSpace.svg';
import Ellipse from '../../assets/vectors/Ellipse.svg';

const LoginPage = () => {
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
        <View style={styles.bodyFooter}></View>
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#F2F4F6',
  },
  header: {
    alignItems: 'flex-start',
    gap: 10,
    flexShrink: 0,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    paddingVertical: 13,
    paddingHorizontal: 12,
  },
  mainText: {
    color: '#191F29',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  ellipse: {
    width: 15,
    height: 15,
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
    paddingTop: 150,
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
    gap: 30,
  },
  passwordSymbol: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
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
    width: 130,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  num: {
    color: '#191F29',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 24,
    fontStyle: 'normal',
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
});
