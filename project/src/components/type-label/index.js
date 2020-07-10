import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {CustomIcon} from '../../components';

export function TypeLabel(props) {
  const {gradient = [], nameType = '', ...otherProps} = props;
  return (
    <View style={styles.label}>
      <CustomIcon
        gradient={gradient}
        name={nameType}
        color={'#FFFFFF'}
        text={nameType}
        {...otherProps}
      />
    </View>
  );
}
