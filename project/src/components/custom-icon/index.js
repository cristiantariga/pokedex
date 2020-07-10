import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';
import {Text} from 'react-native';
import styles from './styles';
import {COLORS} from '../../res/enums';

export function CustomIcon(props) {
  const {
    size = 25,
    color = COLORS.BLACK_COLOR,
    gradient = [],
    text = '',
    style,
    ...otherProps
  } = props;

  const Icon = createIconSetFromIcoMoon(icoMoonConfig);

  function renderText() {
    if (text) {
      return <Text style={[styles.text, {color: color}]}> {text} </Text>;
    }
  }

  if (gradient.length) {
    return (
      <LinearGradient colors={gradient} style={[styles.gradientIcon, style]}>
        <Icon size={size} color={color} {...otherProps} />
        {renderText()}
      </LinearGradient>
    );
  }
  return <Icon size={size} color={color} {...otherProps} />;
}
