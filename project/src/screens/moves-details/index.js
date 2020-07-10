import React, {useEffect, useState, useCallback} from 'react';
import {View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import styles from './styles';
import {DetailsCard, ScorePanel, Loader} from '../../components';
import {api, getColorsBackground} from '../../services';
import LinearGradient from 'react-native-linear-gradient';

export function MoveDetailsScreen({route, navigation: {dangerouslyGetParent}}) {
  const {moveId} = route.params;
  const [moveDetail, setMoveDetail] = useState({});
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

  const mainColor = getColorsBackground(moveDetail)[0];

  useEffect(() => {
    async function getPokemonDetails() {
      setIsLoading(true);
      const resp = await api.get(`/movesDetails/${moveId}`);
      setMoveDetail(resp.data);
      setIsLoading(false);
    }
    getPokemonDetails();
  }, [moveId]);

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
          colors={getColorsBackground(moveDetail)}>
          <DetailsCard
            name={moveDetail.name}
            description={moveDetail.effect}
            types={[moveDetail?.type?.name]}>
            <ScorePanel
              accuracy={moveDetail.accuracy}
              power={moveDetail.power}
              pp={moveDetail.pp}
              mainColor={mainColor}
            />
          </DetailsCard>
        </LinearGradient>
      </View>
    );
  }

  return renderContent();
}
