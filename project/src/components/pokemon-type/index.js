import React from 'react';
import {CustomIcon} from '../../components';
import {GetColorsType} from '../../services/get-color-type';

export function PokemonType(props) {
  const {types, size = 25, style} = props;
  let currentTypesAndColors = GetColorsType(types);

  function renderTypes() {
    return currentTypesAndColors.map((type, index) => {
      return (
        <CustomIcon
          key={index}
          name={type.type}
          gradient={type.color}
          size={size}
          color={'#FFFFFF'}
          style={style}
        />
      );
    });
  }

  return <>{renderTypes()}</>;
}
