import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export function ScoreBlock(props) {
  const {
    name = '',
    score = 0,
    border = false,
    mainColor = '',
    percentage = '',
  } = props;

  function renderBorder() {
    if (border) {
      return {
        borderLeftWidth: 1,
        borderLeftColor: '#E4E4E4',
      };
    }
  }

  return (
    <View style={[styles.scoreBlock, renderBorder()]}>
      <Text style={[styles.title, {color: mainColor}]}>{name}</Text>
      <Text style={styles.score}>{`${score} ${percentage}` || 0}</Text>
    </View>
  );
}
