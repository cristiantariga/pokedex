import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {COLORS} from '../../res/enums';
import styles from './styles';

export function Loader(props) {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size={100} color={COLORS.MAIN_COLOR} />
    </View>
  );
}
