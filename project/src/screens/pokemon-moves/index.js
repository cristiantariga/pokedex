import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {api} from '../../services';
import {TabMoves, Loader} from '../../components';

export function PokemonMovesScreen(props) {
  const {navigation} = props;

  const [moves, setMoves] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getPokemonDetails() {
      setIsLoading(true);
      const resp = await api.get('/moves');
      setMoves(resp.data);
      setIsLoading(false);
    }
    getPokemonDetails();
  }, []);

  function enterMovesDetails(id) {
    navigation.navigate('MoveDetailsScreen', {
      moveId: id,
    });
  }

  function renderContent() {
    if (isLoading) {
      return <Loader />;
    }

    return (
      <View style={styles.main}>
        <TabMoves moves={moves} onPressCard={enterMovesDetails} />
      </View>
    );
  }

  return renderContent();
}
