import React, {useEffect, useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {View} from 'react-native';
import styles from './styles';
import {api, getColorsBackground} from '../../services';
import LinearGradient from 'react-native-linear-gradient';
import {DetailsCard, TabView, Loader} from '../../components';

export function PokemonsDetailsScreen({
  route,
  navigation: {dangerouslyGetParent},
}) {
  const {pokemonId} = route.params;
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const parent = dangerouslyGetParent();
      if (parent) {
        parent.setOptions({
          tabBarVisible: false,
        });
      }

      return () => {
        if (parent) {
          parent.setOptions({
            tabBarVisible: true,
          });
        }
      };
    }, [dangerouslyGetParent]),
  );

  useEffect(() => {
    async function getPokemonDetails() {
      setIsLoading(true);
      const resp = await api.get(`/details/${pokemonId}`);
      setPokemonDetails(resp.data);
      setIsLoading(false);
    }
    getPokemonDetails();
  }, [pokemonId]);

  function renderContent() {
    if (isLoading) {
      return <Loader />;
    }

    return (
      <View style={styles.main}>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={styles.gradient}
          colors={getColorsBackground(pokemonDetails)}>
          <DetailsCard
            imageURL={pokemonDetails.image}
            name={pokemonDetails.name}
            types={pokemonDetails.types}
            description={pokemonDetails.description}>
            <TabView
              colors={getColorsBackground(pokemonDetails)}
              stats={pokemonDetails.stats}
              abilities={pokemonDetails.abilities}
              moves={pokemonDetails.moves}
            />
          </DetailsCard>
        </LinearGradient>
      </View>
    );
  }

  return renderContent();
}
