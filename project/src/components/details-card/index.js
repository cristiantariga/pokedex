import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {
  TypeLabel,
  DescriptionText,
  PokemonType,
  Coin,
  TextFormat,
} from '../../components';
import {GetColorsType} from '../../services';

export function DetailsCard(props) {
  const {
    name = '',
    imageURL,
    types = [],
    description = '',
    top = '',
    coin = '',
  } = props;

  function renderTypesLabel() {
    return GetColorsType(types).map((type, index) => {
      return (
        <TypeLabel gradient={type.color} nameType={type.type} key={index} />
      );
    });
  }

  function renderCoin() {
    if (coin) {
      return <Coin value={coin} />;
    }
  }

  function renderTypeImage() {
    if (!imageURL) {
      return <PokemonType types={types} size={65} style={styles.type} />;
    }
  }

  function addMarginTop(value) {
    if (value) {
      return {marginTop: value};
    }
  }

  return (
    <View style={styles.detailsCard}>
      <Image
        source={{uri: imageURL}}
        resizeMode={'cover'}
        style={[styles.image, addMarginTop(top)]}
      />
      {renderTypeImage()}
      <TextFormat text={name} style={styles.title} />
      {renderCoin()}
      <View style={styles.typesLabel}>{renderTypesLabel()}</View>
      <DescriptionText description={description} />
      {props.children}
    </View>
  );
}
