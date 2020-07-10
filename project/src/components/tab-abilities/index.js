import React from 'react';
import {FlatList, View} from 'react-native';
import {CardSimpleDetails} from '..';
import styles from './styles';

export function TabAbilities(props) {
  const {abilities = [], mainColor} = props;

  return (
    <View>
      <FlatList
        style={styles.listAbilities}
        data={abilities}
        renderItem={({item}) => (
          <CardSimpleDetails
            title={item.name}
            description={item.effect}
            color={mainColor}
          />
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
}
