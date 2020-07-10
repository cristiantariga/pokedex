import React, {useState, useEffect} from 'react';
import {View, FlatList, Image} from 'react-native';
import styles from './styles';
import {api} from '../../services';
import {CardParallelItems, TextFormat, Coin, Loader} from '../../components';
export function PokemonItemsScreen(props) {
  const {navigation} = props;

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getItems() {
      setIsLoading(true);
      const resp = await api.get('/items');
      setItems(resp.data);
      setIsLoading(false);
    }
    getItems();
  }, []);

  function onPressCard(id) {
    navigation.navigate('ItemsDetailsScreen', {
      itemId: id,
    });
  }

  function renderContent() {
    if (isLoading) {
      return <Loader />;
    }

    return (
      <View>
        <FlatList
          data={items}
          renderItem={({item}) => (
            <CardParallelItems id={item?.id} onPressCard={onPressCard}>
              <View style={styles.imageAndName}>
                <Image
                  source={{uri: item.image}}
                  resizeMode="cover"
                  style={styles.image}
                />
                <TextFormat text={item.name} />
              </View>
              <Coin value={item.cost} />
            </CardParallelItems>
          )}
          keyExtractor={item => item.name}
        />
      </View>
    );
  }

  return renderContent();
}
