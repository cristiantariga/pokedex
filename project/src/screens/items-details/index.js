import React, {useEffect, useState, useCallback} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {useFocusEffect} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {DetailsCard, Loader} from '../../components';
import {api} from '../../services';
export function ItemsDetailsScreen({
  route,
  navigation: {dangerouslyGetParent},
}) {
  const {itemId} = route.params;
  const [item, setItem] = useState({});
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
    async function getItemDetails() {
      setIsLoading(true);
      const resp = await api.get(`/itemsDetails/${itemId}`);
      setItem(resp.data);
      setIsLoading(false);
    }
    getItemDetails();
  }, [itemId]);

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
          colors={['#6fd2ce', '#7cd58e']}>
          <DetailsCard
            name={item.name}
            description={item.effect}
            imageURL={item.image}
            top={-110}
            coin={item.cost}
          />
        </LinearGradient>
      </View>
    );
  }

  return renderContent();
}
