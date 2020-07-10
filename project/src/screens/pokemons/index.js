import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {CardParallelItems, Loader, ListWrapper} from '../../components';
import styles from './styles';
import {api} from '../../services';

export function PokemonsListScreen(props) {
  const {navigation} = props;

  const [listPokemons, setListPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getPokemonsListData() {
      setIsLoading(true);
      const resp = await api.get('/list');
      setListPokemons(resp.data);
      setIsLoading(false);
    }
    getPokemonsListData();
  }, []);

  function enterPokemonDetails(id) {
    navigation.navigate('PokemonsDetailsScreen', {
      pokemonId: id,
    });
  }

  function renderContent() {
    if (isLoading) {
      return <Loader />;
    }

    return (
      <View style={styles.main}>
        <FlatList
          data={listPokemons.pokemons}
          renderItem={({item}) => (
            <CardParallelItems id={item.id} onPressCard={enterPokemonDetails}>
              <ListWrapper
                imageURL={item.image}
                id={item.id}
                name={item.name}
                types={item.types}
              />
            </CardParallelItems>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }

  return renderContent();
}
