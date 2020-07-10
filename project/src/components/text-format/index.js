import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

export function TextFormat(props) {
  const {text, style = {}} = props;

  function format(content) {
    const split = content.split('-');
    return split.join(' ');
  }

  return (
    <>
      <Text style={[styles.text, style]}>{format(text)}</Text>
    </>
  );
}
