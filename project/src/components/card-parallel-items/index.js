import React from 'react';
import {View, TouchableHighlight} from 'react-native';
import styles from './styles';

export function CardParallelItems(props) {
  const {id = false, onPressCard} = props;

  return (
    <TouchableHighlight
      activeOpacity={0.7}
      underlayColor={'rgba(188,224,238,1)'}
      onPress={() => onPressCard(id)}>
      <View style={styles.cardParallelItems}>{props.children}</View>
    </TouchableHighlight>
  );
}
