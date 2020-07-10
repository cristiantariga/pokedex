import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

export function Score(props) {
  const {gradient, score} = props;
  return (
    <View style={styles.scoreBar}>
      <LinearGradient
        colors={gradient}
        style={[styles.score, {width: `${score * 0.75}%`}]}
      />
    </View>
  );
}
