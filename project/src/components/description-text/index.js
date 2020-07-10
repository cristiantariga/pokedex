import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export function DescriptionText(props) {
  const {description = ''} = props;

  return (
    <View style={styles.description}>
      <Text style={styles.textDescription}>{description.trim()}</Text>
    </View>
  );
}
