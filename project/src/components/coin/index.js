import React from 'react';
import {View, Text} from 'react-native';
import {CustomIcon} from '../../components';
import styles from './style';
export function Coin(props) {
  const {value} = props;

  return (
    <View style={styles.coin}>
      <Text style={styles.number}>{value}</Text>
      <CustomIcon name={'coin'} size={20} />
    </View>
  );
}
