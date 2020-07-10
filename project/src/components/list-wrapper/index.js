import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {PokemonType} from '../../components';

export function ListWrapper(props) {
  const {imageURL = '', name = '', id, types = []} = props;

  function formatId(number) {
    return number > 9 ? `#0${number}` : `#00${number}`;
  }

  return (
    <>
      <Image resizeMode="cover" source={{uri: imageURL}} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={[styles.title, styles.id]}>{formatId(id)}</Text>
      </View>
      <PokemonType types={types} />
    </>
  );
}
