import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ellipse from '../../components/SignUpPageComponents/Ellipse';
import { heightPercentage, widthPercentage } from '../../utils/ResponseSize';

const Pattern = () => {
  return (
    <View style={styles.patternPad}>
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
  );
};

export default Pattern;

const styles = StyleSheet.create({
  patternPad: {
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
});
