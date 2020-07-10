import typesAndColors from '../../res/types';
export function getColorsBackground(objectDetails) {
  const currentTypes = typesAndColors.filter(type => {
    if (objectDetails?.types || objectDetails?.type) {
      if (objectDetails?.types) {
        return objectDetails?.types[0] === type.type;
      }
      return objectDetails?.type?.name === type.type;
    }
    return [];
  });

  const mainType = currentTypes[0];
  return mainType?.color;
}
