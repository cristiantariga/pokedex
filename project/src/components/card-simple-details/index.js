import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export function CardSimpleDetails(props) {
  const {title, description, color} = props;

  return (
    <View style={styles.cardSimpleDetails}>
      <Text style={[styles.title, {color}]}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}
