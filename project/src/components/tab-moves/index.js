import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {CardParallelItems, PokemonType, TextFormat} from '../../components';
import styles from './styles';

export function TabMoves(props) {
  const {moves, onPressCard = () => {}} = props;

  function renderPower(move) {
    if (move) {
      return <Text style={styles.power}>{move}</Text>;
    }
  }

  return (
    <FlatList
      data={moves}
      renderItem={({item}) => (
        <CardParallelItems id={item?.id} onPressCard={onPressCard}>
          <View style={styles.tabMoves}>
            <TextFormat text={item?.name} />
            {renderPower(item.power)}
          </View>
          <PokemonType types={[item?.type?.name || item?.type]} />
        </CardParallelItems>
      )}
      keyExtractor={item => item.name}
    />
  );
}
