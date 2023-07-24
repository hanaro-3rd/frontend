import { StyleSheet, View, Text } from 'react-native';
import Ellipse1 from '../../assets/vectors/Ellipse1.svg';
import Ellipse2 from '../../assets/vectors/Ellipse2.svg';
import Ellipse5 from '../../assets/vectors/Ellipse5.svg';
import Ellipse6 from '../../assets/vectors/Ellipse6.svg';
import Ellipse3 from '../../assets/vectors/Ellipse3.svg';
import Ellipse4 from '../../assets/vectors/Ellipse4.svg';
import Vector from '../../assets/vectors/Vector.svg';
import theme from '../../theme';

export function $2________() {
  return (
    <View style={styles.root}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <View style={styles.bodyMain}>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>잠금해제 비밀번호를설정해주세요</Text>
            <View style={styles.passwordSymbol}>
              <Ellipse1 />
              <Ellipse2 />
              <Ellipse5 />
              <Ellipse6 />
              <Ellipse3 />
              <Ellipse4 />
            </View>
          </View>
          <View style={styles.numberPad}>
            <View style={styles.number}>
              <Text style={styles.$1}>1</Text>
            </View>
            <View style={styles.number2}>
              <Text style={styles.$2}>2</Text>
            </View>
            <View style={styles.number3}>
              <Text style={styles.$3}>3</Text>
            </View>
            <View style={styles.number4}>
              <Text style={styles.$4}>4</Text>
            </View>
            <View style={styles.number5}>
              <Text style={styles.$5}>5</Text>
            </View>
            <View style={styles.number6}>
              <Text style={styles.$6}>6</Text>
            </View>
            <View style={styles.number7}>
              <Text style={styles.$7}>7</Text>
            </View>
            <View style={styles.number8}>
              <Text style={styles.$8}>8</Text>
            </View>
            <View style={styles.number9}>
              <Text style={styles.$9}>9</Text>
            </View>
            <View style={styles.number10}></View>
            <View style={styles.number11}>
              <Text style={styles.$0}>0</Text>
            </View>
            <View style={styles.number12}>
              <Vector />
            </View>
          </View>
        </View>
        <View style={styles.bodyFooter}></View>
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
  mainText: {
    color: '#191F29',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  ellipse1: {
    width: 15,
    height: 15,
    fill: '#B0B8C1',
  },
  ellipse2: {
    width: 15,
    height: 15,
    fill: '#B0B8C1',
  },
  ellipse5: {
    width: 15,
    height: 15,
    fill: '#B0B8C1',
  },
  ellipse6: {
    width: 15,
    height: 15,
    fill: '#B0B8C1',
  },
  ellipse3: {
    width: 15,
    height: 15,
    fill: '#B0B8C1',
  },
  ellipse4: {
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
    height: 723,
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
  $1: {
    color: '#191F29',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
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
    gap: 10,
    flexDirection: 'row',
    padding: 10,
  },
  $2: {
    color: '#191F29',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  number2: {
    width: 130,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row',
    padding: 10,
  },
  $3: {
    color: '#191F29',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  number3: {
    width: 130,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row',
    padding: 10,
  },
  $4: {
    color: '#191F29',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  number4: {
    width: 130,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row',
    padding: 10,
  },
  $5: {
    color: '#191F29',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  number5: {
    width: 130,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row',
    padding: 10,
  },
  $6: {
    color: '#191F29',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  number6: {
    width: 130,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row',
    padding: 10,
  },
  $7: {
    color: '#191F29',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  number7: {
    width: 130,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row',
    padding: 10,
  },
  $8: {
    color: '#191F29',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  number8: {
    width: 130,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row',
    padding: 10,
  },
  $9: {
    color: '#191F29',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  number9: {
    width: 130,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row',
    padding: 10,
  },
  number10: {
    width: 130,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row',
    padding: 10,
  },
  $0: {
    color: '#191F29',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  number11: {
    width: 130,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row',
    padding: 10,
  },
  number12: {
    width: 130,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row',
    padding: 10,
  },
  bodyFooter: {
    height: 71,
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
